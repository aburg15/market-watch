import '../css/SelectedStock.css';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SelectedStock = ({ stocks, id }) => {

  const [selectedStock, setSelectedStock] = useState([])
  const [selectedStockImg, setSelectedStockImg] = useState([])
  const [selectedStockDescription, setSelectedStockDescription] = useState('')
  const locationId = useLocation().pathname
  
  useEffect(() => {
    const fetchData = async (api) => {
      const response = await fetch(api)
      const data = await response.json()
      setSelectedStock(data)
      setSelectedStockImg(data.image)
      setSelectedStockDescription(data.description)
    }
    fetchData(`https://api.coingecko.com/api/v3/coins/${locationId}`)
  }, [])

  return (
    <section className="selected-stock-wrapper">
      <main className="selected-stock">
        <div>
          <img className="selected-stock-img" src={selectedStockImg.large} />
        </div>
        <div className='selected-stock-details'>
          <h2>Name: {selectedStock.name}</h2>
          <div dangerouslySetInnerHTML={{__html: selectedStockDescription.en}} />
        </div>
      </main>
    </section>
  );
}

export default SelectedStock;