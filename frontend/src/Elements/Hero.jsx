import React from 'react';

function Hero() {
    return (
        <div>
            <div className="row">
                <div className="col-12 g-0" style={{ height: "500px" }}>
                    <img 
                        src="https://www.biotechpark.org.in/SilderImages/Silder2024-08-04_00-59-53.jpg" 
                        alt="Hero Banner" 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
