// Footer.js
import React from 'react';
import '../Assets/Footer.css'; // Adjust the path as per your file structure

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Deaf Education. All rights reserved.</p>
                <div className="social-links">
                    <a href="#facebook">Facebook</a>
                    <a href="#twitter">Twitter</a>
                    <a href="#instagram">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
