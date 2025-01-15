import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Auth() {
  return (
    <>

    <div style={{backgroundColor:"#004d00"}} className='container-fluid' >
        <div className="row">
            <div className="col-md-6 " style={{paddingTop:"250px"}}>
            <div style={{backgroundColor:"white"}} className='p-4 '>
                <Link to={'/'} style={{textDecoration:"none"}}><h1 className='text-center' style={{ fontFamily: "Livvic", fontSize:"150px", color:"green" }}><i>Artevo</i></h1></Link>
                </div>

            </div>
            <div className="col-md-6 p-5" >
            <div className='px-5' style={{marginTop:"150px", padding:"50px"}}>
                <div className='border'
                  style={{
                    
                    borderRadius: '8px',
                    padding: '50px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <h2 className="mb-4" style={{  color: 'white' }}>
                    Sign up
                  </h2>
                  <Form>
                    <Form.Group controlId="formEmail" className="mb-3">
                      
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
    
                    <Form.Group controlId="formPassword" className="mb-3">
                      
                      <Form.Control type="password" placeholder="Enter your password" />
                    </Form.Group>
    
                    <Form.Group controlId="formConfirmPassword" className="mb-4">
                      
                      <Form.Control type="password" placeholder="Re-enter your password" />
                    </Form.Group>
    
                    <div className=" mb-3">
                      <span style={{color:"white"}}>Already a user? <a href="/login" style={{ color: 'white' }}>Login</a></span>
                    </div>
    
                    <div className="text-center mb-3" style={{color:"white"}}>or</div>
    
                    <Button
                      variant="light"
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                      }}
                    >
                      <img
                        src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                        alt="Google"
                        style={{ height: '20px', marginRight: '10px' }}
                      />
                      Sign in with Google
                    </Button>
                  </Form>
                </div>
            </div>

            <div className='px-5' style={{marginTop:"150px", padding:"50px", marginBottom:"100px"}}>
                <div className='border'
                  style={{
                    
                    borderRadius: '8px',
                    padding: '50px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <h2 className="mb-4" style={{  color: 'white' }}>
                    Login
                  </h2>
                  <Form>
                    <Form.Group controlId="formEmail" className="mb-3">
                      
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
    
                    <Form.Group controlId="formPassword" className="mb-3">
                      
                      <Form.Control type="password" placeholder="Enter your password" />
                    </Form.Group>
    
    
                    <div className=" mb-3">
                      <span style={{color:"white"}}>Don't have an account yet? <a href="/login" style={{ color: 'white' }}>Sign up</a></span>
                    </div>
    
                    <div className="text-center mb-3" style={{color:"white"}}>or</div>
    
                    <Button
                      variant="light"
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                      }}
                    >
                      <img
                        src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                        alt="Google"
                        style={{ height: '20px', marginRight: '10px' }}
                      />
                      login with Google
                    </Button>
                  </Form>
                </div>
            </div>
          
            </div>
        </div>
    </div>
    </>
  )
}

export default Auth