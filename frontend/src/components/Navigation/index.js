import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import DemoButton from '../DemoButton'
import video from './The-Pour-Main-Logo.mp4'
import './Navigation.css';

function Navigation({ isLoaded }){
  

  const sessionUser = useSelector(state => state.session.user);
// console.log('SESSION USER', sessionUser)
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <video autostart="true" autoPlay muted loop
          src={video}
          type="video/mp4" 
        />
        <ProfileButton user={sessionUser} />
        <NavLink to="/create/whiskey">Create Whiskey Review</NavLink>
        <NavLink exact to={`/profile/${sessionUser.id}`}>Home</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <DemoButton />
      </>
    );
  }

  return (
    <div>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;