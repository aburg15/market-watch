import '../css/SelectedPage.css';
import SelectedStock from './SelectedStock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const SelectedPage = ({ stocks }) => {
  const id = useParams().stockId;
  return <SelectedStock id={id} stocks={stocks} />
}

export default SelectedPage;