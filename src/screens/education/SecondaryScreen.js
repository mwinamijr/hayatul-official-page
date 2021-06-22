import React from 'react'
import { Row, Col, Card, Image, CardColumns } from 'react-bootstrap'


function SecondaryScreen() {
    return (
      <div>
        <div className="px-4 my-5 text-center border-bottom">
          <h3 className="display-4 fw-bold">Hayatul Islamiya Scondary School(HIHS)</h3>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          </div>
        </div>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src="http://127.0.0.1:8000/media/nursery/20201128_091608.jpg" />
                <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Malezi</Card.Title>
                  <Card.Text>
                      Kuanzia katika umri mdogo kabisa watoto wetu wanafundishwa malezi katika misingi na taratibu za dini ya kiislamu. 
                      Malezi hayo yanahusisha mifumo yote ya maisha :-
                  </Card.Text>
                  <Card.Text>
                    <ul>
                      <li>Maisha ya kiislamu</li>
                      <li>Ibada za kiislamu</li>
                      <li>Dua mbalimbali</li>
                      <li>Dua mbalimbali</li>
                      <li>Dua mbalimbali</li>
                      <li>Dua mbalimbali</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Michezo</Card.Title>
                  <Card.Text>
                      Ili kuwajenga watoto wetu katika afya njema wanapata fursa ya kushiriki katika michezo mablimbali ili kuweza kukuza uwezo 
                      wao wa kushirikia na wenzao katika kufanya shughuli mbalimbali.
                      Ili kuwajenga watoto wetu katika afya njema wanapata fursa ya kushiriki katika michezo mablimbali ili kuweza kukuza uwezo 
                      wao wa kushirikia na wenzao katika kufanya shughuli mbalimbali.
                      Ili kuwajenga watoto wetu katika afya njema wanapata fursa ya kushiriki katika michezo mablimbali ili kuweza kukuza uwezo 
                      wao wa kushirikia na wenzao katika kufanya shughuli mbalimbali.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
              <Col>
                <Card>
                  
                  <Card.Body>
                  <Card.Title>Card title that wraps to a new line</Card.Title>
                  <Card.Text>
                      This is a longer card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                  </Card.Text>
                  </Card.Body>
                  <Card.Img variant="top" src="http://127.0.0.1:8000/media/nursery/20201128_091608.jpg" />
                </Card>
              </Col>
              
          </Row>
          <br />
          <Card className="mb-2" border="warning">
            <Card.Header>Masomo wanayojifunza</Card.Header>
            <Card.Body>
              
              <ol>
                <li>Vitendo vya kuhesabu</li>
                <li>Vitendo vya kuwasiliana</li>
                <li>Kutunza mazingira</li>
                <li>Kutunza Afya</li>
                <li>Kumudu stadi za kisanii</li>
                <li>Malezi ya kiislamu</li>
              </ol>
            </Card.Body>
            
          </Card>
      </div>
    )
}

export default SecondaryScreen
