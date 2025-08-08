import React from 'react'



const Footer = () => {
  return (
    <div className="row">
        <div className="col-sm-12 text-white p-4" style={{background: 'linear-gradient(to right, #015eb3, #0a833e)',color:'white',height:'auto'}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 ps-5 px-auto text-start p-5 ">
                        <h5 className='fw-bold '>Bio Tech Park Lucknow</h5>
                        <p className='text-start'>Biotech Park Sector G, Jankipuram, Kursi Road, Lucknow - 226021 Uttar Pradesh - INDIA</p>

                        <p className='text-start'><i className="fa-solid fa-phone"></i> <span className='fw-bold'>Phone</span>91 522 4012091, 2365050</p>

                        <p className='text-start mt-0'><i className="fa solid fa-envelope"></i> <span className='fw-bold'>Email</span>psceo@biotechpark.org.in</p>

                        <p className='text-start mt-0'><i className="fa solid fa-envelope"></i> <span className='fw-bold'>Email</span>services@biotechpark.org.in</p>

                        <p className='text-start mt-0'><i className="fa solid fa-envelope"></i> <span className='fw-bold'>Email</span>psceo@biotechpark.org.in</p>

                        <p className='text-start mt-0'><i className="fa solid fa-envelope"></i> <span className='fw-bold'>Email</span>trainingprograms@biotechpark.org.in</p>

     
                        <div className="mt-2">
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>

                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-google"></i>
                        </div>
                    </div>
                    
                    <div className="col-6 col-sm-3 col-md-2 pt-5">
                        <h4>Bio-Tech Info</h4>
                        <ul className="list-unstyled">
                            <li className='mb-1'><i className="fas fa-external-link-alt"></i> Policies</li>
                            <li className='mb-1' ><i className="fas fa-external-link-alt"></i> Useful Links</li>
                            <li className='mb-1' ><i className="fas fa-external-link-alt"></i> Networks</li>
                            <li className='mb-1' ><i className="fas fa-external-link-alt"></i> Research Park</li>
                            <li className='mb-1' ><i className="fas fa-external-link-alt"></i> Contact Us</li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-3 pt-5">
                        <h4>Important Links</h4>
                        <ul className="list-unstyled">
                            <li className='mb-1' ><i className="fas fa-external-link-alt"></i> Tenders</li>
                            <li className='mb-1' ><i className="fas fa-external-link-alt"></i> Downloads</li>
                            <li className='mb-1' ><i className="fas fa-external-link-alt"></i> E-Calender</li>
                            <li className='mb-1' ><i className="fas fa-external-link-alt"></i> Directory</li>
                            <li className='mb-1' ><i className="fas fa-external-link-alt"></i> WebMail</li>
                        </ul>
                    </div>

                     <div className="col-sm-4 col-md-3 pt-5">
                        <h4>Certification</h4>
                        <img src="https://www.biotechpark.org.in/Content/images/certification.jpg" className="w-100 mb-3 border-rounded" alt='certificate' />
                    </div>                    

                </div>
            </div>
        </div>
    <div className="col-sm-12   p-3 text-center" style={{borderTop:"1px dotted black",
        borderBottom:"1px dotted black"
    }}>© Copyright 2024 Designed &amp; Developed By | Softpro India Computer Technologies(P) Ltd.
    </div>
</div>
  )
}


   
export default Footer