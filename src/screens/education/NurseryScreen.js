import React from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap'


function NurseryScreen() {
    return (
        <div>
            <Row>
                <Col>
                  <Image src="http://127.0.0.1:8000/media/nursery/20201128_091608.jpg" fluid />
                  <div class="content">
                    <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
                  </div>
                </Col>
                <Col>

                </Col>
            </Row>
            <Row>
              <Col>
              
              </Col>
                <Col>
                  <Image src="http://127.0.0.1:8000/media/nursery/20201128_091634.jpg" fluid />
                  <div class="content">
                    <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
                  </div>
                </Col>
                
            </Row>
            <br />
            <Card className="mb-2">
              <Card.Header>Masomo wanayojifunza</Card.Header>
              <Card.Body>
              <Card.Title>Elimu ya Mazingira</Card.Title>
              <Card.Text>
                  Shule zetu zote zinatoa elimu ya mazingira kwa ufanisi mkubwa bila kuchagua aina ya wanafunzi. Wanafunzi wote ni sawa 
                  kwenye upande wa elimu bila kujali tofauti zao katika uwezo wao binafsi darasani.
              </Card.Text>
              </Card.Body>
              
              <Card.Body>
              <Card.Title>Elimu ya Dini</Card.Title>
              <Card.Text>
                  Malezi ya watoto wetu yanaanzia chini kabisa wakiwa na umri mdogo ili kuweza kuajenga vijana hawa katika misingi ya dini 
                  na malezi ili waweze kuwa vijana wema watakaolitumikia taifa lao kwa moyo mmoja
                  
                  <p><strong>N.B.</strong></p>
                  Katika suala la malezi, shule zetu hazichagui dini, hivyo wazazi na wanafunzi wote mnakaribishwa kuja kujifunza hatika shule zetu
              </Card.Text>
              </Card.Body>
            </Card>
        </div>
    )
}

export default NurseryScreen
