// import '../css/SelectedStock.css';
// import React, { Component } from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const SelectedStock = ({ id }) => {
//   const [stockInfo, setStockInfo] = useState([]);
//   const [selectedStock, setSelectedStock] = useState({})

  
//   const fetchStocks = async () => {
//     try {
//       const stockData = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false')
//       const data = await stockData.json()
//       setStockInfo(data)
//     } catch (err) {
//       console.log(err)
//     }
//   }
  
  
//   useEffect(() => {
//     fetchStocks()
//   }, [])

//   return (
//     <section className="selected-stock-wrapper">
//       <main className="selected-stock">
//         <div>
//           <img src={selectedStock.image} />
//         </div>
//         <div className='selected-stock-details'>
//           <h2>Name: {stockInfo.name}</h2>
//           <p>Symbol: {stockInfo.symbol}</p>
//           <p>Total Supply: {stockInfo.total_supply}</p>
//         </div>
//       </main>
//     </section>
//   );
// }

// export default SelectedStock;