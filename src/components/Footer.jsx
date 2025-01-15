import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'




function Footer() {
  return (
    <>
    <footer style={{width:"100%"}}>
      <div className='container-fluid' style={{backgroundColor:"#004d00"}}>
          <div className="row py-3">
              <div className="col-md-2"></div>
              <div className="col-md-8">
              <div className="row " >
              <div className="col-md-3 " style={{color:"white"}}>
              <h1 style={{ fontFamily: "Livvic" }}><i>Artevo</i></h1>
              <p style={{fontWeight:"200"}}>An innovative platform to learn, teach, and master art forms, connecting passionate artists worldwide</p>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-3 " style={{color:"white"}}>
                <h2 className='text-center mt-4'>Contact Us</h2>
                <div className='d-flex justify-content-between pt-4'>
                  <FontAwesomeIcon icon={faFacebook} size='2xl' style={{color: "#ffffff",}} />
                  <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#ffffff",}} />
                  <FontAwesomeIcon icon={faTwitter} size="2xl" style={{color: "#ffffff",}} />
                </div>
              </div>
              <p className='text-center'>Copyright ©️ chandana. All right reserved</p>
          </div>
              </div>
              <div className="col-md-2"></div>
          </div>
      </div>
    </footer>
    </>
  )
}

export default Footer