import React from 'react'

function Cover() {
  return (
    <div>
      <div className="container mt-3 " style={{height:"344px"}}>
        <div className="row bg-dark">
            <div className="col-12" style={{height:"40px"}}></div>
        </div>
        <div className="row">
            <div className="col-2 bg-primary" style={{height:"4px"}}></div>
        </div>
        <div className="row bg-success mt-3" >
            <div className="col-4" style={{height:"300px"}}></div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  )
}

export default Cover
