import React from "react";

const maxProfit = (stockPrices: number[]): number => {
    if (stockPrices.length < 2) {
        return 0;
    }
    
    let minPrice = stockPrices[0];
    let maxProfit = 0;

    for (let i = 1; i < stockPrices.length; i++) {
        const currentPrice = stockPrices[i];
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        } else {
            const potentialProfit = currentPrice - minPrice;
            if (potentialProfit > maxProfit) {
                maxProfit = potentialProfit;
            }
        }
    }
    return maxProfit;
}

export default maxProfit;