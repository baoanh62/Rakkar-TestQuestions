import axios from "axios";
import { useEffect, useState } from "react";
import { getPriceChangeRangeApi } from './coingeckoApi';

export interface PriceChangeModel {
    prices: any[]
}

const convertUnixTimestamp = (date: Date) => {
    const timeInMillisecond = date.getTime();
  
    const unixTimestamp = Math.floor(timeInMillisecond / 1000);
    return unixTimestamp;
  };
  
export async function getPriceChangeRange(coinId: string, currency: string, time: string): Promise<PriceChangeModel> {
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
