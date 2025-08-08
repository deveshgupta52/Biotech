import React from 'react'

function About() {
  return (
    <div>
      <div className="row mt-5 ">
        <div className="col-12 py-5 bg-success" style={{
          background: " linear-gradient(to right, #0052cc, #00796b, #2e7d32)"
        }} >
          <div className="row " style={{ height: "40px" }}>
            <p className='text-white fs-3 s-5 fw-semibold ' style={{paddingLeft:"60px"}}>About Biotech Park</p>
          </div>
          <div className="row">
            <div className="col-4 bg-danger  bg-white" style={{ height: "1px",marginLeft:"60px" }}></div>
          </div>
          <div className="row " style={{ height: "350px" }} >
            <div className="col-6 ">
              <p className='text-white ps-5' style={{textAlign:"justify"}}>Welcome to Bio Tech Lucknow, India’s premier research center dedicated to pioneering advancements in biotechnology. As the nation’s number one research hub, we are at the forefront of innovative scientific research, driving breakthroughs that shape the future of healthcare, agriculture, and environmental sustainability. Our state-of-the-art facilities and world-class laboratories are staffed by a team of distinguished scientists and researchers committed to excellence. At Bio Tech Lucknow, we focus on cutting-edge research in genomics, bioinformatics, and molecular biology, striving to translate scientific discoveries into practical solutions that benefit society. We pride ourselves on fostering a collaborative environment that encourages creativity and innovation. Our partnerships with leading academic institutions, industry leaders, and government agencies enable us to stay ahead in the rapidly evolving field of biotechnology. Join us in our mission to push the boundaries of science and improve the quality of life through groundbreaking research and sustainable technological advancements. Bio Tech Lucknow is not just a research center; it is a beacon of progress and a catalyst for change in the biotech landscape of India.

              </p>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
