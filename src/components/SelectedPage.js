import '../css/SelectedPage.css';
import SelectedStock from './SelectedStock';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';


const SelectedPage = ({ resetStocks }) => {
  const id = useParams().stockId;
  return <SelectedStock id={id} resetStocks={resetStocks} />
}

export default SelectedPage;

SelectedPage.propTypes = {
  resetStocks: PropTypes.func.isRequired
}