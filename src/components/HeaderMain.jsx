import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function HeaderLanding() {
    return (
        <>
            <div className="row container-fluid">
                <div className="col-md-2"></div>
                <div className="col-md-8 container-fluid">
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                        <Link to={'/'} style={{textDecoration:"none"}}><h1 style={{ fontFamily: "Livvic", color:"#004d00" }}><i>Artevo</i></h1></Link>
                        <div className='d-flex w-25'>
                        <input type="text" placeholder='Search' className='form-control shadow ' />
                        <FontAwesomeIcon style={{color:"black", marginTop:"10px", marginLeft:"-30px"}} icon={faMagnifyingGlass} />
                        </div>
                        <div>
                            <Link to={'/addcourse'} ><button className='btn btn-success me-4'>Switch Teaching</button></Link>
                            <Link to={'/courses'} ><button className='btn btn-success me-4'>Switch Learning</button></Link>
                            <Link to={''} ><button className='btn border'><FontAwesomeIcon icon={faUser} /></button></Link>
                        </div>
                    </div>
                   
                </div>
                <div className="col-md-2"></div>
            </div>
            <hr />
        </>
    )
}

export default HeaderLanding