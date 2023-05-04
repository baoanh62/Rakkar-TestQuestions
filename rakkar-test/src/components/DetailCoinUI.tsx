import * as React from 'react';
import { styled } from '@mui/material/styles';

import { getCoinDetail, CoinDetailModel } from '../services/getCoinDetail';
import { getPriceChangeRange } from '@/services/getPriceChangeRange';
import { TredingCoinModel } from '@/services/getTrendingCoin';
import { Box, Button, ButtonGroup, Divider, Grid, Stack, Typography } from '@mui/material';

interface DetailProps {
    trendingModel: TredingCoinModel,
    emitRangePriceChange: (time: string) => void;
}

const getTimeData = (from: number, to: number) => {
    // let result = getPriceChangeRange(coinId, "usd", from, to);
    // console.log(result);
}

const CoindDetailUI = (props: DetailProps) => {

    const sendDataToParent = (time: string): void => {
        props.emitRangePriceChange(time);
    }

    let data = props?.trendingModel;

    if (!data) {
        return (
            <h2>Data Not Found</h2>
        );
    }
    
    return (
        <Stack>
            <Grid container style={{ height: "100%" }}>
                <Grid>
                    <img src={data.small} />
                </Grid>
                <Divider />
                <Box mt={2}>
                    <h2>
                        <b>{data.name}</b> {data.symbol}
                    </h2>
                    {/* <Typography variant='h4'>{prop.price_btc}</Typography> */}
                </Box>
            </Grid>
            <div style={{ marginRight: 20, textAlign: 'right' }}>
                <ButtonGroup variant="contained" aria-label="outlined default button group">
                    <Button onClick={(event) => {
                        sendDataToParent("24h");
                    }}>24h</Button>
                    <Button onClick={(event) => { sendDataToParent('7d') }}>7d</Button>
                    <Button onClick={(event) => { sendDataToParent('14d') }}>14d</Button>
                </ButtonGroup>
            </div>
        </Stack>
    );
}

export default CoindDetailUI;