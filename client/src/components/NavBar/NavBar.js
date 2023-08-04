import './NavBar.css';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ReorderTwoToneIcon from '@mui/icons-material/ReorderTwoTone';
import Search from './SearchBar';
import '../Wrapper/Wrapper.css';

function Navbar() {
  const [expandNavbar, setExpandNavBar] = useState(false);

  const location = useLocation();

  useEffect(() => {
      setExpandNavBar(false)
  }, [location]);

return (
    <div className='navbarContainer'>
      <div className='navbar' id={expandNavbar ? 'open' : 'collapsed'}>
          <div className='toggleButton'>
              <button onClick={() => {setExpandNavBar((prev) => !prev)}}> 
                  <ReorderTwoToneIcon />
              </button>
          </div>
          <div className='links'>
          <Link className='title' to='/'>Visionary Vault</Link>
            {/* <Search /> */}
            <Link className='pop' to="/"> Home </Link>
            <Link className='pop' to="/artist"> Artist </Link>
            <Link className='pop' to="/gallery"> Gallery </Link>
            <Link className='pop' to="/about"> About Us </Link>
            <Link className='pop' to="/support"> Support </Link>
            <Link className='pop' to="/viewProfile"> View Profile </Link>
          </div>
      </div>
  </div>
);
}

export default Navbar;