import React from 'react';
import './Project.css';
import Footer from "./../Footer/Footerlink"
import Header from "./../Header/Header"
import {projectsData} from './../../assets/projectsData';
import Projectcard from './projectcard';
const Projects =() => {
    return (
      <div className="section-container">
         <Header
         heading="My projects"
         details = " gfggfjgfsgadgfs"
         />
         <div className="project-cards-container">
          {projectsData.map((
            {
               projectName,
              projectDescription,
              imageUrl,
              videoUrl,
              projectUrl
            }) =>{

              return (<Projectcard
              projectName ={projectName}
              projectDescription ={projectDescription}
              projectUrl={projectUrl}
              imageUrl={imageUrl}
              videoUrl={videoUrl}
              />
              )
            })}
         </div>
         <Footer 
         phrase = "check out "
         link = "my skills"
         toAdress="/skill"
         />
        </div>
    );
};
export default Projects;