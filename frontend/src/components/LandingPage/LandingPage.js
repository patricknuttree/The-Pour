import Navigation from '../Navigation';
import video from './thePourMainLogoGrey.mp4'
import './LandingPage.css';

function LandingPage(){

  return(
    <div>
      <div>
        <div className="signin-bar">
          <Navigation/>
        </div>
        <video className="video" autostart="true" autoPlay muted loop
          src={video}
          type="video/mp4" 
        />
      </div>

    </div>

  )

}

export default LandingPage