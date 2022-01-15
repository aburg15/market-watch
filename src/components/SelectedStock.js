import '../css/SelectedStock.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SelectedStock = ({ id, stocks }) => {
  const [stockInfo, setStockInfo] = useState({});  

  useEffect(() => {
    const stockDetails = stocks.find((stock) => {
      return stock.id === id
    })
    setStockInfo(stockDetails)
  })

  return (
    <section>
      <main className="selected-stock">
        <img className="stock-card-img" src={stockInfo.image}/>
        <h2>{stockInfo.name}</h2>
      </main>
    </section>
  );
}

export default SelectedStock;