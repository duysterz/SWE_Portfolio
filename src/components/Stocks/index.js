import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Stocks = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [stockPrices, setStockPrices] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        const fetchStockPrices = async () => {
            try {
                const response = await axios.get('http://localhost:8080/stock');
                setStockPrices(response.data);
            } catch (error) {
                console.error('Failed to fetch stock prices', error);
            }
        };

        fetchStockPrices();
    }, []);

    // Hardcoded stock price table
    const hardcodedStocks = [
      { Ticker: 'SPY', CurrentPrice: '414.21' },
      { Ticker: 'AAPL', CurrentPrice: '167.10' },
      { Ticker: 'MSFT', CurrentPrice: '330.52' },
      { Ticker: 'GOOGL', CurrentPrice: '112.92' },
      { Ticker: 'TSLA', CurrentPrice: '209.85' },
      { Ticker: 'AMZN', CurrentPrice: '128.07' },
    ];

    return (
        <div className="container stocks-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['S', 'T', 'O', 'C', 'K', 'S']} 
                        idx={15}
                    />
                </h1>
            </div>
            <div>
                {Object.keys(stockPrices).map((stockSymbol) => (
                    <h2 key={stockSymbol}>
                        {stockSymbol} Current Stock Price: ${stockPrices[stockSymbol]}
                    </h2>
                ))}
            </div>
            <div>
                <h2>Hardcoded Stock Prices</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Current Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hardcodedStocks.map((stock, index) => (
                            <tr key={index}>
                                <td>{stock.Ticker}</td>
                                <td>${stock.CurrentPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Stocks;
