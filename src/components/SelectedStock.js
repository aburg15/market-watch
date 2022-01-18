import '../css/SelectedStock.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorPage from './ErrorPage';

const SelectedStock = ({ resetStocks, theme }) => {
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
    <React.Fragment>
      {selectedStock.name &&
        <section className="selected-stock-wrapper">
          <main className="selected-stock">
            <div>
              <img className="selected-stock-img" src={selectedStockImg.large} />
            </div>
            <div className='selected-stock-details'>
              <h2>{selectedStock.name}</h2>
              {selectedStock.description.en ? <div className={theme === 'light' ? 'a' : 'dark-theme a'} dangerouslySetInnerHTML={{ __html: selectedStockDescription.en }} /> : <p>No description provided.</p>}
              <Link to="/">
                <button className='return-button' onClick={() => resetStocks()}>Return</button>
              </Link>
            </div>
          </main>
        </section>}
    </React.Fragment>
  );
}

export default SelectedStock;

SelectedStock.propTypes = {
  resetStocks: PropTypes.func.isRequired
}