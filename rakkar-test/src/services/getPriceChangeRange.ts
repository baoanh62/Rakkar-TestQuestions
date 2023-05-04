import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://api.coingecko.com/api/v3/coins/";


export interface PriceChangeModel {
    prices:any[]
}

async function getPriceChangeRangeApi(coinId: string, currency: string, from: number, to: number) {
    let url = baseUrl + coinId + "/market_chart/range?vs_currency=" + currency + "&from=" + from + "&to=" + to;
   console.log("url " + url);
    const response = await axios.get(url);
    return response.data;
};

export const getPriceChangeRange = (coinId: string, currency: string, from: number, to: number): PriceChangeModel | null => {

    const [data, setData] = useState<PriceChangeModel|null>(null);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getPriceChangeRangeApi(coinId, currency, from, to);
            setData(response);
        };
        fetchData();
    }, []);

    return data;
};
