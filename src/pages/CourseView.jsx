import React from 'react'
import HeaderMain from '../components/HeaderMain'

function CourseView() {
  return (
    <>
    <HeaderMain/>

    <div className="row">
        <h2 className='text-center'>Dance : Learn the basics of hip-hop for beginers</h2>
        
        <div className="col-md-3">
            <div style={{backgroundColor:"#00802b", color:"white"}}>
                <h2>Lessons</h2>

            </div>
        </div>
        <div className="col-md-9"></div>
        
    </div>
   
    
    </>
  )
}

export default CourseView