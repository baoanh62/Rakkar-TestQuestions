import axios from "axios";
import { useEffect, useState } from "react";
import { fetchExchangeCoinRates } from './coingeckoApi';

export interface ExchangeCoinRageModel {
    name: string,
    unit: string,
    value: number,
    type: string,
}

export async function getExchangeCoinRates(): Promise<ExchangeCoinRageModel> {
    let rates = await fetchExchangeCoinRates();
    return rates;
};