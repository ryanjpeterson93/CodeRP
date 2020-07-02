import React from 'react'
import { Link, } from 'react-router-dom';

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
        </div>
      </>
    )
  }
}

export default Contact
