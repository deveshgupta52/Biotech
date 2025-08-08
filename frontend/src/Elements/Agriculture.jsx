import React from 'react'

function Cover() {
  return (
    <div className='mt-5 pt-3'>
      <div className="container mt-5 " style={{height:"444px"}}>
        <div className="row ">
            <div className="col-12" style={{height:"40px"}}><p className='fw-semibold fs-2'>Agriculture Services Industry
                    </p></div>
        </div>
        <div className="row">
            <div className="col-2 bg-primary mt-2 ms-3" style={{height:"4px"}}></div>
        </div>
        <div className="row  mt-3" >
            <div className="col-6 " style={{height:"400px"}}>
              <ol className='mt-3'>
                <li className='fs-3 fw-semibold py-3 ' style={{borderTop:"1px solid grey",borderBottom:"1px solid grey"}}>Agriculture & Health</li>
                <li className='fs-3 fw-semibold py-3 ' style={{borderBottom:"1px solid grey"}}>Chemical & Metrical</li>
 <li className='fs-3 fw-semibold py-3 ' style={{borderBottom:"1px solid grey"}}>Soil Analysis</li>
 <li className='fs-3 fw-semibold py-3' style={{borderBottom:"1px solid grey"}}>Soil Tillage</li>
 
              </ol>
            </div>
            <div className="col-6" style={{height:"350px"}}>
              <img src="https://www.biotechpark.org.in/Content/images/ag.jpeg" alt="" style={{height:"100%",width:"100%"}} />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Cover
