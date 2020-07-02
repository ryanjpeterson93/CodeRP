import React from 'react'
import { Link, } from 'react-router-dom';
import Facebook from './images/Facebook.png'
import Github from './images/Github.png'
import Instagram from './images/Instagram.png'
import LinkedIn from './images/LinkedIn.png'


class Contact extends React.Component {
  render() {
    return (
      <>
        <div id="contactDiv">
          <h1>Contact Information</h1>
          <div id="contactInfo">
            <p>Email: ryanjpeterson93@gmail.com</p>
            <p>Cell #: 801-674-9557</p>
            <p>Or get ahold of me <Link to="/contact/form"> here.</Link></p>
          </div>
          <div id="socialLinks">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ryan.peterson.9678">
              <img src={Facebook} alt="Facebook" className="mediaIcons" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ryanjpeterson93">
              <img src={Github} alt="Github" className="mediaIcons" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rj.pete/?hl=en">
              <img src={Instagram} alt="Instagram" className="mediaIcons" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ryanpeterson93/">
              <img src={LinkedIn} alt="LinkedIn" className="mediaIcons" />
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default Contact
