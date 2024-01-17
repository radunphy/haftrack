import React from "react";
import "./Footer.css";

function Footer() {
    var today = new Date();
    today = today.getFullYear();
    
    return (
        <footer className='ht-footer'>
            <div className="ht-footer-github">
                <a href="https://github.com/radunphy" className='ht-footer-github-link'>
                    <img className="ht-footer-github-img" src="/github.png" alt="GitHub Logo" />
                    <span className='ht-footer-github-text'>Visit my GitHub</span>
                </a>
            </div>
            <p className="ht-footer-copyright">&copy; {today} Haftrack Finances</p>
        </footer>
    );
}

export default Footer;
