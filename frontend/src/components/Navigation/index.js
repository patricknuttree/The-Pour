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
        <div className="nav-log-video-container">
          <NavLink className="log-item" exact to={`/profile/${sessionUser.id}`}>
            <video className="nav-logo" autostart="true" autoPlay muted loop
              src={video}
              type="video/mp4" 
              />
          </NavLink>
        </div>
        <div className="navlog-buttons-section">
          <div className="nav-log-buttons-container">
            <ProfileButton className="profile-button"  user={sessionUser} />
            <NavLink className="nonlog-item" to="/create/whiskey">
              <div className="nonlog-link" >Create Whiskey</div>
            </NavLink>
            <NavLink className="nonlog-item" to="/about">
              <div className="nonlog-link">About</div>
            </NavLink>
        </div>
          
          
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
          <NavLink className="nonlog-item" to="/login">
            <div className="nonlog-link">login</div>
          </NavLink>
          <NavLink className="nonlog-item" to="/signup">
            <div className="nonlog-link">Sign Up</div>
          </NavLink>
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