import React from 'react'
import { Link, } from 'react-router-dom';
import Me from './Images/FancyMe.jpeg'

const Home = () => (
  <>
    <div id="homeHeader">
        <div id="homeCol1">
          <h1> Ryan Peterson </h1>
          <p> Hey. My name is Ryan. I am a recent graduate of the Full Stack Web Development Course from <Link target="_blank" to={{ pathname: "https://www.devpointlabs.com/university-of-utah-coding-bootcamp-full-time" }}>DevPoint Labs</Link>.</p>
          <br />
          <p> I am fairly new to this whole world of development and it seems that the more that I learn, the more that I understand just how much more I need to learn. </p>
        </div>
        <div id="homeCol2">
          <img id="homeHeaderImg" src={Me} alt="Fancy Headshot" />
        </div>
      </div>
    <div className="homeDiv">
      <h4> My Background </h4>
      <p> For the past handful of years I had been working diligently towards a career in <Link target="_blank" to={{ pathname: "https://www.atra-online.com/page/AboutRecTherapy#:~:text=Recreational%20therapy%2C%20also%20known%20as,%2C%20recovery%20and%20well%2Dbeing." }}>Recreational Therapy</Link>. I worked as part of a Recreational Therapy team at a residential treatment facility for adolescent males, was enrolled in the BS Recreational Therapy program at the University of Utah, and even spent my free time volunteering for the Recreation Therapy Student Association at the university. Therapeutic services was my life and where I thought I would always end up, with the long term goal of obtaining a Masters Degree in social work and becoming a full-fledged psychotherapist. </p>
      <br />
      <p>But... as often as it happens in life, things didn't go exactly to plan. The closer I got to finishing my degree (a mere two semesters away) I couldn't see myself being happy for the rest of my working years doing therapy everyday. With a little nudging from some friends in the development field and a quick decision, I found myself starting the 'Boot Camp' at DevPoint Labs.</p>
    </div>
    <div className="homeDiv">
      <h4> What I Know </h4>
      <p> To put it frankly, what I don't know far outweighs what I do know...at least in the world of web development, coding, software engineering (whatever you want to call it). I know that. I try not to make myself out to be anything than I know that I am, a fresh developer with a whole lot to learn. </p>
      <br />
      {/* <p> I am working every day to further my skills and progress in my knowledge. So, if you don't like what you see on the site right now, check back in a while and see what kind of progress I have made. </p> */}
    </div>
    <div className="homeDiv">
      <p> I figure if you are on this site, there is a good chance you have already seen my resume. If not, you can take a look at that <Link to="/resume">here</Link>. Otherwise, take a look around the site and get to know me a bit. Please feel free to contact me with anything.</p>
    </div>
  </>
)

export default Home;