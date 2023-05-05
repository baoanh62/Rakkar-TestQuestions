import Link from "next/link";
import { Page } from "../types/page";
import React, { useEffect, useState } from "react";
import MainLayout from '../components/common/MainLayout'
import { Container } from "@mui/material";
import DataListTrendingCoin from "../components/DataListTrendingCoin"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchCoinAutoComplete from '../components/SearchCoinAutoComplete';
import CoindDetailUI from '../components/DetailCoinUI';
import { findTrendingCoin, TredingCoinModel } from '../services/getTrendingCoin';
import { getPriceChangeRange, PriceChangeModel } from '@/services/getPriceChangeRange';
import { getCoinDetail, CoinDetailModel } from "@/services/getCoinDetail";
import { LineChartCoin } from "@/components/LineChartCoin";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const styles = {
  main: {
    'margin-top': '20px'
  }
};

const test1: Page = () => {
  const [searchModel, setData] = useState<TredingCoinModel | null>(null);
  const [coinDetail, setCoinDetail] = useState<CoinDetailModel | null>(null);
  const [priceChangeModel, setPriceChangeModel] = useState<PriceChangeModel | null>(null);
  let trendingCoin = findTrendingCoin();

  async function receiveSearchModel(prop: TredingCoinModel | null): void {
    let response = await getPriceChangeRange(prop.id, "usd", "24h");
    console.log(response);

    let coinDetail = await getCoinDetail(prop.id);
    console.log(coinDetail);

    setData(prop);
    setCoinDetail(coinDetail);
    setPriceChangeModel(response);
  }

  async function receiveRangeChange(time: string) {
    let result = await getPriceChangeRange(searchModel?.id, "usd", time);

    console.log(result);
    setPriceChangeModel(result);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <h1 className="text-4xl my-8">
          Find Trending Coin
        </h1>
        <SearchCoinAutoComplete trendingModels={trendingCoin} emitSearchData={receiveSearchModel} />
        <div style={styles.main}>
          <CoindDetailUI trendingModel={searchModel}
            coinDetail={coinDetail}
            emitRangePriceChange={receiveRangeChange} />
        </div>
        <LineChartCoin style={styles.main}
          priceChangeModel={priceChangeModel} />
      </Container>
    </ThemeProvider>
  );
};

export default test1;

test1.layout = MainLayout