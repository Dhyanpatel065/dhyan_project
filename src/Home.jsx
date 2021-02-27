import React from 'react';
import img from './img/nature.jpg';
import img2 from './img/nature2';
import img3 from './img/nature3.png';

const Home = () => {
  return (
    <>
      <div className="my-5 ">
        <div className="fw-bold text-center text-capitalize ">
          <h1>Welcome To Parking Reservation</h1>
          <hr className="w-50 mx-auto " />
        </div>
      </div>
      <div className="text-capitalize">
        <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className=" carousel-item active h-25" data-bs-interval="10000">
              <img src={img} className="d-block " alt="Car_parking" />
              <div className="carousel-caption  d-md-block ">
                <h5>GBC Parking Position</h5>
                <p>We have got systematic parking space.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={img2} className="d-block " alt="car" />
              <div className="carousel-caption  d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item h-25">
              <img src={img3} className="d-block " alt="Day_parking" />
              <div className="carousel-caption  d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>

      <div className="my-5">
        <div className="text-center text-capitalize">
          <h1>about parking system</h1>
          <hr className="w-50 mx-auto" />
        </div>
      </div>

      <div className="row mx-4 my-5">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-capitalize fw-bold">Why our parking App ?</h5>
              <p className="card-text">Lack of appropriate parking demotivated people to use their vehicle to come to campus. Consequently, few people are forced to take subways or park their cars on the street far away and take a walk to the campus spending more time in their visit as well as end up paying fines for wrong parking locations or exceeding the parking timings. This website is design for them. Our objective was to build a cost effective,
               generalizable time efficient, ecofriendly safe, parking reservation web app.</p>
              <a href="/signup" className="btn btn-primary">Regester Now</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-capitalize fw-bold">What's New In This</h5>
              <p className="card-text">This would suffice the need of corporate client and make parking management faster, well ordered and user friendly. Some of remarkable features are Check parking spot, Reserve, Prepayment/Post-Payment, Reminder of arrival and expiration time, Cancellation,
              Reminder of arrival and expiration time and cancellation Get more information about our website.</p><br />
              <a href="/about" className="btn btn-primary">More info</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Home; 
