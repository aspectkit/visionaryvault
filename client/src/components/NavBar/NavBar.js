import './NavBar.css';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ReorderTwoToneIcon from '@mui/icons-material/ReorderTwoTone';
import CollectionsIcon from '@mui/icons-material/Collections';
import HomeIcon from '@mui/icons-material/Home';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
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
          <Link className='title titleLink' to='/'>Visionary Vault</Link>
            <Link className='pop' to="/featuredArtist"> <HomeIcon /> Featured </Link>
            <Link className='pop' to="/gallery"> <CollectionsIcon /> Gallery </Link>
            <Link className='pop' to="/about"> <EmojiPeopleIcon /> About Us </Link>
            <Link className='pop' to="/support"> <ContactSupportIcon /> Support </Link>
            <Link className='pop' to="/viewProfile"> <AccountBoxIcon /> View Profile </Link>
          </div>
      </div>
  </div>
);
}

export default Navbar;