import React from 'react';
import './About.css';
import Header from "../Header/Header";
import vector from './../../assets/about_vector.png'
import Footerlink from '../Footer/Footerlink';
import aboutimgvect from './../../assets/about_anime.gif';
import profileimg from './../../assets/profile.jpeg';

const About =() => {
    return (
        <div className="section-container">
          < Header className ="header"
          heading = "About me"
          details = " A Student  |  A Web-Dev.  |  A Competitive-Programmer"
          />
          <div className="about-main">
            
            <div className="about-left">
              <div className="profile-img">
                <img src ={profileimg} alt='profile' className='profileimgg' />
              </div>
              <h3 className= "sub-head">
                Student
              </h3>
              <p className = "details">
              I am a computer science undergrad at Rajkiya Engineering College , Banda . Being from a tech background I am interested in programming ( C/C++) Data Structures and Algorithm , Web-Dev and in Competitive Programming .
              <a className ="about-link-element"
              href= 'mailto:vikas19347@gmail.com'>
                Email me!
              </a>
              </p>
            </div>
            <div className="about-right">
             <img src = {aboutimgvect} className ='about-anime' alt= "ab"></img>
            </div>
            <div className='resbtn' >
<a className ="res-btn"
              href= 'https://drive.google.com/file/d/18Fuicy6GvxHejOTPO2pFG7CBBQzSHA76/view?usp=drivesdk' target ='blank' > 
               Download CV
              </a>
</div>

          </div>


          <Footerlink
          phrase = 'check out my'
          link = "projects!"
          toAdress = "/projects"
          />
          <div className="vector-frame">
          <img src={vector} className = "about-vector" alt = "aboutimage"></img>
          </div>
        </div>
    );
};
export default About;
