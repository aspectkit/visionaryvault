import './Navbar.css';
// import { NavbarData } from './NavbarData';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";
import ReorderTwoToneIcon from '@mui/icons-material/ReorderTwoTone';
import Search from './SearchBar';

function Navbar() {
  const [expandNavbar, setExpandNavBar] = useState(false);

  const location = useLocation();

  useEffect(() => {
      setExpandNavBar(false)
  }, [location]);

return (
    <div className='Sidebar'>
      <div className='navbar' id={expandNavbar ? 'open' : 'collapsed'}>
          <div className='toggleButton'>
              <button onClick={() => {setExpandNavBar((prev) => !prev)}}> 
                  <ReorderTwoToneIcon />
              </button>
          </div>
          <div className='navbar'>
          <div className='title'>Visionary Vault</div>
            <Search />
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