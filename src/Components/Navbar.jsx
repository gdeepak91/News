import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='d-flex justify-content-around p-3 bg-dark' >
        <Link to="/">Top Headlines</Link>
        <Link to="/science">Science</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/bussiness">Bussiness</Link>
        <Link to="/health">Health</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/general">General</Link>
      </div>
    </>
  )
}

export default Header