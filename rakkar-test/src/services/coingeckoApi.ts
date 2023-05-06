import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3/coins/";
const exchangbaseUrl = "https://api.coingecko.com/api/v3/exchange_rates";
const trendingbaseUrl = "https://api.coingecko.com/api/v3/search/trending";

export async function getCoinDetailApi(coinId: string): Promise<any> {
    const response = await axios.get(baseUrl + coinId);
    return response.data;
};

export async function fetchExchangeCoinRates(): Promise<any> {
    const response = await axios.get(exchangbaseUrl);
    return response.data.rates;
};

export async function getPriceChangeRangeApi(coinId: string, currency: string, from: number, to: number): Promise<any> {
    let url = baseUrl + coinId + "/market_chart/range?vs_currency=" + currency + "&from=" + from + "&to=" + to;
    console.log("url " + url);
    const response = await axios.get(url);
    return response.data;
};

export async function fetchTrendingCoins(): Promise<any> {
    const response = await axios.get(trendingbaseUrl,
        {
            params: {
                include_platform: false,
            },
        }
    );

    return response.data.coins;
};