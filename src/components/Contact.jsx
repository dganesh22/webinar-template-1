import React, { useState } from 'react'

function Contact() {
    const [reg,setReg] = useState({
        name: "",
        email: "",
        mobile: ""
    })

    const readValue = (e) => {
        const { name, value } = e.target;
        setReg({...reg, [name]: value })
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            console.log('reg =', reg)
        } catch (err) {
            console.log(err.message)
        }
    }

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
                <div className="col-lg-6 col-sm-12 col-md-12 mt-2 mb-2 p-4">
                    <img src="https://res.cloudinary.com/dfogisedz/image/upload/v1696331689/webinar/mkaltayncijkxua0wfja.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6  col-md-12 col-sm-12 mt-2 mb-2 p-2">
                    <div className="card">
                        <div className="card-body bg-light">
                            <h4 className="text-primary text-center">
                                Drop your Details Here
                            </h4>
                            <form autoComplete="off" method='post' onSubmit={submitHandler}>
                                <div className="form-group mt-4">
                                    
                                    <input type="text" name="name" value={reg.name} onChange={readValue} id="name" className="form-control" placeholder='Enter name' required />
                                </div>
                                <div className="form-group mt-4">

                                    <input type="email" name="email" value={reg.email} onChange={readValue} id="email" className="form-control" placeholder='Enter Email' required />
                                </div>
                                <div className="form-group mt-4">

                                    <input type="text" name="mobile" value={reg.mobile} onChange={readValue} id="mobile" className="form-control" placeholder='Enter Mobile' required />
                                </div>
                                <div className="form-group mt-4 d-grid gap-2">
                                    <input type="submit" value="Send" className="btn btn-primary" />
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
