import * as React from 'react';
import { styled } from '@mui/material/styles';

import { getCoinDetail, CoinDetailModel } from '../services/getCoinDetail';
import { getPriceChangeRange } from '@/services/getPriceChangeRange';
import { TredingCoinModel } from '@/services/getTrendingCoin';
import { Box, Button, ButtonGroup, Divider, Grid, Stack, Typography } from '@mui/material';

const getTimeData = (coinId: string, from: number, to: number) => {
    if (coinId == null || coinId == undefined)
        return;
    console.log("adad");
    let result = getPriceChangeRange(coinId, "usd", from, to);
    console.log(result);
}

const handleTimeChange = (cointId: string, time: string) => {
    switch (time) {
        case "24h": {
            let today = new Date()
            let from = new Date(today)
            from.setDate(from.getDate() - 1)

            getTimeData(cointId, from.valueOf(), today.valueOf());
        }
        case "7d": {
            let today = new Date()
            let from = new Date(today)
            from.setDate(from.getDate() - 7)

            getTimeData(cointId, from.valueOf(), today.valueOf());
        }
        case "14d": {
            let today = new Date()
            let from = new Date(today)
            from.setDate(from.getDate() - 14)

            getTimeData(cointId, from.valueOf(), today.valueOf());
        }
    }
    console.log(time);
}


const CoindDetailUI = ( prop : TredingCoinModel) => {
    console.log (prop);
    let data = prop?.prop;
   // let coinDetail = getCoinDetail(data?.id);
    if (data?.id)
        handleTimeChange(data.id, "24h");

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
            <div style={{ marginRight: 20, 'text-align': 'right' }}>
                <ButtonGroup variant="contained" aria-label="outlined default button group">
                    <Button onClick={(event) => {
                        handleTimeChange(data.id, "24h");
                    }}>24h</Button>
                    <Button onClick={(event) => { handleTimeChange(data.id, '7d') }}>7d</Button>
                    <Button onClick={(event) => { handleTimeChange(data.id, '14d') }}>14d</Button>
                </ButtonGroup>
            </div>
        </Stack>
    );
}

export default CoindDetailUI;