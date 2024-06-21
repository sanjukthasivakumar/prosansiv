// import React from 'react';
// import logo from '../Assets/klipartz.png';
// import '../Assets/AppCSS.css';

// export default function Header() {
//     return (
//         <div className="header">
//             <div className="logo-container">
//                 <img src={logo} alt="Logo" className="logo" />
//             </div>
//             <div className="title-container">
//                 <h1 className="header-title">DEAF EDUCATION</h1>
//             </div>
//         </div>
//     );
// }




// Header.js
import React from 'react';
import logo from '../Assets/klipartz.png';
import '../Assets/AppCSS.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="title-container">
                <h1 className="header-title">Prosansiv</h1>
            </div>
        </div>
    );
}

export default Header;
