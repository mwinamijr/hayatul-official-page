import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card } from 'react-bootstrap'
import HomeCarousel from '../components/Carousel'


function HomeScreen({ history }) {
  
    return (
        <div>
            <Card className="bg-dark text-white">
              <Card.Img src="http://127.0.0.1:8000/media/carousel/20200921_093334.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <br />
            <Row>
                <Col md={9} >
                  <Card className="mb-2">
                    <Card.Body>
                      <Card.Title>Utoaji wa elimu</Card.Title>
                      <Card.Text>
                        Taasisi ya hayatul Islamiya Complex imajikita katika utoaji wa elimu kwa ngazi zote tangu mwaka 1998. 
                        Hayatul Islamiya Complex hadi kufika sasa tunatoa huduma ya elimu kuanzia Elimu ya Awali hadi kufikia kidato cha sita. 
                        Utoaji wa elimu hii unafuata mitaala ya serikali katika ngazi zote.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="mb-2">
                    <Card.Body>
                      <Card.Title>Huduma za afya</Card.Title>
                      <Card.Text>
                        Baada ya kutoa huduma ya elimu kwa zaidi ya miaka 23, sasa tasisi hii imeamua kuongeza nguvu katika kutoa 
                        huduma za kijamii kwa kuanzisha ujenzi wa Kituo cha Afya kitakachokuwa kikitoa huduma bora kabisa na kwa gharama nafuu 
                        huku tukizingatia na kufuata misingi na taratibu za dini ya kiislamukatika utoaji wa huduma zake.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="mb-2">
                    <Card.Body>
                      <Card.Title>Malezi ya kiislamu</Card.Title>
                      <Card.Text>
                        Taasisi ya Hayatul Islamiya Complex ilianzishwa kwa malengo ya kuwapatia vijana wa kiislamu maeneo yatakayokuwa yanawapatia 
                        uhuru wa kufanya ibada huku wakilelewa katika imani ya kiislamu. Uislamu siyo kuswali tu, bali mfumo kamili unaomuandaa 
                        kijana kuwa Khalifa wa Allah (S.W.) hapa duniani
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} >
                  <Row>
                    <Card style={{ width: '100%' }}>
                      <Card.Header className="bg-info">Downloads</Card.Header>
                      
                        <ul class="list-group">
                          <li class="list-group-item">Fomu ya kujiunga bweni (Msingi)</li>
                          <li class="list-group-item">Fomu ya kujiunga O-Level</li>
                          <li class="list-group-item">Fomu ya kujiunga O-Level</li>
                          <li class="list-group-item">Katiba ya jumuiya</li>
                        </ul>
                    </Card>
                  </Row>
                  <br />
                  <Row>
                    <Card style={{ width: '100%' }}>
                      <Card.Header className="bg-info">News</Card.Header>
                      
                        <ul class="list-group">
                          <li class="list-group-item">Matokeo CSEE 2020</li>
                          <li class="list-group-item">Matokeo FTNA 2020</li>
                          <li class="list-group-item">Matokeo PSLE 2020</li>
                          <li class="list-group-item">Matokeo Mock Kidato cha 6</li>
                        </ul>
                    </Card>
                  </Row>
                </Col>
            </Row>
        </div>
    )
}

export default HomeScreen
