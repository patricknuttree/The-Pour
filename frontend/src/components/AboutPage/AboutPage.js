
import "./AboutPage.css"

const AboutPage = () => {

  return(
    <div className="about-container">
      <div className="info-container">
        <h2 className="about-dev">Developer</h2>
        <h3 className="about-dev">Patrick Nusbaum</h3>
        <img alt="" src="https://secure.gravatar.com/avatar/e0dfd8561a1c14f21173e109dca1d69d?secure=true&size=300" />
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patrick-nusbaum-mpa">
          <div className="pro-links" >LinkedIn</div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/patricknuttree">
          <div className="pro-links">GitHub</div>
        </a>
      </div>
      <div className="thepour-origin-outer">
        <div className="thepour-origin">
          <h3>The Pour Origin (aka the porigin)</h3>
          <p>The Pour is a full stack application designed to help people track their whiskey experience. This project was inspired by a friend of mine who in a previous career was a bartender. In speaking with him one night we talked about the frustrations of the bartending profession. One of the issues was people not knowing what to order. It slows things down at the bar it makes the customer apprehensive to order a drink, all around its a problem. I melded that with my love of whiskey and thus "The Pour" was born. </p>
        </div>
      </div> 
    </div>
  )

}

export default AboutPage