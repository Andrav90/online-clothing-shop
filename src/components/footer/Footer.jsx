import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as About } from '../../assets/icons/about.svg';
import { ReactComponent as Terms } from '../../assets/icons/terms.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin2.svg';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 mt-2 mb-4">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                <div className="footer-group d-flex flex-column">
                    <h3 className="h5"><strong>Useful info</strong></h3>
                    <br />
                    <Link to='/about'>
                        <About className="mr-3 mb-1 footer-icon"/>
                        About
                    </Link>
                    <Link to='/terms-and-conditions'>
                        <Terms className="mr-3 mb-1 footer-icon" />
                        Terms and conditions
                    </Link>
                </div>
                <div className="footer-group">
                    <h5 className="contact-me"><strong>Contact me</strong></h5> 
                    <br />
                    <p className="m-0">
                        <a href="mailto:razvan.cirlugea@gmail.com">
                            <Mail className="mr-3 mb-1 footer-icon"/>
                            ada.vraciu@gmail.com
                        </a>
                    </p>
                </div>
                <div className="footer-group">
                    <h3 className="h5"><strong>Social networks</strong></h3>
                    <br />
                    <p className="m-0">
                        <a href="https://github.com/Andrav90">
                            <GitHub className="mr-3 mb-1 footer-icon"/>
                            andrav90
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/andra-v-0b9427165/">
                            <LinkedIn className="mr-3 footer-icon"/>
                            andravraciu
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;