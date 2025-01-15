import React from 'react'
import { Link } from 'react-router-dom'

function HeaderLanding() {
    return (
        <>
            <div className="row container-fluid">
                <div className="col-md-2"></div>
                <div className="col-md-8 container-fluid">
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                        <Link to={'/'} style={{textDecoration:"none"}}><h1 style={{ fontFamily: "Livvic", color:"#004d00"}}><i>Artevo</i></h1></Link>
                        <div>
                            <Link to={'/Auth'} ><button className='btn btn-success me-4'>Join as Teacher</button></Link>
                            <Link to={'/Auth'} ><button className='btn border'>Start Learning</button></Link>
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