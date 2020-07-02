import React from 'react'
import { Link, } from 'react-router-dom';

const NoMatch = () => (
  <>
    <div id="noMatch">
      <h3> Page Not Found </h3>
      <p> Head back <Link to="/home">home</Link>.</p>
    </div>
  </>
)

export default NoMatch;