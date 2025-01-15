import React from 'react'
import Card from 'react-bootstrap/Card';
import HeaderMain from '../components/HeaderMain'
import { Link } from 'react-router-dom';



function Enrolled() {
    return (

        <>

            <HeaderMain />

            <div className="row container-fluid mb-5">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className='d-flex'>
                        <Link to={'/courses'} style={{textDecoration:"none"}}><h3 className='text-dark'>Courses</h3></Link>
                        <h2 className=' ps-4 text-success'>Enrolled Courses</h2>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3 mt-4">
                            <Card className='border' style={{ width: '100%', backgroundColor: "white" }}>
                                <Card.Body>
                                    <Card.Title className='text-center' style={{ fontSize: "30px" }}>Guitar</Card.Title>
                                </Card.Body>
                                <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />

                                <div className='d-flex justify-content-around pb-3'>
                                    <button className='btn btn-dark'>Start learning</button>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-4">
                            <Card className='border' style={{ width: '100%', backgroundColor: "white" }}>
                                <Card.Body>
                                    <Card.Title className='text-center' style={{ fontSize: "30px" }}>Guitar</Card.Title>
                                </Card.Body>
                                <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />

                                <div className='d-flex justify-content-around pb-3'>
                                    <button className='btn btn-dark'>Start learning</button>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-4">
                            <Card className='border' style={{ width: '100%', backgroundColor: "white" }}>
                                <Card.Body>
                                    <Card.Title className='text-center' style={{ fontSize: "30px" }}>Guitar</Card.Title>
                                </Card.Body>
                                <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />

                                <div className='d-flex justify-content-around pb-3'>
                                    <button className='btn btn-dark'>Start learning</button>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-4">
                            <Card className='border' style={{ width: '100%', backgroundColor: "white" }}>
                                <Card.Body>
                                    <Card.Title className='text-center' style={{ fontSize: "30px" }}>Guitar</Card.Title>
                                </Card.Body>
                                <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />

                                <div className='d-flex justify-content-around pb-3'>
                                    <button className='btn btn-dark'>Start learning</button>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-4">
                            <Card className='border' style={{ width: '100%', backgroundColor: "white" }}>
                                <Card.Body>
                                    <Card.Title className='text-center' style={{ fontSize: "30px" }}>Guitar</Card.Title>
                                </Card.Body>
                                <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />

                                <div className='d-flex justify-content-around pb-3'>
                                    <button className='btn btn-dark'>Start learning</button>
                                </div>
                            </Card>
                        </div>
                        
                        
                        
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>


        </>
    )
}

export default Enrolled