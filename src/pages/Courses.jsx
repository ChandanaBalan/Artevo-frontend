import React from 'react'
import Card from 'react-bootstrap/Card';
import HeaderMain from '../components/HeaderMain'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Courses() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>

            <HeaderMain />

            <div className="row container-fluid mb-5">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    
                    <div className='d-flex align-items-center'>
                        <h2 className='text-success' >Courses</h2>
                        <Link to={'/enrolled'} style={{ textDecoration: "none" }}><h3 className=' ps-4 text-dark'>Enrolled Courses</h3></Link>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3 mt-4">
                            <Card style={{ width: '100%', backgroundColor: "black" }}>
                                <Card.Body>
                                    <Card.Title className='text-center' style={{ fontSize: "30px", color: "white" }}>Guitar</Card.Title>
                                </Card.Body>
                                <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />

                                <div className='d-flex justify-content-around pb-3'>
                                    <div>
                                        <Button variant="light" onClick={handleShow}>
                                            About
                                        </Button>

                                        <Modal show={show} onHide={handleClose} centered animation={false}>
                                            
                                            <Modal.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius sint voluptas vel fuga architecto facere vero temporibus deserunt dicta, quaerat, adipisci, doloribus consectetur consequatur ea unde obcaecati eaque autem! </Modal.Body>
                                            
                                        </Modal>
                                    </div>
                                    <button className='btn btn-success'>Enroll</button>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-4">
                            <Card style={{ width: '100%', backgroundColor: "black" }}>
                                <Card.Body>
                                    <Card.Title className='text-center' style={{ fontSize: "30px", color: "white" }}>Guitar</Card.Title>
                                </Card.Body>
                                <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />

                                <div className='d-flex justify-content-around pb-3'>
                                    <div>
                                        <Button variant="light" onClick={handleShow}>
                                            About
                                        </Button>

                                        <Modal show={show} onHide={handleClose} centered animation={false}>
                                            
                                            <Modal.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius sint voluptas vel fuga architecto facere vero temporibus deserunt dicta, quaerat, adipisci, doloribus consectetur consequatur ea unde obcaecati eaque autem! </Modal.Body>
                                            
                                        </Modal>
                                    </div>
                                    <button className='btn btn-success'>Enroll</button>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-4">
                            <Card style={{ width: '100%', backgroundColor: "black" }}>
                                <Card.Body>
                                    <Card.Title className='text-center' style={{ fontSize: "30px", color: "white" }}>Guitar</Card.Title>
                                </Card.Body>
                                <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />

                                <div className='d-flex justify-content-around pb-3'>
                                    <div>
                                        <Button variant="light" onClick={handleShow}>
                                            About
                                        </Button>

                                        <Modal show={show} onHide={handleClose} centered animation={false}>
                                            
                                            <Modal.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius sint voluptas vel fuga architecto facere vero temporibus deserunt dicta, quaerat, adipisci, doloribus consectetur consequatur ea unde obcaecati eaque autem! </Modal.Body>
                                            
                                        </Modal>
                                    </div>
                                    <button className='btn btn-success'>Enroll</button>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-4">
                            <Card style={{ width: '100%', backgroundColor: "black" }}>
                                <Card.Body>
                                    <Card.Title className='text-center' style={{ fontSize: "30px", color: "white" }}>Guitar</Card.Title>
                                </Card.Body>
                                <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />

                                <div className='d-flex justify-content-around pb-3'>
                                    <div>
                                        <Button variant="light" onClick={handleShow}>
                                            About
                                        </Button>

                                        <Modal show={show} onHide={handleClose} centered animation={false}>
                                            
                                            <Modal.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius sint voluptas vel fuga architecto facere vero temporibus deserunt dicta, quaerat, adipisci, doloribus consectetur consequatur ea unde obcaecati eaque autem! </Modal.Body>
                                            
                                        </Modal>
                                    </div>
                                    <button className='btn btn-success'>Enroll</button>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-4">
                            <Card style={{ width: '100%', backgroundColor: "black" }}>
                                <Card.Body>
                                    <Card.Title className='text-center' style={{ fontSize: "30px", color: "white" }}>Guitar</Card.Title>
                                </Card.Body>
                                <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />

                                <div className='d-flex justify-content-around pb-3'>
                                    <div>
                                        <Button variant="light" onClick={handleShow}>
                                            About
                                        </Button>

                                        <Modal show={show} onHide={handleClose} centered animation={false}>
                                            
                                            <Modal.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius sint voluptas vel fuga architecto facere vero temporibus deserunt dicta, quaerat, adipisci, doloribus consectetur consequatur ea unde obcaecati eaque autem! </Modal.Body>
                                            
                                        </Modal>
                                    </div>
                                    <button className='btn btn-success'>Enroll</button>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-3 mt-4">
                            <Card style={{ width: '100%', backgroundColor: "black" }}>
                                <Card.Body>
                                    <Card.Title className='text-center' style={{ fontSize: "30px", color: "white" }}>Guitar</Card.Title>
                                </Card.Body>
                                <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />

                                <div className='d-flex justify-content-around pb-3'>
                                    <div>
                                        <Button variant="light" onClick={handleShow}>
                                            About
                                        </Button>

                                        <Modal show={show} onHide={handleClose} centered animation={false}>
                                            
                                            <Modal.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius sint voluptas vel fuga architecto facere vero temporibus deserunt dicta, quaerat, adipisci, doloribus consectetur consequatur ea unde obcaecati eaque autem! </Modal.Body>
                                            
                                        </Modal>
                                    </div>
                                    <button className='btn btn-success'>Enroll</button>
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

export default Courses