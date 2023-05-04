import Link from "next/link";
import { Page } from "../types/page";
import React, { useState } from "react";
import MainLayout from '../components/common/MainLayout'
import { Container } from "@mui/material";
import DataListTrendingCoin from "../components/DataListTrendingCoin"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchCoinAutoComplete from '../components/SearchCoinAutoComplete';
import CoindDetailUI from '../components/DetailCoinUI';
import { TredingCoinModel } from "@/services/getTrendingCoin";

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

  function receiveSearchModel(prop: TredingCoinModel | null): void {
    setData(prop);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <h1 className="text-4xl my-8">
          Find Trending Coin
        </h1>
        <SearchCoinAutoComplete emitSearchData={receiveSearchModel} />
        <div style={styles.main}>
          <CoindDetailUI prop={searchModel}/>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default test1;

test1.layout = MainLayout