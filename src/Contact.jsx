import React from 'react';

const Contact = () => {
  return (
    <>

      <div className="my-5">
        <div className="text-center text-capitalize">
          <h1>Contact Us</h1>
          <hr className=" mx-auto w-25" />
        </div>
      </div>
      <div className="col-xl-6 col-6 col-md-6 mx-auto my-5">
        <form>
          <div className="col-xl-12 col-12 col-md-12">
            <label for="inputFirstname" className="form-label">FirstName</label>
            <input type="text" class="form-control" placeholder="Enter Your First name" aria-label="First name" />
          </div>
          <div className="col-xl-12 col-12 col-md-12">
            <label for="inputFirstname" className="form-label">LastName</label>
            <input type="text" class="form-control" placeholder="Enter Your Last name" aria-label="Last name" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Reason For Contact</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );

};


export default Contact;
