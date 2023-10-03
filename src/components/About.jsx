import React from 'react'
import content from '../data/content.json'

function About() {
  return (
    <section id='about' className="d-flex align-items-center justify-content-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 align-item-center">
                    <h1 className="display-4 text-primary"> About webinar </h1>
                    <p className="text-secondary display-6">
                    {content.about.title}
                    </p>

                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card">
                          <div className="card-body">
                             <h4> <i className="bi bi-geo-alt"></i> Where</h4>
                             <h6 className="text-primary"> { content.about.where } </h6>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card">
                          <div className="card-body">
                              <h4> <i className="bi bi-calendar-check"></i> When</h4>
                              <h6 className="text-primary"> { content.about.when } </h6>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-sm-none d-md-block d-lg-block" id='abt-img'>
                    <img src={content.about.abt1} alt="no image" className='img-fluid img-repsonsive abt1' />
                    <img src={content.about.abt2} alt="no image" className='img-fluid img-repsonsive abt2' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
