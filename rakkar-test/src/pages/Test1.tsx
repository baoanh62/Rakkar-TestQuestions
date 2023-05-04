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
import { getPriceChangeRange } from '@/services/getPriceChangeRange';

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

  let trendingCoin = findTrendingCoin();

  async function receiveSearchModel(prop: TredingCoinModel | null): void {

    try {
      let response = await getPriceChangeRange(prop.id, "usd", "24h");
      console.log(response);
      setData(prop);

    } catch (error) {
      console.log(error);
    }
  }

  async function receiveRangeChange(time: string) {
    let result = await getPriceChangeRange(searchModel?.id, "usd", time);
    console.log(result);

  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <h1 className="text-4xl my-8">
          Find Trending Coin
        </h1>
        <SearchCoinAutoComplete trendingModels={trendingCoin} emitSearchData={receiveSearchModel} />
        <div style={styles.main}>
          <CoindDetailUI trendingModel={searchModel} emitRangePriceChange={receiveRangeChange} />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default test1;

test1.layout = MainLayout