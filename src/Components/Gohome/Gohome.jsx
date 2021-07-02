import React , {Component} from 'react' ;
import { withRouter } from 'react-router';
 import homwiconwhite from "./../../assets/home_white.png"
 import homwiconblack from "./../../assets/home_black.png"
 import "./Gohome.css";

class Gohome extends Component {
    navigatetohome = () =>{
        const {history} = this.props;
        history.push('/');
    }
    render(){
        const {location} = this.props;
        const whitebtn = location.pathname === '/'  
        return (
               <button className = { `go-home-btn ${
                whitebtn ? 'white-bkg' : 'grad-bkg'
            }`}onClick = {this.navigatetohome}>
                <img 
                className = 'homeicon'
                src={whitebtn ? homwiconblack : homwiconwhite}
                alt="home-icon"/>
               </button>
        );
    }
}
 export default withRouter(Gohome);