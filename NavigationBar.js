// import '../Assets/NavCSS.css';

// export default function NavigationBar(){
   
//     return(
//         <div className="nav-container">
//             <nav className="nav">
//                 <a href="#home" className="nav-link">Home</a>
//                 <a href="#about" className="nav-link">About</a>
//                 <a href="contact" className="nav-link">Contact</a>
//                 <a href="login" className="nav-link">Login</a>
//                 <a href="register" className="nav-link">Register</a>
//             </nav>
//         </div>
        
//     );
// }

// import '../Assets/NavCSS.css';

// export default function NavigationBar(){
   
// //    {/*} return(
// //         <div className="nav-container">
// //             <nav className="nav">
// //                 <a href="#home" className="nav-link">Home</a>
// //                 <a href="#about" className="nav-link">About</a>
// //                 <a href="contact" className="nav-link">Contact</a>
// //                 <a href="login" className="nav-link">Login</a>
// //                 <a href="register" className="nav-link">Register</a>
// //             </nav>
// //         </div>
// //     );*/}

//     return (
//         <div>
//            <nav className="navbar navbar-expand-lg custom-navbar">
//            <div className="container d-flex justify-content-between">
//            <ul className="nav nav-tabs w-100 d-flex justify-content-between">
//                 <li className="nav-item">
//                     <a className="nav-link" href="#home">Home</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#about">About</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#login">Login</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#contact">Contact</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#register">Register</a>
//                 </li>
//             </ul>
//             </div>
//             </nav>
//             <section id="home">
//                 <h2>Home</h2>
//                 <p>
//                 <b>Welcome to Deaf </b> <br/>
//                 </p>
//             </section>
//             <section id="about">
//                 <h2>About</h2>
//                 <p>Learn more about us in this section.</p>
//             </section>
//             <section id="login">
//                 <h2>login Section</h2>
//                 <p>login here.</p>
//             </section>
//             <section id="contact">
//                 <h2>Contact</h2>
//                 <p>Get in touch with us.</p>
//             </section>
//             <section id="register">
//                 <h2>Register</h2>
//                 <p>register here.</p>
//             </section>
//         </div>
        
//     );

    
// }





// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/NavCSS.css';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container d-flex justify-content-between">
                <ul className="nav nav-tabs w-100 d-flex justify-content-between">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;
