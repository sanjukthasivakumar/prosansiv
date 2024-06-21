// import './App.css';
// // import ThemeConsumer from './Theme/ThemeConsumer';
// // import ThemeContext from './Theme/ThemeContext';
// // import ThemeProvider from './Theme/ThemeProvider';
// import Home from './pages/Home';
// // import ToDoTableGPT from './components/ToDoTableGPT';
// // import NavigationBar from './components/NavigationBar';
// // import PropsDemo from './components/PropsDemo';
// // import Counter from './components/Counter';
// //  import RenderingList from './components/RenderingList';
// // import Register from './components/Register';
// // import ConditionalRendering from './components/ConditionalRendering';
// // import ToDoGPT from './components/ToDoGPT';
// // import ToDoTT from './components/ToDoTT';


// function App() {
//   return( <div>
//     <Home/>
//     {/* <PropsDemo /> */}
//     {/* <Counter /> */}
//     {/* <ThemeProvider> 
//       <ThemeConsumer/>
//     </ThemeProvider> */}
//     {/* <Register/>
//     <RenderingList/> */}
//     {/* <ToDoGPT/> */}
//     {/* <ToDoTT/>
//     <ConditionalRendering/> */}
//     {/* <ToDoTableGPT/> */}
//   </div>
//   );
// }

// export default App;




// App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import NavigationBar from './components/NavigationBar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Register from './pages/Register';

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Header />
//                 <NavigationBar />
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/register" element={<Register />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;




// // App.js
// import React from 'react';
// import Header from './components/Header';
// import NavigationBar from './components/NavigationBar';
// import HeroSection from './Homefiles/HeroSection';
// import AboutSection from './Homefiles/AboutSection';
// import ServicesSection from './Homefiles/ServicesSection';
// import Footer from './Homefiles/Footer';
// import './App.css'; // Adjust the path as per your file structure

// function App() {
//     return (
//         <div className="App">
//             <Header />
//             <NavigationBar />
//             <main>
//                 <HeroSection />
//                 <AboutSection />
//                 <ServicesSection />
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import NavigationBar from './components/NavigationBar';
// import HeroSection from './Homefiles/HeroSection';
// import AboutPage from './pages/AboutPage';
// import ServicesSection from './Homefiles/ServicesSection';
// import Footer from './Homefiles/Footer';
// import './App.css'; // Adjust the path as per your file structure

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Header />
//                 <NavigationBar />
//                 <main>
//                     <Routes>
//                         <Route path="/" element={<HeroSection />} />
//                         <Route path="/about" element={<AboutPage />} />
//                         <Route path="/services" element={<ServicesSection />} />
//                     </Routes>
//                 </main>
//                 <Footer />
//             </div>
//         </Router>
//     );
// }

// export default App;


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import HeroSection from './Homefiles/HeroSection';
import AboutPage from './pages/AboutPage';
import ServicesSection from './Homefiles/ServicesSection';
import Contact from './pages/Contact'; // Import ContactPage
import Login from './pages/Login';
import Register from './pages/Register'; // Import RegisterPage
import Footer from './Homefiles/Footer';
import './App.css'; // Adjust the path as per your file structure

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> {/* Updated to use element prop */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
