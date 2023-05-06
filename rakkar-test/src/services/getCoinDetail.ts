import axios from "axios";
import { useEffect, useState } from "react";
import { getCoinDetailApi } from './coingeckoApi';

export interface CoinDetailModel {
    current_price: number;
    market_cap_rank: number;
    market_cap: number;
}

export async function getCoinDetail(coinId: string): Promise<CoinDetailModel>{
    let data = await getCoinDetailApi(coinId);
    console.log(data);
    return {
        current_price: data.market_data.current_price.usd,
        market_cap_rank: data.market_cap_rank,
        market_cap: data.market_data.market_cap.usd,
    };
};
