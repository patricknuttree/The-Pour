import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import DemoButton from '../DemoButton'
import video from './thepourmainlargebw.mp4'
import './Navigation.css';

function Navigation({ isLoaded }){
  

  const sessionUser = useSelector(state => state.session.user);
// console.log('SESSION USER', sessionUser)
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="navigation-container">
        <video className="nav-logo" autostart="true" autoPlay muted loop
          src={video}
          type="video/mp4" 
        />
        <ProfileButton className="profile-button"  user={sessionUser} />
        <div className="nonlog-link">
          <NavLink className="nonlog-item" to="/create/whiskey">Create Whiskey Review</NavLink>
        </div>
        <div className="nonlog-link">
          <NavLink className="nonlog-item" exact to={`/profile/${sessionUser.id}`}>Home</NavLink>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      
      <div className="navigation-container-nonLog">
        <div className="nonLogvideo">
          <video id="nonlog-video-item" autostart="true" autoPlay muted loop
            src={video}
            type="video/mp4" 
            />
        </div>
        <div className="nonlog-buttons" >
          <div className="nonlog-link">
            <NavLink className="nonlog-item" to="/login">Log In</NavLink>
          </div>
          <div className="nonlog-link">
            <NavLink className="nonlog-item" to="/signup">Sign Up</NavLink>
          </div>
          <DemoButton/>
        </div>
      </div>
      
    );
  }

  return (
    <div>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;