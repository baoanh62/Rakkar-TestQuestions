import axios from "axios";
import { useEffect, useState } from "react";
import { getCoinDetailApi } from './coingeckoApi';

export interface CoinDetailModel {
    current_price: number;
}

export async function getCoinDetail(coinId: string): Promise<CoinDetailModel>{
    let data = await getCoinDetailApi(coinId);
    return {
        current_price: data.market_data.current_price.usd,
    };
};
