import React from 'react';
import "./style.css"
import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import Address from "./Address"
const Footer = () => {
    return (
        <div className="footer">
            <Address />
            <div className="center">
            <a href="https://www.instagram.com/smart_health_consulancy/" target="_blank" rel="noopener noreferrer">
          
                    <InstagramIcon style={{ fontSize: 80 }}/></a>
            {/* <FacebookIcon />
            <TwitterIcon /> */}
         
                <a href="mailto:smarthealthconsultancy4@gmail.com" target="_blank" rel="noopener noreferrer"> <MailIcon style={{ fontSize: 80 }}/> </a>
           </div>
            <div className="ftr">© SMART HEALTH CONSULTANCY</div>
            <div className="contact"> +91 8291255137</div>
        </div>
    );
};

export default Footer;