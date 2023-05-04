import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://api.coingecko.com/api/v3/coins/";

export interface CoinDetailModel {
    id: string;
    name: string;
    symbol: string;
    image: {
        small: string;
        large: string;
        thumb: string;
    };
    market_data: {
        current_price: {
            usd: number;
            eur: number;
        };
    };
}

async function getCoinDetailApi(coinId: string) {
    const response = await axios.get(baseUrl + coinId);
    return response.data;
};

export const getCoinDetail = (coinId: string): CoinDetailModel | null => {
    const [data, setCoinDetailModel] = useState<CoinDetailModel | null>(null);

    useEffect(() => {
        if (coinId) {
            const fetchData = async () => {
                let data = await getCoinDetailApi(coinId)
                setCoinDetailModel(data);
            };
            fetchData();
        }
    }, []);

    return data;
};
