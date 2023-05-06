import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { findTrendingCoin, TredingCoinModel } from '../services/getTrendingCoin';
import { useState } from 'react';

interface SearchProps {
    trendingModels: TredingCoinModel[],
    emitSearchData: (data: TredingCoinModel | null) => void;
}

const SearchCoinAutoComplete = (props: SearchProps) => {
    const [value, setValue] = React.useState<TredingCoinModel | null>(null);
    const [inputValue, setInputValue] = React.useState('');

    if (!props)
        return (
            <div></div>
        );

    const sendDataToParent = (data: TredingCoinModel | any): void => {
       props.emitSearchData(data);
    }

    let rows = props.trendingModels;
    return (
        <Autocomplete
            options={rows}
            getOptionLabel={(option: TredingCoinModel) => option.name}
            onChange={(event: any, newValue: TredingCoinModel | null) => {
                sendDataToParent(newValue);
                return setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label="Search Coin" />}
        />
    );
}

export default SearchCoinAutoComplete;