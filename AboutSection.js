// AboutSection.js
import React from 'react';
import '../Assets/AboutSection.css'; // Adjust the path as per your file structure

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h2>About Us: Deaf Education</h2>
                <p>
                    We are dedicated to empowering the Deaf community through education and advocacy. Our mission is to provide resources and support for Deaf individuals across the nation.
                </p>
                <p>
                    Our website features educational videos in Indian Sign Language (ISL) and a variety of resources to promote understanding and inclusion.
                </p>
                <p>
                    Join us in creating a more accessible and equitable society for all.
                </p>
            </div>
        </section>
    );
}

export default AboutSection;
