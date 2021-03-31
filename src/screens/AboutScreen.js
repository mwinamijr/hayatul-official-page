import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'


function AboutScreen() {
    return (
        <div>
          <Card className="mb-2">
          <Card.Header>Taasisi ya Hayatul Islamiya Complex</Card.Header>
            <Card.Body>
              <Card.Title>Taasisi na Madhumuni</Card.Title>
              <Card.Text>
                Hayatul Islamiya Complex ni taasisi ya kiislamu inayojihusisha na utoaji wa huduma za kijamii kwa kufuata 
                misingi na taratibu za dini ya kiislamu. Taasisi hii ina malengo ya kutoa huduma hizi kwa kadiri itakavyowezekana 
                kama ilivyo ainishwa katika mkakati wa miaka 50 ya Taasisi. Taasisi hii ina malengo ya kutoa huduma mbalimbali kama 
                vile Elimu, Afya na Maji.
              </Card.Text>
            </Card.Body>
            
            <Card.Body>
              <Card.Title>Kuanzishwa</Card.Title>
              <Card.Text>
                Taasisi ya Hayatul Islamiya Complex ilianzishwa mwaka 1998 na imekuwa ikitoa huduma mbalimbali tangu kuanzishwa kwake. 
              </Card.Text>
            </Card.Body>
          </Card>
          
          
          <Card className="mb-2">
            <Card.Header>Jumuiya ya Hayatul Islamiya Complex</Card.Header>
            <Card.Body>
              <Card.Title>Muundo</Card.Title>
              <Card.Text>
                Taasisi ya Hayatul Islamiya Complex inamilikiwa na wanajumuiya ya Hayatul Islamiya. Kwa kuwa pia hii ni taasisi ya kiislamu ipo chini ya 
                Baraza Kuu la Waislamu Tanzania (BAKWATA) 
              </Card.Text>

              <Card.Title>Kujiunga</Card.Title>
              <Card.Text>
                Ni rahisi sana kujiunga na kuwa mwanajumuiya wa Hayatul Islamiya Complex kwani kuna masharti machache na ya kawaida sana kwa anayetaka kujiunga. 
                Masharti hayo ni kama ifuatavyo:-
                <ol>
                  <li>klsfjlkjfjfg jhilfgjdjfedfj</li>
                  <li>klsfjlkjfjfg jhilfgjdjfedfj</li>
                  <li>klsfjlkjfjfg jhilfgjdjfedfj</li>
                  <li>klsfjlkjfjfg jhilfgjdjfedfj</li>
                  <li>klsfjlkjfjfg jhilfgjdjfedfj</li>
                </ol>
              </Card.Text>
            </Card.Body>
          </Card>


          <Card className="mb-2">
            <Card.Header>Uongozi wa Jumuiya ya Hayatul Islamiya Complex</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Body>
                    <Card.Title>Amiri wa Taasisi</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Body>
                    <Card.Title>Naibu Amiri</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Body>
                    <Card.Title>Katibu</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Body>
                    <Card.Title>Amirat</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
    )
}

export default AboutScreen
