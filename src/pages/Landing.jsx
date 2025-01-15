import React from 'react'
import HeaderLanding from '../components/HeaderLanding'
import './landing.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
      <HeaderLanding />
      <div className="row container-fluid">
        <div className="col-md-2"></div>
        <div className="col-md-8 container-fluid mx-2" >
          <div style={{backgroundColor: "#004d00",height: "50vh", borderRadius: "50px" }}>
            <h1 style={{ fontWeight: "600", fontSize: "4vw", color: "white" }} className='p-5 text-center mt-2 '>Elevating <span style={{ fontWeight: "300" }}><i>artistic</i></span> excellence through learning and teaching.</h1>

            <div className='d-flex justify-content-center '>
              <div className='w-20 px-5 pb-5  ' style={{ height: "200px", borderRadius: "500px" }}><img src="https://img.freepik.com/free-photo/band-mates-performing-together_107420-96130.jpg?t=st=1736884605~exp=1736888205~hmac=32d6cc20b282835cac6548eba45c22337098ed00524d38a77f332350de03ec3a&w=1380" alt="no image" className='w-100 ' style={{ height: "200px", borderRadius: "50px" }} /></div>

              <div className='w-20 px-5 pb-5  ' style={{ height: "200px", borderRadius: "500px" }}>
                <img src="https://img.freepik.com/free-photo/flexible-young-modern-dance-couple-posing_155003-43451.jpg?t=st=1736884974~exp=1736888574~hmac=7995ad44e0e6dc8efd1a28fa766d72ccf3b3949be35bf11e827353ade7280a52&w=900" alt="no image" className='w-100 ' style={{ height: "200px", borderRadius: "50px" }} />
              </div>

              <div className='w-20 px-5 pb-5  ' style={{ height: "200px", borderRadius: "500px" }}>
                <img src="https://img.freepik.com/free-photo/man-sitting-floor-learning-how-play-guitar_23-2148550723.jpg?t=st=1736886498~exp=1736890098~hmac=c17645a570464846d8b70fad4b2d88df688cf8d9a51d2f6c244e74ae4f54f391&w=1380" alt="no image" className='w-100 ' style={{ height: "200px", borderRadius: "50px" }} />
              </div>




            </div>
          </div>

          <div>
            <h2 className='mt-5 pt-5' style={{ fontSize: "50px" }}>Our Courses</h2>

            <div>
              <div className="row mt-5">
                <div className="col-md-3 mt-md-0 mt-3">
                  <Card style={{ width: '100%', backgroundColor: "black" }}>
                    <Card.Body>
                      <Card.Title className='text-center' style={{ fontSize: "30px", color: "white" }}>Guitar</Card.Title>
                    </Card.Body>
                    <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/lifestyle-tattooed-people_23-2149667391.jpg?t=st=1736887618~exp=1736891218~hmac=05aace861a7e61cab046078d0bd7ab0e890a11628924e9c5371b4816fd6d5b0d&w=1380" />
                  </Card>
                </div>
                <div className="col-md-3 mt-md-0 mt-3">
                  <Card style={{ width: '100%', backgroundColor: "#660029" }}>
                    <Card.Body>
                      <Card.Title className='text-center' style={{ fontSize: "30px", color: "white" }}>Dancing</Card.Title>
                    </Card.Body>
                    <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/boy-dancing-hip-hop-stylish-clothes-gradient-background-dance-hall-neon-light_155003-9262.jpg?t=st=1736887651~exp=1736891251~hmac=4551224aa8512d7263d7949a5664a8971ae7fe7d91199a41516fca3b9202f989&w=1380" />
                  </Card>

                </div>
                <div className="col-md-3 mt-md-0 mt-3">
                  <Card style={{ width: '100%', backgroundColor: "#4d194d" }}>
                    <Card.Body>
                      <Card.Title className='text-center' style={{ fontSize: "30px", color: "white" }}>Singing</Card.Title>
                    </Card.Body>
                    <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/front-view-young-woman-singing-with-her-head-voice_140725-37669.jpg?t=st=1736887754~exp=1736891354~hmac=bc64ddfb87ee9393d4e1b332265d80148d3638c9f9b6c0bb38b1f10e6c043c24&w=1380" />
                  </Card>
                </div>
                <div className="col-md-3 mt-md-0 mt-3">
                  <Card style={{ width: '100%', backgroundColor: "#000066" }}>
                    <Card.Body>
                      <Card.Title className='text-center' style={{ fontSize: "30px", color: "white" }}>Painting</Card.Title>
                    </Card.Body>
                    <Card.Img className='px-4 pb-4' variant="top" src="https://img.freepik.com/free-photo/female-artist-painting-green-shape_23-2147781622.jpg?t=st=1736887975~exp=1736891575~hmac=ecb138ad5c96749dbf83dc6e70c02077ea7da6d20f9b51b30e838ba6a96a94b7&w=1380" />
                  </Card>
                </div>
              </div>

              <div className=' d-flex justify-content-center align-items-center mt-5'>
                <Link to={'/Auth'}><button className='btn btn-dark'>Get more...</button></Link>
                </div>
             
            </div>
          </div>


          <div>
            <div className='border border-2 p-5 my-5'>
              <div className='row'>
                <div className='col-md-8'>
                  <h2 className='pt-5 px-5'>Step into a <span style={{ fontWeight: "300", color: "green" }}><i>world of creativity</i></span> where you can teach and learn art like never before!
                  </h2>

                  <h5 className='px-5 pt-3' style={{ fontWeight: "300" }}>Explore free courses in dance, music, painting, and more, crafted by passionate teachers.
                    Switch between teaching and learning modes seamlessly to share knowledge and grow your skills. Master your craft at your own pace.</h5>
                </div>
                <div className="col-md-4">
                  <img src="https://img.freepik.com/free-photo/photographer-exploring-abandoned-location_23-2150974432.jpg?t=st=1736891331~exp=1736894931~hmac=6c18ef7b1a0ef466e6ea6cc67d4f3c7d0153c6cd9a6cee8f717bee71eec19bfa&w=1380" alt="" className='w-100' />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="col-md-2"></div>
      </div>



    </>
  )
}


export default Landing