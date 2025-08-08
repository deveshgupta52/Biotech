import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="row sticky-top" style={{background:" linear-gradient(to right, #0052cc, #00796b, #2e7d32)"
}}>
        <div className="col-3 d-flex align-items-center justify-content-center gap-1   " >
          <img className="ms-3"src="https://www.biotechpark.org.in/Content/Biotech%20logo.jpg" alt="" style={{height:"60px",width:"40px"}} />
          <p className='fw-semibold text-white fs-5 pt-3 ps-2'>Biotechtech Park,Lucknow</p>
        </div>
          <div className="col-9 d-flex align-items-center  " style={{height:"120px",paddingLeft:"40px"}}>
            <nav className="navbar navbar-expand-lg  " style={{fontSize:"18px",}}>
  <div className="container-fluid ">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <Link to={'/home'} className="nav-link text-white">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">The Park</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Facilities</a>
        </li>
                <li className="nav-item">
          <a className="nav-link text-white" href="#">Skill Development</a>
        </li>
                <li className="nav-item">
          <a className="nav-link text-white" href="#">Business</a>
        </li>
                <li className="nav-item">
          <a className="nav-link text-white" href="#">Success Stories</a>
        </li>
                <li className="nav-item">
          <a className="nav-link text-white" href="#">News Events</a>
        </li>
                <li className="nav-item">
          <a className="nav-link text-white" href="#">contact Us</a>
        </li>

      </ul>

      <Link to={'/admin'} className="btn btn-sm btn-outline-dark">Admin</Link>
    </div>
  </div>
</nav>
          </div>
      </div>
    </div>
  )
}

export default Navbar
