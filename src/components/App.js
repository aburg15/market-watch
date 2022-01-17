import '../css/App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import StockContainer from './StockContainer';
import SelectedPage from './SelectedPage';

const App = () => {

  const [stocks, setStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [formInput, setFormInput] = useState('');

  const fetchStocks = async () => {
    try {
      const stockData = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false')
      const data = await stockData.json()
      setStocks(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchStocks()
  }, [])

  const resetStockContainer = () => {
    setFilteredStocks([])
    setFormInput('')
  }

  const filterStocks = (formInput) => {
    const filteredStocks = stocks.filter(entry => entry.name.toLowerCase().includes(formInput.toLowerCase()))
    setFilteredStocks(filteredStocks)
    setFormInput(formInput)
  }

  return (
    <div className="app">
      <Header filterStocks={filterStocks}/>
      <Routes>
        <Route path="/" element={<StockContainer stocks={stocks} filteredStocks={filteredStocks} formInput={formInput} />} />
        <Route path="/:stockId" element={<SelectedPage resetStocks={resetStockContainer}/>} />
      </Routes>
    </div>
  );
}

export default App;
