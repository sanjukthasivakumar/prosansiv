import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Illustration of a smartphone" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn className="mb-4 w-100" size="lg">Log in</MDBBtn>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mb-0">OR</p>
          </div>
          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="me-2"/>
            Continue with Twitter
          </MDBBtn>
          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="me-2"/>
            Continue with Facebook
          </MDBBtn>
          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#EA4335'}}>
            <MDBIcon fab icon="google" className="me-2"/>
            Continue with Google
          </MDBBtn>
          <div className='text-center text-md-start mt-4 pt-2'>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
