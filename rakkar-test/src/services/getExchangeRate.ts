import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://api.coingecko.com/api/v3/exchange_rates";

export interface ExchangeCoinRageModel {
    name: string,
    unit: string,
    value: number,
    type: string,
}

async function fetchExchangeCoinRates() {
    const response = await axios.get(baseUrl);
    return response.data.rates;
};

export const getExchangeCoinRates = (): ExchangeCoinRageModel[] => {
    const [data, setExchangeCoinRateModel] = useState<ExchangeCoinRageModel[]>([]);

    useEffect(() => {
        const fetchRates = async () => {
           let rates =  await fetchExchangeCoinRates();
            setExchangeCoinRateModel(rates);
        };
        fetchRates();
    }, []);


    return data;
};
