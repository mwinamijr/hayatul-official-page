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
            <div className="col-lg-8 mx-auto">
              <p className="lead mb-4">
                Mahitaji ya Huduma ya Afya ni makubwa kwa nchi yetu. <br /> <i><b>Mahitaji ya huduma ya Afya yanayofuata utaratibu na misingi ya dini ya KIISLAMU ni mkubwa zaidi.</b></i>
              </p>
            </div>
              <p className="text-white rounded bg-dark">
                <h5 className="display-4 fw-bold">Changia Ujenzi wa Hospitali hapa</h5>
                <h5 className="text-center text-info">BENKI NBC: 072206006583 JINA: UJENZI WA KITO CHA AFYA HIC</h5>
                <div className="text-center"> 
                  <span className="text-warning">Halo Pesa: 0622 977 536  Jina: Hussein Mwinami</span>
                </div>
              </p>
          </div>
          <Row>
              <Col md={6}>
              <Image src="http://127.0.0.1:8000/images/nursery/20201128_091608.jpg" fluid />
              </Col>
              <Col md={6}>
              <p className="lead mb-4 text-justify">
                Taasisi ya Hayatul Islamiya tumeamua kujenga Hospitali itakaykuwa ikitoa huduma za afya ka jamii yote na kwa gharama nafuu sana.  
                <i> Hospitali ya Hayatul Islamiya itakuwa ikitoa huduma zote hizo lakini <b>kwa kuzingatia kanuni, mipaka na sheria za dini ya kiislamu.</b></i>
              </p>
              <p className="text-center display-4 text-success"><strong>Dawa na Da`awa</strong></p>
              </Col>
          </Row> <br />
          <Row>
            <Col>
              <Card className="mb-2">
                <Card.Body>
                <Card.Title>Huduma zikazotolewa </Card.Title>
                <Card.Text>
                    <ol>
                      <li>Kliniki ya Mama na Mtoto</li>
                      <li>Huduma ya matibabu ya nje (OUTPATIENTS)</li>
                      <li>Huduma ya kulaza wagonjwa (INPATIENTs)</li>
                      <li>Matibabu ya Meno, macho na koo (ENT)</li>
                      <li>Upasuaji mdogo (Surgery)</li>
                    </ol>
                </Card.Text>
                </Card.Body>
                
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text className="text-center">
                      This is a longer card with supporting text below as a natural lead-in to
                  </Card.Text>
                  </Card.Body>
                  <Card.Img variant="top" src="http://127.0.0.1:8000/images/nursery/20201128_091608.jpg" />
               
              </Card>
            </Col>
          </Row>
          <Row>
            <div className="container px-4 py-5" id="featured-3">
              <h2 className="pb-2 border-bottom">Taarifa za wazi - Hayatul Islamiya Health Center</h2>
              <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                  <div className="feature-icon bg-primary bg-gradient">
                    
                  </div>
                  <h2>Mapato na Matumizi</h2>
                  <p className="text-justify">
                    Michango yote inayotolewa ili kuchangia ujenzi wa Kituo hiki cha Afya ipo wazi kwa yeyote anayetaka kuona kiasi kilichopatikana na jinsi ambavyo imetumika. <br />
                    <i className="text-success"><small>(Taarifa za fedha zitakuwa zinaboreshwa kila Ijumaa)</small></i>
                  </p>
                  <Link to="/heal/finance" className="float-right icon-link">
                    <BsArrowRight />
                    zaidi ...
                  </Link>
                </div>
                <div className="feature col">
                  <div className="feature-icon bg-primary bg-gradient">
                    
                  </div>
                  <h2>Maendeleo ya Ujenzi</h2>
                  <p className="text-justify">
                    Hapa utapata kuona hali halisi ya ujenzi ilipofikia na maendeleo yanayoendelea katika kipindi cha ujenzi.
                  </p>
                  <Link to="/heal/progress" className="float-right icon-link">
                    <BsArrowRight />
                    zaidi ...
                  </Link>
                </div>
                <div className="feature col">
                  <div className="feature-icon bg-primary bg-gradient">

                  </div>
                  <h2>Hatua inayofuata</h2>
                  <p className="text-justify">
                    Ukihitaji kufahamu zaidi hatua inayofuata katika kuendelea na ujenzi au maboresho na utoaji wa huduma, bonyeza hapa chini
                  </p>
                  <Link to="/heal/next" className="float-right icon-link">
                    <BsArrowRight />
                    zaidi ...
                  </Link>
                </div>
              </div>
            </div>
          </Row>
        </div>
    )
}

export default HealthScreen
