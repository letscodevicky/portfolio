import React from 'react';
import './Contact.css';

import Footer from '../Footer/Footerlink';
import Header from '../Header/Header';
import contactvector from './../../assets/contact_anime.png'
import github from './../../assets/gh.png'
import insta from './../../assets/in.png'
import linkedin from './../../assets/li.png'
const Contact =() => {
    return (
      <div className="section-container">
          <Header 
          heading = "Get in touch."
          details = "feel free to drop me an em@il"
          />
          <div className="contact-form-container">
            <form 
              action="https://formspree.io/f/mlealpdz"
              method="POST"
              className ="contact-form">
            <input 
            type="email"
            placeholder="Your email id"
            name="_replyto"
            className="input-box email-input"
            />
            <textarea
            type="text"
            placeholder="Your message"
            name ="message"
            className="input-box body-input"
            />
            <button 
            type ="submit"
            className ="contact-btn"
            >Send email</button>
            </form>

          </div>
          <div className="social-icon-container">
           <a href = "http://github.com" className = "social-icon" >
           <img src = {github} alt= 'social' />
           </a>
           <a href = "http://instagram.com" className = "social-icon" >
           <img src = {insta} alt= 'social' />
           </a>
           <a href = "http://linkedin.com" className = "social-icon">
           <img src = {linkedin} alt= 'social' />
           </a>
           </div>
          <Footer 
          phrase = "Read more"
          link = "about me"
          toAdress = "/about"
          />
       <div className="vector-frame">
         <img src = {contactvector} alt = "contactvector " className = "about-vector" />
        </div>
      </div>
    );
};
export default Contact;
