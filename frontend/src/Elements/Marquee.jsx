import React from 'react'

function Marquee() {
  return (
    <div>
      
        <div className="container mt-4 ">
            <div className="row">
                            <div className="col-2 " style={{height:"40px", background:"#127905"}}> 
                                <p className='fw-4 fs-5 text-center text-white'>Announcements</p>
                                 </div>
            <div className="col-10 bg-primary">
                <marquee behavior="scroll" direction="left" className="text-white fw-bold ">Join our webinar on Bioinformatics, "Unlocking the Power of Bioinformatics," on September 14th, 2024, at 11:00 AM!</marquee>
            </div>
            </div>
        </div>
      </div>
    
  )
}

export default Marquee
