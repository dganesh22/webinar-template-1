import React from 'react'

function Contact() {
  return (
    <section id='register'>
        <div className="container mt-5 mb-5">
            <div className="row  mt-5 mb-5">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-light">
                        Register with us
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12">
                    <img src="https://res.cloudinary.com/dfogisedz/image/upload/v1696331689/webinar/mkaltayncijkxua0wfja.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6  col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="display-6 text-primary">
                                Drop your Details Here
                            </h4>
                        </div>
                        <div className="card-body">
                            <form autoComplete="off">
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Full name</label>
                                    <input type="text" name="name" id="name" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="text" name="mobile" id="mobile" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Send" className="btn btn-outline-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
