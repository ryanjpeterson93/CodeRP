import React from 'react'
import {BrigsbyMe} from './images/AboutImages'
import { Link } from 'react-router-dom';
import OutdoorCarousel from './OutdoorCarousel';
import TravelCarousel from './TravelCarousel';

const AboutMe = () => (
  <>

    <div className="aboutDiv">
      <div className="aboutColumn1">
        <h4> About Me </h4>
        <p> I was born and raised in Utah and have spent most of my life here. My partner and I have two cats and recently added a puppy to our little family. If we aren't out exploring the mountains or a new country, we are typically playing board games or Magic the Gathering with friends. </p>
      </div>
      <div className="aboutColumn2">
        <div className="aboutImg">
          <img src={BrigsbyMe} id="BrigsbyMeImg" />
        </div>
      </div>
    </div>

    <div className="aboutDiv">
      <h4 style={{paddingTop: ".5em", paddingLeft: ".5em"}}> The Outdoors </h4>
      <div className="aboutCarColumn2">
        <p> One of my greatest passions is spending time outside in the mountains. Although backpacking is my favorite, I also enjoy your typical 'car-camping', mountain biking, kayaking, and hiking.</p>
        <p> Believe it or not, I've lived in Utah my whole life and have never been snowboarding or skiing... So, the warm months of the year are definitely my favorite.</p>
      </div>
      <div className="aboutCarColumn1">
          <OutdoorCarousel></OutdoorCarousel>
      </div>
    </div>

    <div className="aboutDiv">
        <h4 style={{paddingTop: ".5em", paddingLeft: ".5em"}}> Military Service </h4>
      <div id="aboutMilColumn1">
        <p> I joined the United States Army Reserve almost six years ago now. Although the decision was fairly rash, (that's a whole other story) I am truly grateful that I did so. Although my military experience has been overwhelmingly positive, I have made the decision to leave the Army October of this year, when my contract ends. </p>
        <p> I joined the Army as an E-2 Private Second Class and chose the MOS (Job) of a 94F, Computer/Detection Systems Repairer. If you are interested in what that position entails, take a look <Link target="_blank" to={{ pathname: "https://www.thebalancecareers.com/94f-computer-detection-systems-repairer-3346133"}}>here.</Link> I have steadily advanced in my career earning the rank of E-5 Sergeant, becoming one of my unit's Unit Prevention Leaders, and recently taking on the responsibilities of the Assistant Platoon Sergeant over my platoon of 15 soldiers.  </p>
      </div>
    </div>

    <div id="aboutDivCarousel">
      <div className="aboutCarColumn2">
        <h4> Traveling</h4>
        <p> I LOVE to travel. My partner and I try to get out of the country as often as possible. I have been to a handful of countries that include Italy, Belize, Thailand, and Tonga. Some of the next countries we want to hit include Peru and Iceland. </p>
      </div>
      <div className="aboutCarColumn1">
        <TravelCarousel/>
      </div>
    </div>

  </>
)

export default AboutMe;