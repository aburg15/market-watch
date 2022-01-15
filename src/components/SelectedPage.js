import '../css/SelectedPage.css';
import SelectedStock from './SelectedStock';
// import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const SelectedPage = () => {
  const id = useParams().stockId;
  console.log(id)

  return <SelectedStock id={id} />
}

export default SelectedPage;