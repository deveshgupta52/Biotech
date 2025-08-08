import React from 'react'

function Topheader() {
  return (
    <div>
      <div className="row bg-primary ">
        <div className="col-md-8 d-flex align-items-center gap-2  " style={{ height: "40px" }}>
          <i class="fa-regular fa-clock text-white"></i>
          <p className='pt-3 text-white fw-4'>The Biotech Park Is Open From 10:00 am to 5:00 pm
          </p>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-end gap-1 pe-4 ">
          <div className='bg-white rounded p-1'><i class="fa-brands fa-facebook text-success bg-white "></i></div>
          <div className='bg-white rounded p-1'><i class="fa-brands fa-twitter text-success bg-white "></i></div>
          <div className='bg-white rounded p-1'><i class="fa-brands fa-youtube text-success bg-white "></i></div>
        </div>
      </div>
    </div>
  )
}

export default Topheader
