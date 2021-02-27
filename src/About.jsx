import React from 'react';

const About = () => {
  return (
    <>
      <section id="header" className="mt-5">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="text-capitalize col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h2 className="fw-bold">Book your parking Spot with our <strong className="brand-name"> Parking app </strong></h2>
                <h3 className=" my-3">We are making your parking Easy</h3>
                <div classname="mt-3">
                  <a href="/signin" className="btn btn-primary" role="button"> Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};


export default About;
