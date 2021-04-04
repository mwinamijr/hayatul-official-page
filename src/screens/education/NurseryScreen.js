import React from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap'


function NurseryScreen() {
    return (
        <div>
            <Row>
                <Col>
                  <Image src="http://127.0.0.1:8000/media/nursery/20201128_091608.jpg" fluid />
                  <div class="content">
                    <h1>Masomo</h1>
                    <p>
                      Wanafunzi wetu wanapata fursa ya kujifunza na kuanza kuzoea mwenendo wa shule kwa kupewa maandalizi yaliyo bora kabisa 
                      <span>Kimasomo, afya na michezo.</span>
                    </p>
                  </div>
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
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
                <Col>
                  <Image src="http://127.0.0.1:8000/media/nursery/20201128_091634.jpg" fluid />
                  <div class="content">
                    <h1>Kifungua kinywa</h1>
                    <p>
                      Pamoja na masomo na malezi bora wanayopatiwa katika shule yetu, pia watoto hawa hupatiwa kifungua kinywa kila siku ili aweze kusoma 
                      kwa furaha na amani.
                    </p>
                  </div>
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

export default NurseryScreen
