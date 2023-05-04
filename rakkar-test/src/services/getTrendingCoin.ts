import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://api.coingecko.com/api/v3/search/trending";

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

async function fetchTrendingCoins() {
    const response = await axios.get(baseUrl,
        {
            params: {
                include_platform: false,
            },
        }
    );

    return response.data.coins;
};

export const findTrendingCoin = (): TredingCoinModel[] => {

    const [data, setTredingCoinModel] = useState<TredingCoinModel[]>([]);

    useEffect(() => {
        const fetchCoins = async () => {
            await fetchTrendingCoins().then(coins => {
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
                setTredingCoinModel(coinModels);
            });
        };
        fetchCoins();
    }, []);


    return data;
}