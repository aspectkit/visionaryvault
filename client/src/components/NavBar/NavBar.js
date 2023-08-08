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
import Auth from '../../utils/auth'
function Navbar() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }
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
            <div d-flex flex-row-reverse>
          {Auth.loggedIn() ? (
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-primary m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
          </div>
          
      </div>
  </div>
);
}

export default Navbar;