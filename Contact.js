// // Contact.js
// import React from 'react';

// const Contact = () => {
//     return (
//         <div>
//             <h2>Contact Page</h2>
//             {/* Add your contact form or other content here */}
//         </div>
//     );
// }

// export default Contact;


// import React, { useState } from 'react';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     // Handle form input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Perform validation and submission logic here
//         console.log(formData); // For demonstration, log form data to console
//         // You can implement actual submission logic to API or backend here
//     };

//     return (
//         <div className="contact-form">
//             <h2>Registration Form</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="firstName">First Name</label>
//                     <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <br/>
//                 <div className="form-group">
//                     <label htmlFor="lastName">Last Name</label>
//                     <input
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <br/>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <br/>
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <br/>
//                 <div className="form-group">
//                     <label htmlFor="confirmPassword">Confirm Password</label>
//                     <input
//                         type="password"
//                         id="confirmPassword"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <br/>
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Contact;


import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
//   MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">CONTACT US</p>

              <div className="mb-4">
  <label htmlFor="form1" className="form-label">Your Name</label>
  <MDBInput id="form1" type="text" className="w-100" />
</div>

<div className="mb-4">
  <label htmlFor="form2" className="form-label">Your Email</label>
  <MDBInput id="form2" type="email" />
</div>

<div className="mb-4">
  <label htmlFor="form3" className="form-label">Password</label>
  <MDBInput id="form3" type="password" />
</div>

<div className="mb-4">
  <label htmlFor="form4" className="form-label">confirm password</label>
  <MDBInput id="form4" type="password" />
</div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our NewsLetter' />
              </div>

              <MDBBtn className='mb-4' size='lg'>submit</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;