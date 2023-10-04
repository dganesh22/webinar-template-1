import React, { useState } from 'react'
import * as EmailValidator from 'node-email-validation'
import { toast } from 'react-toastify';
import content from '../data/content.json'
import axios from 'axios';
import Email from '../template/email';

const URL = "https://email-api-r1kd.onrender.com"

const Loader = () => {
    return (
        <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}



function Contact() {
    const [reg,setReg] = useState({
        name: "",
        email: "",
        mobile: ""
    })

    const [err,setError] = useState(false)

    const [nameErr,setNameErr] = useState("")
    const [emailErr,setEmailErr] = useState("")
    const [mobileErr,setMobileErr] = useState("")

    const [loading,setLoading] = useState(false)

    const readValue = (e) => {
        const { name, value } = e.target;
        if(name === "name") {
            validateName(value)
        } 
        if(name === "email") {
            validateEmail(value)
        }

        if(name === "mobile") {
            validateMobile(value)
        }
        setReg({...reg, [name]: value })
    }


    const validateName = (name) => {
        if(name === ""){
            setError(true)
            setNameErr("Name field cannot be empty");
        }else {
            let regex = /^[a-zA-Z\s]+$/;
            if(regex.test(name) === false) {
                setError(true)
               setNameErr("Please enter a valid name");
            } else{
                setError(false)
                setNameErr(false)
            }
        }
    }

    const validateMobile = (mobile) => {
        if(mobile === "") {
            setError(true)
            setMobileErr("Mobile field cannot be empty");
        } else {
            let regex = /^[6-9]\d{9}$/;
            if(regex.test(mobile) === false) {
                setError(true)
                setMobileErr("Invalid Mobile number");
            } else {
                setMobileErr("");
                setError(false)
            }
        }
    }

    const validateEmail = (email) => {
        if(email === "") {
            setError(true)
            setEmailErr("Email field cannot be empty");
        } else {
            let regex = /^\S+@\S+\.\S+$/;
            if(regex.test(email) === false) {
                setError(true)
                setEmailErr("Invalid Email format");
            } else if (EmailValidator.is_email_valid(email) === false) {
                setError(true)
                setEmailErr("Invalid Email service");
            } else {
                setError(false)
                setEmailErr("");
            }
        }
    }



    const submitHandler = async (e) => {
        e.preventDefault();
        try {
           
            if(err) {
                toast.error("Check your Details..")
            } else {
                let data = Email(reg.name,reg.email,reg.mobile)
                let to = "chandini.cv@be-practical.com"
                let sub = "Webinar Registration details"

                let final = {
                    to,
                    subject: sub,
                    content: data
                }

                setLoading(true)

                await axios.post(`${URL}/api/send/mail`, final)
                        .then(res => {
                            // toast.success("Thank you for registration..")
                            setLoading(false)
                            toast.info("To Complete registration. Pay Rs.199 to secure your spot on webinar.")
                            window.location.href = content.pay.url
                        }).catch(err => toast.error(err.message))
            }

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
                <>
                            {
                                loading ? (<div className="card-body">
                                        <Loader/>
                                </div>) : (
                    <div className="card">
                        <div className="card-header bg-dark p-5 text-center">
                            <img src={content.header.logo} alt="" className='img-fluid mt-2 mb-3' width={200} height={150} />
                            <h4 className="text-light"> { content.hero['mainTitle-1']} <span className="text-warning"> { content.hero['mainTitle-2']} </span> </h4>
                            <h4>
                                <s className="text-danger"> &#8377;{ content.action.amount } </s> &nbsp;
                                 <span className='text-light'> &#8377; { content.action.discount } /- </span>
                            </h4>
                        </div>

                                    <div className="card-body bg-light">
                            <h4 className="text-primary text-center text-uppercase">
                                Register for webinar
                            </h4>
                            <form autoComplete="off" method='post' onSubmit={submitHandler}>
                                <div className="form-group mt-4">
                                    
                                    <input type="text" name="name" value={reg.name} onChange={readValue} id="name" className="form-control" placeholder='Enter name' required />
                                    <div>
                                            { err && nameErr ? <strong className="text-danger"> { nameErr } </strong> : null }
                                    </div>
                                </div>
                                <div className="form-group mt-4">

                                    <input type="text" name="email" value={reg.email} onChange={readValue} id="email" className="form-control" placeholder='Enter Email' required />
                                    <div>
                                            { err && emailErr ? <strong className="text-danger"> { emailErr } </strong> : null }
                                    </div>
                                </div>
                                <div className="form-group mt-4">

                                    <input type="text" name="mobile" value={reg.mobile} onChange={readValue} id="mobile" className="form-control" placeholder='Enter Mobile' required />
                                    <div>
                                            { err && mobileErr ? <strong className="text-danger"> { mobileErr } </strong> : null }
                                    </div>
                                </div>
                                <div className="form-group mt-4 d-grid gap-2">
                                    <input type="submit" value="Confirm" className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                                )
                        }
                    </>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
