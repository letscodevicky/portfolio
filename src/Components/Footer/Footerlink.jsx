import React from "react";
import { Link } from "react-router-dom";
import './Footerlink.css';
 

const Footerlink = ({phrase,link,toAdress}) => {
   return (
   <div className = "Footer-link" >
   {phrase}
   <Link to = {toAdress} className = "footer-link-element"> {link} </Link>
   </div>
   );

};
 export default Footerlink;