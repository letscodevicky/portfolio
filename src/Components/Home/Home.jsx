import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from '../Modal/Modal';
import './Home.css'
import homeanime from'./../../assets/home_anime.gif';
import Typewriter from 'typewriter-effect';
class Home extends Component {
    render() {
        return(
            <div className= "home-container">
                <Modal/>
               
               <div className = "header-text">
                   <h1>Welcome to my portfolio </h1>
                   <p > Hello, my name is Vikas and i'm a  </p>
                       <h2  className = "typewrite"> <Typewriter
                   options={{

                    strings:  [ 'Student','Web-Devloper' ,'Competitive Programmer'],
                    autoStart: true,
                    loop: true,
                  }}
                /> </h2>
                   
                   </div>                       
                    <div className = "head-btns">
                        <Link to = "/about" className = 'btn btn-white'>
                            <p className = 'btn-text' > know about me </p>
                        </Link>
                        <Link to = '/contact' className = ' btn btn-black'>
                            <p className = 'btn-text' > Connnect with me</p>
                        </Link>
                    </div>
                    <div className = 'splash-image'>
                <img src= {homeanime} alt="animation" className = "home-anime" />
                    </div>
                    
            </div>
        );
    }
}
export default Home;