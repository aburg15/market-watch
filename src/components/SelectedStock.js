import '../css/SelectedStock.css';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SelectedStock = ({ stocks, id }) => {
  console.log(stocks)
  const selectedStock = stocks.find((stock) => {
    return stock.id === id
  })

  console.log(selectedStock)

  return (
    <section className="selected-stock-wrapper">
      <main className="selected-stock">
        <div>
          <img src={selectedStock.image} />
        </div>
        <div className='selected-stock-details'>
          {/* <h2>Name: {stockInfo.name}</h2>
          <p>Symbol: {stockInfo.symbol}</p>
          <p>Total Supply: {stockInfo.total_supply}</p> */}
        </div>
      </main>
    </section>
  );
}

export default SelectedStock;