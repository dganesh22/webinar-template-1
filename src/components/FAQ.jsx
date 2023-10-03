import React from 'react'
import content from "../data/content.json"

function FAQ() {
  return (
    <section id='faq'>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
                <h3 className="display-3 text-center text-primary">
                    Frequently Asked Questions
                </h3>
            </div>
          </div>

          <div className="row mt-3 mb-3">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                <div className="accordion accordion-flush" id='faq'>
                    {
                        content && content.faq.map((item,index) => {
                          return (
                            <div className="accordion-item mt-2 mb-2" key={index}>
                              <div className="accordion-header">
                                <div className="accordion-button collapsed" data-bs-target={`#${item.title}`} data-bs-toggle="collapse">
                                    <h6 className="text-primary"> { item.quest } </h6>
                                </div>
                              </div>
      
                              <div id={item.title} className="accordion-collapse collapse" data-bs-parent="#faq">
                                  <div className="accordion body p-4">
                                  
                                      <p className="text-secondary text-justify"> { item.ans } </p>
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

export default FAQ
