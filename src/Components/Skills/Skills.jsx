import React from 'react';
import './Skills.css';
import Header from '../Header/Header';
import Footerlink from '../Footer/Footerlink';
import skillvect from './../../assets/skills_vector.png';
import {skillList} from './../../assets/skillsData';
import Skillcard from './Skillcard';
const Resume =() => {
    return (
      <div className="section-container">
          <Header 
          heading = "My-skills"
          details = " passionate about new technology"
          />
          <div className="skill-card-container">
            {
              skillList.map(({skillName , skillUrl}) => 
                <Skillcard skillName = {skillName } skillUrl = {skillUrl} />
              )}
            
          </div>
          <Footerlink phrase = "Get in " link ="touch " toAdress = "/contact" />
        <div className= "skills-vector-frame" >
          <img src = {skillvect}
          alt = "skills"
          className= "skills-vector"
          />
        </div>
      </div>
    );
};
export default Resume;