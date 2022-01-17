import '../css/SelectedPage.css';
import SelectedStock from './SelectedStock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const SelectedPage = ({ resetStocks }) => {
  const id = useParams().stockId;
  return <SelectedStock id={id} resetStocks={resetStocks} />
}

export default SelectedPage;