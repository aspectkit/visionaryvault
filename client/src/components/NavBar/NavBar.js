// import './NavBar.css';
// import React, { useEffect, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom';
// import ReorderTwoToneIcon from '@mui/icons-material/ReorderTwoTone';
// import CollectionsIcon from '@mui/icons-material/Collections';
// import HomeIcon from '@mui/icons-material/Home';
// import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
// import ContactSupportIcon from '@mui/icons-material/ContactSupport';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import '../Wrapper/Wrapper.css';

// function Navbar() {
//   const [expandNavbar, setExpandNavBar] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//       setExpandNavBar(false)
//   }, [location]);

// return (
//     <div className='navbarContainer'>
//       <div className='navbar' id={expandNavbar ? 'open' : 'collapsed'}>
//           <div className='toggleButton'>
//               <button onClick={() => {setExpandNavBar((prev) => !prev)}}> 
//                   <ReorderTwoToneIcon />
//               </button>
//           </div>
//           <div className='links'>
//           <Link className='title titleLink' to='/'>Visionary Vault</Link>
//             <Link className='pop' to="/featuredArtist"> <HomeIcon /> Featured </Link>
//             <Link className='pop' to="/gallery"> <CollectionsIcon /> Gallery </Link>
//             <Link className='pop' to="/about"> <EmojiPeopleIcon /> About Us </Link>
//             <Link className='pop' to="/support"> <ContactSupportIcon /> Support </Link>
//             <Link className='pop' to="/viewProfile"> <AccountBoxIcon /> View Profile </Link>
//           </div>
//       </div>
//   </div>
// );
// }

// export default Navbar;


import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./NavBar.css";
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
            <Link className='visionary visionaryLink' to='/'><b>Visionary Vault</b></Link>
            <ul className='navbar'>
                <li style={{'--i': '#023466', '--j': 'white'}}>
                    <Link to='/featuredArtist'>
                        <span className='icon'><HomeIcon /></span>
                        <span className='title'>Featured</span>
                    </Link>
                </li>
                <li style={{'--i': 'white', '--j': '#954495'}}>
                    <Link to='/gallery'>
                        <span className='icon'><CollectionsIcon /></span>
                        <span className='title'>Gallery</span>
                    </Link>
                </li>
                <li style={{'--i': '#993e3e', '--j': 'white'}}>
                    <Link to='/about'>
                        <span className='icon'><EmojiPeopleIcon /></span>
                        <span className='title'>About Us</span>
                    </Link>
                </li>
                <li style={{'--i': 'white', '--j': '#088c0a'}}>
                    <Link to='/support'>
                        <span className='icon'><ContactSupportIcon /></span>
                        <span className='title'>Support</span>
                    </Link>
                </li>
                <li style={{'--i': '#fffb00', '--j': 'white'}}>
                    <Link to='/viewProfile'>
                        <span className='icon'><AccountBoxIcon /></span>
                        <span className='title'>Profile</span>
                    </Link>
                </li>
            </ul>
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          {Auth.loggedIn() ? (
            <button className="btn btn-lg btn-light m-2 logoutButton" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2 loginButton" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-primary m-2 signupButton" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div> 
        </div>
  );
}

export default Navbar


