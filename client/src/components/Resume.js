import React from 'react'
import { Link, } from 'react-router-dom';

const Resume = () => (
  <>
    <div id="resumePage">
      <img id="resume" alt="my resume couldn't be found" src="MyResume.png"/>
      <Link to="/MyResume.pdf" target="_blank" download="Ryan_Peterson_Resume.pdf" > Download </Link>
    </div>
  </>
)

export default Resume;