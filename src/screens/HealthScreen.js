import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Card, Image, CardColumns } from 'react-bootstrap'
import { BsCollectionFill } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'


function HealthScreen() {
    return (
        <div>
            <div className="px-4 my-5 text-center border-bottom">
              <h3 className="display-4 fw-bold">Hayatul Islamiya Health Center(HIHC)</h3>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
              </div>
            </div>
            <Row>
                <Col>
                <Image src="http://127.0.0.1:8000/media/nursery/20201128_091608.jpg" fluid />
                </Col>
                <Col>
                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                </Col>
            </Row>
            <Row>
              <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Columns with icons</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                  <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                      
                    </div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <Link to="#" className="icon-link">
                      Call to action
                      <BsArrowRight className="float-right" />
                    </Link>
                  </div>
                  <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">
                      
                    </div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <Link to="#" className="icon-link">
                      Call to action
                      <BsArrowRight className="float-right" />
                    </Link>
                  </div>
                  <div className="feature col">
                    <div className="feature-icon bg-primary bg-gradient">

                    </div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <Link to="#" className="icon-link">
                      Call to action
                      <BsArrowRight className="float-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </Row>
        </div>
    )
}

export default HealthScreen
