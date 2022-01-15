import '../css/SelectedStock.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SelectedStock = ({ id }) => {

  const [stockInfo, setStockInfo] = useState({});

  useEffect(() => {
    return fetch('https://api.coingecko.com/api/v3/coins/' + id)
      .then(res => res.json())
      .then(data => setStockInfo(data))
  }, [])

  return (
    <section>
      <main className="selected-stock">
      </main>
    </section>
  );
}

export default SelectedStock;