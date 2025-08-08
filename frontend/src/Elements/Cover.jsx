import React from 'react'

function Cover() {
    return (
        <div>
            <div className="container mt-3 " style={{ height: "344px" }}>
                <div className="row ">
                    <div className="col-12" style={{ height: "40px" }}><p className='fw-semibold fs-2'>We Cover The Whole Spectrum
                    </p></div>
                </div>
                <div className="row">
                    <div className="col-2 bg-primary ms-3 mt-2" style={{ height: "4px" }}></div>
                </div>
                <div className="row  mt-3" >
                    <div className="col-4" style={{ height: "300px" }}>

<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
<div className="card" style={{width:"250px"}}>
  <img src="https://www.biotechpark.org.in/Content/images/hitech.jpeg" style={{height:"250px",width:"100%"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text fs-5 fw-semibold text-primary text-center">High tech Laboratories</p>
  </div>
</div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover
