import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { findTrendingCoin, TredingCoinModel } from '../services/getTrendingCoin';
import { useState } from 'react';

interface SearchProps {
    emitSearchData: (data: TredingCoinModel | null) => void;
}

const SearchCoinAutoComplete = (props: SearchProps) => {
    const sendDataToParent = (data: TredingCoinModel): void => {
        props.emitSearchData(data);
    }

    let rows = findTrendingCoin();
    return (
        <Autocomplete
            options={rows}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => {
                return option.coin_id === value;
            }}
            onChange={(event, newValue) => {
                sendDataToParent(newValue);
            }}
            id="controllable-states-demo"
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label="Search Coin" />}
        />
    );
}

export default SearchCoinAutoComplete;