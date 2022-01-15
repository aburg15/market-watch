import '../css/App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import StockContainer from './StockContainer';
import SelectedStock from './SelectedStock';



const App = () => {

  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])

  return (
    <div className="app">
      <Header />
      
    </div>
  );
}

export default App;
