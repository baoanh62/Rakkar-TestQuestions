import * as React from 'react';
import { styled } from '@mui/material/styles';

import { getCoinDetail, CoinDetailModel } from '../services/getCoinDetail';
import { getPriceChangeRange } from '@/services/getPriceChangeRange';
import { TredingCoinModel } from '@/services/getTrendingCoin';
import { Box, Button, ButtonGroup, Divider, Grid, Stack, Typography } from '@mui/material';

interface DetailProps {
    trendingModel: TredingCoinModel,
    coinDetail: CoinDetailModel,
    emitRangePriceChange: (time: string) => void;
}

const CoindDetailUI = (props: DetailProps) => {

    const sendDataToParent = (time: string): void => {
        props.emitRangePriceChange(time);
    }

    let data = props?.trendingModel;
    let coinDetail = props?.coinDetail;

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
                    <Typography variant='h4'>{coinDetail?.current_price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        })}</Typography>
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