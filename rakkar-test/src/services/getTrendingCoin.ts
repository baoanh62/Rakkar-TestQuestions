import axios from "axios";
import { useEffect, useState } from "react";
import { fetchTrendingCoins } from './coingeckoApi';

export interface TredingCoinModel {
    coin_id: number,
    id: string,
    large?: string | any,
    market_cap_rank?: number | any,
    name: string,
    price_btc?: number | any,
    score?: number | any,
    slug?: string | any,
    small?: string | any,
    symbol?: string | any,
    thumb?: string | any,
}


export async function findTrendingCoin(): Promise<TredingCoinModel[]> {
    let coins = await fetchTrendingCoins();
    let coinModels = coins.map((coin: any) => ({
        coin_id: coin.item.coin_id,
        id: coin.item.id,
        large: coin.item.large,
        market_cap_rank: coin.item.market_cap_rank,
        name: coin.item.name,
        price_btc: coin.item.price_btc,
        score: coin.item.score,
        slug: coin.item.slug,
        small: coin.item.small,
        symbol: coin.item.symbol,
        thumb: coin.item.thumb,
    }));

    return coinModels;
}