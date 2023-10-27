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
          const response = await axios.get('http://localhost:3000/stock');
          setStockPrices(response.data);
        } catch (error) {
          console.error('Failed to fetch stock prices', error);
        }
      };
  
      fetchStockPrices();
    }, []);
  
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
      </div>
    );
  };
  

export default Stocks;