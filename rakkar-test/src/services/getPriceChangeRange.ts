import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://api.coingecko.com/api/v3/coins/";

export interface PriceChangeModel {
    prices: any[]
}

const convertUnixTimestamp = (date: Date) => {
    const timeInMillisecond = date.getTime();
  
    const unixTimestamp = Math.floor(timeInMillisecond / 1000);
    return unixTimestamp;
  };
  

export async function getPriceChangeRangeApi(coinId: string, currency: string, from: number, to: number) {
    let url = baseUrl + coinId + "/market_chart/range?vs_currency=" + currency + "&from=" + from + "&to=" + to;
    console.log("url " + url);
    const response = await axios.get(url);
    return response.data;
};

export async function getPriceChangeRange(coinId: string, currency: string, time: string) {
    let unixTimeFrom = 0;
    let unixTimeTo = 0;

    switch (time) {
        case "24h": {
          let today = new Date()
          let from = new Date(today)
          from.setDate(from.getDate() - 1);
  
          unixTimeFrom = convertUnixTimestamp(from);
          unixTimeTo = convertUnixTimestamp(today);
        }
        case "7d": {
          let today = new Date()
          let from = new Date(today)
          from.setDate(from.getDate() - 7);
  
          unixTimeFrom = convertUnixTimestamp(from);
          unixTimeTo = convertUnixTimestamp(today);
        }
        case "14d": {
          let today = new Date()
          let from = new Date(today)
          from.setDate(from.getDate() - 14);
  
          unixTimeFrom = convertUnixTimestamp(from);
          unixTimeTo = convertUnixTimestamp(today);
        }
      }

    let response = await getPriceChangeRangeApi(coinId, currency, unixTimeFrom, unixTimeTo);
    return response;
};
