import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';  
import './index.scss';

const Stocks = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');  
        }, 3000);
        fetchStocks();
    }, []);

    const fetchStocks = async () => {
        const response = await fetch('/stocks');
        const data = await response.json();
        setStocks(data);
    };

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
            <ul>
                {stocks.map(stock => (
                    <li key={stock.stock.symbol}>
                        {stock.stock.symbol}: ${stock.stock.quote.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Stocks;
