import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/HeroSection.css';

const HeroSection = () => {
    useEffect(() => {
        const title = document.querySelector('.hero-title');
        const subtitle = document.querySelector('.subtitle');
        const serviceDescription = document.querySelector('.service-description');
        const servicesSection = document.querySelector('.services-section');
        const testimonials = document.querySelector('.testimonials');
        const callToAction = document.querySelector('.call-to-action');

        if (title && subtitle && serviceDescription && servicesSection && testimonials && callToAction) {
            title.classList.add('fade-in-up');
            subtitle.classList.add('fade-in-up');
            serviceDescription.classList.add('fade-in-up');
            servicesSection.classList.add('fade-in-up');
            testimonials.classList.add('fade-in-up');
            callToAction.classList.add('fade-in-up');
        }
    }, []);

    return (
        <div className="hero-section">
            <div className="container hero-content text-center">
                <div className="hero-text">
                    <h1 className="hero-title">Welcome to Deaf Education</h1>
                    <p className="subtitle">Empowering the Deaf community through education and advocacy.</p>
                    <p className="service-description">
                        Region 19's Education Service Center offers specialized support and training for educational programs catering to students who are Deaf or Hard of Hearing (DHH). This initiative includes professional development and technical assistance aimed at addressing the distinct educational needs of these students. By partnering with the ESC statewide leadership project, Region 19 enhances local programs' abilities to support DHH students effectively. The goal is to ensure student success across various educational settings, providing comprehensive support from specialized placement options to foster optimal learning outcomes.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-card">
                                <h3>Professional Development</h3>
                                <p>Customized workshops and training for educators.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-card">
                                <h3>Technical Assistance</h3>
                                <p>Supporting educational institutions with technical expertise.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-card">
                                <h3>Advocacy Programs</h3>
                                <p>Advocating for policies that benefit the Deaf community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials bg-light">
                <div className="container">
                    <h2 className="section-title">Testimonials</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="testimonial">
                                <p>"Region 19's services have been instrumental in improving our school's support for DHH students. Highly recommended!"</p>
                                <span>- Principal Smith</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="testimonial">
                                <p>"The workshops provided by ESC have significantly enhanced our teachers' ability to cater to DHH students' needs."</p>
                                <span>- Teacher Johnson</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="call-to-action">
                <div className="container text-center">
                    <h2>Ready to empower your students?</h2>
                    <p>Contact us today to learn more about our services and how we can support your educational goals.</p>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;
