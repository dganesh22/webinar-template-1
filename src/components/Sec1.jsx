import React from 'react'
import content from '../data/content.json'

function Sec1() {
  return (
    <section id='headline' className="d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-right">
                <div className="row">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                      <span className="display-6 text-warning" data-animation="fadeInLeft" data-delay=".1s"> { content.hero.subTitle} </span>
                  <h1 className="display-1 text-light" data-animation="fadeInLeft" data-delay=".5s"> { content.hero.mainTitle }
                   </h1>

                    {/* <div className="btn btn-outline-warning btn-lg">
                       <span className="text-light">Play</span> <i className="bi bi-play-circle"></i>
                    </div> */}
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Sec1
