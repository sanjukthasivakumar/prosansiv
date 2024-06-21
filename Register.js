// // Register.js
// import React from 'react';
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBBtn,
//   // MDBIcon,
//   MDBInput,
//   // MDBCheckbox
// } from 'mdb-react-ui-kit';

// function Register() {
//   return (
//     <MDBContainer fluid className="p-3 my-5">
//       <MDBRow>
//         <MDBCol col='10' md='6'>
//           {/* Your illustration or image */}
//           <img src="C:\Users\admin\Desktop\React app\mysite\src\Images\images .jpg" className="img-fluid" alt="Illustration of a smartphone" />
//         </MDBCol>
//         <MDBCol col='4' md='6'>
//           <MDBInput wrapperClass='mb-4' label='Full Name' id='formControlLg' type='text' size="lg"/>
//           <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
//           <MDBInput wrapperClass='mb-4' label='Confirm Password' id='formControlLg' type='password' size="lg"/>
//           <MDBBtn className="mb-4 w-100" size="lg">Register</MDBBtn>
//           <div className='text-center text-md-start mt-4 pt-2'>
//             <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="/login" className="link-danger">Log in</a></p>
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default Register;

import React from 'react';
import '../Assets/Registration.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <MDBContainer fluid className='h-custom' style={{ flex: '1' }}>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12' className='m-5'>
            <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>
              <MDBCardBody className='p-0'>
                <MDBRow>
                  <MDBCol md='6' className='p-5 bg-white'>
                    <h3 className="fw-normal mb-5" style={{ color: '#4835d4' }}>General Information</h3>
                    <div className='mb-4'>
                      <label htmlFor='title' className='form-label'>Title</label>
                      <select className='form-select form-select-lg' id='title'>
                        <option value='1'>Title</option>
                        <option value='2'>Student</option>
                        <option value='3'>Teacher</option>
                        <option value='4'>Others</option>
                      </select>
                    </div>
                    <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Date Of Birth' size='lg' id='form3' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Organization' size='lg' id='form4' type='text'/>
                    <div className='mb-4'>
                      <label htmlFor='employees' className='form-label'>Gender</label>
                      <select className='form-select form-select-lg' id='employees'>
                        <option value='1'>Gender</option>
                        <option value='2'>Female</option>
                        <option value='3'>Male</option>
                        <option value='4'>Others</option>
                      </select>
                    </div>
                  </MDBCol>
                  <MDBCol md='6' className='bg-indigo p-5'>
                    <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4' }}>Contact Details</h3>
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Street + Nr' size='lg' id='form5' type='text'/>
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Additional Information' size='lg' id='form6' type='text'/>
                    <MDBRow>
                      <MDBCol md='5'>
                        <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Zip Code' size='lg' id='form7' type='text'/>
                      </MDBCol>
                      <MDBCol md='7'>
                        <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Place' size='lg' id='form8' type='text'/>
                      </MDBCol>
                    </MDBRow>
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Country' size='lg' id='form9' type='text'/>
                    <MDBRow>
                      <MDBCol md='5'>
                        <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Code +' size='lg' id='form10' type='text'/>
                      </MDBCol>
                      <MDBCol md='7'>
                        <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phone Number' size='lg' id='form11' type='text'/>
                      </MDBCol>
                    </MDBRow>
                    <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Your Email' size='lg' id='form12' type='email'/>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='text-white mb-4' label='I do accept the Terms and Conditions of your site.' />
                    <MDBBtn color='light' size='lg'>Register</MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <div className='text-center mt-4'>
              <p>Already have an account? <Link to='/login' className='text-decoration-none'>Login</Link></p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <footer className='bg-light text-center p-3'>
      </footer>
    </div>
  );
}

export default App;
