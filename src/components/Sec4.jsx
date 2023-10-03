import React from 'react'
import content from "../data/content.json"

function Sec4() {
  return (
    <section id='schedule'>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
                <h3 className="display-3 text-center text-primary">
                    Event Schedule
                </h3>
            </div>
          </div>

          <div className="row mt-3 mb-3">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                <div className="accordion accordion-flush" id='schedule'>
                    {
                        content && content.schedule.map((item,index) => {
                          return (
                            <div className="accordion-item mt-2 mb-2" key={index}>
                              <div className="accordion-header">
                                <div className="accordion-button collapsed" data-bs-target={`#${item.content_title}`} data-bs-toggle="collapse">
                                    <h6 className="text-primary"> { item.title } </h6>
                                </div>
                              </div>
      
                              <div id={item.content_title} className="accordion-collapse collapse" data-bs-parent="#schedule">
                                  <div className="accordion body">
                                  <h5 className="text-secondary"> { item.content_title } </h5>
                                      <p className="text-secondary text-justify"> { item.content_desc } </p>
                                  </div>
                              </div>
                          </div>
                          )
                        })
                    }
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Sec4
