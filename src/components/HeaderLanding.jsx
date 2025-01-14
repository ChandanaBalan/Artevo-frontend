import React from 'react'

function HeaderLanding() {
    return (
        <>
            <div className="row container-fluid">
                <div className="col-md-2"></div>
                <div className="col-md-8 container-fluid">
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                        <h1 style={{ fontFamily: "Livvic" }}><i>Artevo</i></h1>
                        <div>
                            <button className='btn btn-success me-4'>Join as Teacher</button>
                            <button className='btn border'>Start Learning</button>
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