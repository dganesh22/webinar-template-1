import React from 'react'
import { Link  } from 'react-router-dom'
import content from '../data/content.json'

function Sec3() {
  return (
    <section id='action' className='d-flex align-items-center'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="display-6 text-center text-light animate__animated animate__bounce"  id='action-content'>
                    { content.action.txt } <s className="text-danger"> &#8377;{ content.action.amount } </s> &nbsp;
                      <Link to={content.pay.url} target='_blank' className="btn btn-outline-success btn-lg">
                        <h3> &#8377; { content.action.discount } </h3>
                      </Link>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Sec3
