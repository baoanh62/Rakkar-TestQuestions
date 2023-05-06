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
import { Button, ButtonGroup } from '@mui/material';
import { CoinOHLCDetailModel, getOHLC } from "../services/getCoinOHLC";

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
  const [coinOHLC, setOHLC] = useState<CoinOHLCDetailModel | any>(null);
  const [selectedDay, setDay] = useState<string | any>('');

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

    let coinOHCL = await getOHLC(prop.id, 'usd');

    setData(prop);
    setCoinDetail(coinDetail);
    setCoinPriceChange(coinPriceChange);
    setOHLC(coinOHCL);
    setDay("24h");
  }

  async function receiveRangeChange(time: string) {
    if (!searchModel)
      return;

    let result = await getPriceChangeRange(searchModel.id, "usd", time);
    setDay(time);
    console.log(result);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <h1 className="text-4xl my-8">
          Find Trending Coin
        </h1>
        <SearchCoinAutoComplete trendingModels={trendingCoin} emitSearchData={receiveSearchModel} />
        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '30%' }}>
            <CoindDetailUI trendingModel={searchModel} emitRangePriceChange={receiveRangeChange} coinDetail={coinDetail} coinOHCL={coinOHLC} />
          </div>
          <div style={{ width: '70%', marginLeft: '20px' }}>
            <ButtonGroup variant="contained" aria-label="outlined default button group" style={{ height: '40px' }}>
              <Button onClick={(event) => { receiveRangeChange("24h"); }}>24h</Button>
              <Button onClick={(event) => { receiveRangeChange('7d') }}>7d</Button>
              <Button onClick={(event) => { receiveRangeChange('14d') }}>14d</Button>
            </ButtonGroup>
            <LineChartCoin priceChangeModel={coinPriceChange} selectedDay={selectedDay}/>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Test1;

Test1.layout = MainLayout