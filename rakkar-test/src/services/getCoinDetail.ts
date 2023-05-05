import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://api.coingecko.com/api/v3/coins/";

export interface CoinDetailModel {
    current_price: number;
}

async function getCoinDetailApi(coinId: string) {
    const response = await axios.get(baseUrl + coinId);
    return response.data;
};

export async function getCoinDetail(coinId: string): CoinDetailModel{
    let data = await getCoinDetailApi(coinId);
    return {
        current_price: data.market_data.current_price.usd,
    };
};
