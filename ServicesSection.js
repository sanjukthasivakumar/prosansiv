// ServicesSection.js
import React from 'react';
import '../Assets/ServicesSection.css'; // Adjust the path as per your file structure

const ServicesSection = () => {
    return (
        <section id="services" className="services-section">
            <div className="services-content">
                <h2>Our Services</h2>
                <div className="service">
                    <h3>Educational Videos in ISL</h3>
                    <p>Explore our collection of educational videos designed to support Deaf learners.</p>
                </div>
                <div className="service">
                    <h3>Online Courses</h3>
                    <p>Enroll in our online courses to deepen your understanding of Deaf culture and communication.</p>
                </div>
                <div className="service">
                    <h3>Community Support</h3>
                    <p>Connect with our community of Deaf individuals and allies for support and resources.</p>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
