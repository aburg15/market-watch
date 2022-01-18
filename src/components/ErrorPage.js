import React from 'react';
import { BiMessageSquareError } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../css/ErrorPage.css';

const ErrorPage = ({ error }) => {

  const checkError = error ? <h2>{error.message} stocks. Try again later!</h2> :
    <React.Fragment>
      <h2>Invalid URL</h2>
      <Link className='error-btn' to='/'>Go Home!</Link>
    </React.Fragment>

  return (
    <section className="error-page">
      <BiMessageSquareError size={100} />
      {checkError}
    </section>
  )
}

export default ErrorPage;