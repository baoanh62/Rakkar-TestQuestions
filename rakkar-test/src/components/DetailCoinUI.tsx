import * as React from 'react';
import { getCoinDetail, CoinDetailModel } from '../services/getCoinDetail';
import { getPriceChangeRange } from '@/services/getPriceChangeRange';
import { TredingCoinModel } from '@/services/getTrendingCoin';
import { Avatar, Card, CardActionArea, CardContent, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CoinOHLCDetailModel } from '@/services/getCoinOHLC';
import EqualizerTwoToneIcon from '@mui/icons-material/EqualizerTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PriceChangeTwoToneIcon from '@mui/icons-material/PriceChangeTwoTone';

interface DetailProps {
    trendingModel: TredingCoinModel,
    coinDetail: CoinDetailModel,
    coinOHCL: CoinOHLCDetailModel,
    emitRangePriceChange: (time: string) => void;
}

const CurrencyFormat = (price: number): string => {
    if (!price)
        return '';

    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

const defaultTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#e3f2fd',
        },
    },
});

const CoindDetailUI = (props: DetailProps) => {
    let data = props?.trendingModel;
    let coinDetail = props?.coinDetail;
    let coinOHCL = props?.coinOHCL;

    if (!data) {
        return (
            <h2>Data Not Found</h2>
        );
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Card >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="body2" component="div" >
                            <img
                                loading="lazy"
                                src={data.small}
                                alt={data.name}
                            />
                            <b>{data.name}</b>
                        </Typography>
                        <Typography gutterBottom variant="h2" component="div">
                            {data.symbol}
                        </Typography>
                        <Typography variant="h3" color="text.secondary">
                            {CurrencyFormat(coinDetail?.current_price)}
                        </Typography>
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                            }}
                        >
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MonetizationOnTwoToneIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="24h Low / 24h High" secondary={CurrencyFormat(coinOHCL?.price_24h.low) + " / " + CurrencyFormat(coinOHCL?.price_24h.high)} />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PriceChangeTwoToneIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="7d Low / 7d High" secondary={CurrencyFormat(coinOHCL?.price_7d.low) + " / " + CurrencyFormat(coinOHCL?.price_7d.high)} />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <EqualizerTwoToneIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Market Cap Rank" secondary={"# " + coinDetail?.market_cap_rank} />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BeachAccessIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Market Cap" secondary={CurrencyFormat(coinDetail?.market_cap)} />
                            </ListItem>
                        </List>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
}

export default CoindDetailUI;