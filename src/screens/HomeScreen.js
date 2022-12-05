import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import HomeCarousel from '../components/Carousel'


function HomeScreen({ history }) {
  
    return (
        <div>
          <div className="mb-2 p-2 border rounded">
            <marquee behavior="scroll" direction="left">
              <h3>
              Changia ujenzi wa Hayatul Islamiya Complex Health Cente: 
              <span className="text-center text-info">    BENKI NBC: 072206006583 JINA: UJENZI WA KITUO CHA AFYA HIC;   </span>
              <span className="text-warning">    Halo Pesa: 0622 977 536  Jina: Husseni Mwinami</span>
              </h3>
            </marquee>
          </div>
          <HomeCarousel />
          <br />
          <Row>
              <Col md={9} >
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title>Utoaji wa elimu</Card.Title>
                    <Card.Text>
                      Taasisi ya hayatul Islamiya Complex imejikita katika utoaji wa elimu kwa ngazi zote tangu mwaka 1998. 
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
                    <Card.Header className="bg-hayatul">Downloads</Card.Header>
                    
                      <ul className="list-group">
                        <li className="list-group-item">Fomu ya kujiunga bweni (Msingi)</li>
                        <li className="list-group-item">Fomu ya kujiunga O-Level</li>
                        <li className="list-group-item">Fomu ya kujiunga O-Level</li>
                        <li className="list-group-item">Katiba ya jumuiya</li>
                      </ul>
                  </Card>
                </Row>
                <br />
                <Row>
                  <Card style={{ width: '100%' }}>
                    <Card.Header className="bg-hayatul">News</Card.Header>
                    
                      <ul className="list-group">
                        <li className="list-group-item"><a target="_blank" rel="noreferrer" href="https://onlinesys.necta.go.tz/results/2022/acsee/results/s4875.htm"><Button variant="light" block>Matokeo Form VI - 2022</Button></a></li>
                        <li className="list-group-item"><a target="_blank" rel="noreferrer" href="https://matokeo.necta.go.tz/results2021/csee/results/s4875.htm"><Button variant="light" block>Matokeo Form IV - 2021</Button></a></li>
                        <li className="list-group-item"><a target="_blank" rel="noreferrer" href="https://matokeo.necta.go.tz/results2021/ftna/S4875.htm"><Button variant="light" block>Matokeo Form II - 2021</Button></a></li>
                        <li className="list-group-item"><a target="_blank" rel="noreferrer" href="https://onlinesys.necta.go.tz/results/2022/psle/results/shl_ps2106008.htm"><Button variant="light" block>Matokeo STD VII - 2022</Button></a></li>
                      </ul>
                  </Card>
                </Row>
              </Col>
          </Row>
        </div>
    )
}

export default HomeScreen
