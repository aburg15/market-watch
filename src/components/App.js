import '../css/App.css';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import StockContainer from './StockContainer';
import SelectedStock from './SelectedStock';



const App = () => {

  const [stocks, setStocks] = useState(null);

  useEffect(() => {
    return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])

  console.log(stocks)

  return (
    <div className="app">
      
    </div>
  );
}

export default App;
