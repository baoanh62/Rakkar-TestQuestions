import { Page } from "../types/page";
import React, { useEffect, useState } from "react";
import MainLayout from '../components/common/MainLayout'
import { Container } from "@mui/material";
import DataListTrendingCoin from "../components/DataListTrendingCoin"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchCoinAutoComplete from '../components/SearchCoinAutoComplete';
import CoindDetailUI from '../components/DetailCoinUI';
import { findTrendingCoin, TredingCoinModel } from '../services/getTrendingCoin';
import { PriceChangeModel, getPriceChangeRange } from '../services/getPriceChangeRange';
import { CoinDetailModel, getCoinDetail } from "../services/getCoinDetail";
import { LineChartCoin } from "../components/LineChartCoin";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Test1: Page = () => {
  const [searchModel, setData] = useState<TredingCoinModel | any>(null);
  const [trendingCoin, setTrendingCoin] = useState<TredingCoinModel[] | any[0]>([]);
  const [coinDetail, setCoinDetail] = useState<CoinDetailModel | any>([]);
  const [coinPriceChange, setCoinPriceChange] = useState<PriceChangeModel | any>([]);

  useEffect(() => {
    findTrendingCoin().then(data => {
      setTrendingCoin(data);
    });
  }, []);

  async function receiveSearchModel(prop: TredingCoinModel | null): Promise<any> {
    if (!prop)
      return;

    let response = await getPriceChangeRange(prop.id, "usd", "24h");
    console.log(response);

    let coinDetail = await getCoinDetail(prop.id);
    console.log(coinDetail);

    setData(prop);
    setCoinDetail(coinDetail);
    setCoinPriceChange(coinPriceChange);
  }

  async function receiveRangeChange(time: string) {
    if (!searchModel)
      return;
    let result = await getPriceChangeRange(searchModel.id, "usd", time);
    console.log(result);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <h1 className="text-4xl my-8">
          Find Trending Coin
        </h1>
        <SearchCoinAutoComplete trendingModels={trendingCoin} emitSearchData={receiveSearchModel} />
        <div style={{ marginTop: 20 }}>
          <CoindDetailUI trendingModel={searchModel} emitRangePriceChange={receiveRangeChange} coinDetail={coinDetail} />
        </div>
        <div style={{ marginTop: 20 }}>
          <LineChartCoin priceChangeModel={coinPriceChange}/>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Test1;

Test1.layout = MainLayout