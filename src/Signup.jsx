import React from 'react'

const Signup = () => {
    return (
        <>
            <div className="my-5">
                <div className="text-center text-capitalize">
                    <h1>Sign Up</h1>
                    <hr className=" mx-auto w-25" />
                </div>
            </div>


            <div className="topmargin my-5">
                <form className="row g-3 topmargin mx-auto" >

                    <div className="col-md-6">
                        <label for="inputFirstname" className="form-label">FirstName</label>
                        <input type="text" class="form-control" placeholder="Enter Your First name" aria-label="First name" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputFirstname" className="form-label">LastName</label>
                        <input type="text" class="form-control" placeholder="Enter Your Last name" aria-label="Last name" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Please Enter Valid Email" />
                    </div><br />
                    <div className="col-md-3">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input name="up" type="password" className="form-control" id="inputPassword4" placeholder="Please Enter Valid Password" />
                    </div>
                    <div className="col-md-3">
                        <label for="inputPassword4" className="form-label">Confirm Password</label>
                        <input name="up2" type="password" className="form-control" id="inputPassword4" placeholder="Confirm Your Password" />
                    </div>

                    <div className="col-md-2">
                        <label for="numberPlate" className="form-label" placeholder="Car Number plate">Car Numebr</label>
                        <input type="text" className="form-control" id="numberPlate" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                                         </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </div>
                    <a href="/signin"><button type="button" class="btn btn-link">Already have an account ?  Sign In</button></a>                </form>
            </div>
        </>
    );
};
export default Signup;