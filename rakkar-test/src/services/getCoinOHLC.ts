import axios from "axios";
import { useEffect, useState } from "react";
import { getOHLCApi } from './coingeckoApi';
import { data } from "@/components/LineChartCoin";

export interface CoinOHLCDetailModel {
    price_24h: {
        high: number;
        low: number;
    };
    price_7d: {
        high: number;
        low: number;
    };
}

async function getOHLCByDays(coinId: string, currency: string, day: number) {
    let data = await getOHLCApi(coinId, currency, day);

    let high = data[0][2];
    let low = data[0][3];

    data.map((val: any) => {
        if (val[2] > high)
            high = val[2];

        if (val[3] <= low)
            low = val[3];
    });

    return {
        high: high,
        low: low
    }
};


export async function getOHLC(coinId: string, currency: string): Promise<CoinOHLCDetailModel> {
    let data_1d = await getOHLCByDays(coinId, currency, 1);
    let data_7d = await getOHLCByDays(coinId, currency, 7);
    return {
        price_24h: data_1d,
        price_7d: data_7d
    }
};
