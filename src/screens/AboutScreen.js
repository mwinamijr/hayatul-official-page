import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'


function AboutScreen() {
    return (
        <div>
          <Card className="mb-2">
          <Card.Header>
          <h3 className=" text-center display-4 fw-normal">Taasisi ya Hayatul Islamiya Complex</h3>
          </Card.Header>
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
            <Card.Header>
              <h3 className=" text-center display-4 fw-normal">Jumuiya ya Hayatul Islamiya Complex</h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>Muundo</Card.Title>
              <Card.Text>
                Taasisi ya Hayatul Islamiya Complex inamilikiwa na wanajumuiya ya Hayatul Islamiya. Kwa kuwa pia hii ni taasisi ya kiislamu ipo chini ya 
                Baraza Kuu la Waislamu Tanzania (BAKWATA) 
              </Card.Text>

              <Card.Title id="jiunge-hic">Kujiunga</Card.Title>
              <Card.Text>
                Ni rahisi sana kujiunga na kuwa mwanajumuiya wa Hayatul Islamiya Complex kwani kuna masharti machache na ya kawaida sana kwa anayetaka kujiunga. 
                Masharti hayo ni kama ifuatavyo:-
                <ol>
                  <li>Awe muumini wa dini ya kiislamu bila kujali jinsia yake</li>
                  <li>Awe amebaleghe (umri zaidi ya miaka 15)</li>
                  <li>Awe na akili timamu .</li>
                  <li>Akubali kushikamana kikamilifu na mafundisho ya Qur-ani na sunna .</li>
                  <li>Awe tayari kujiendeleza kielimu kwa masomo ya dini na ya mazingira</li>
                  <li>Awe tayari kuendeleza mipango ya jumuiya kwa kujitolea mali yake elimu yake , muda wake na nguvu zake .</li>
                  <li>
                    Awe tayari kula kiapo kwa Mwenyezi Mungu kuwa hatarudi nyuma katika harakati hizi za kuihudumia jamii.
                  </li>
                  <li>
                    Kujiunga na Jumuiya hii ni bure .Hakuna kiingilio . Hivyo kila anaetaka kujiunga hana budi kutafakari kwa makini ili asifanye mzaha na kazi hii ya Mwenyezi Mungu kuepuka hasira za mola wake
                  </li>
                </ol>
              </Card.Text>
            </Card.Body>
          </Card>


          <Card className="mb-2">
            <Card.Header>
              <h3 className=" text-center display-4 fw-normal">Uongozi wa Jumuiya ya Hayatul Islamiya Complex</h3>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="top" src="https://via.placeholder.com/150.png" />
                  <Card.Body>
                    <Card.Title>Amiri wa Taasisi</Card.Title>
                    <Card.Text>
                    <em><b>Hadhi: </b></em>Amiri ndie kiongozi wa juu kabisa wa Jumuiya .Wanajumuiya wote wanapaswa kumtii na kumuheshimu maadamu hakiuki amri na makatazo ya Mwenyezi Mungu. <br />
                    <em><b>Wajibu: </b></em>Wajibu wa Amiri ni kuiongoza Jumuiya kwa mujibu wa Qur-an na sunna .Pia ni wajibu wake kuongoza Jumuiya hii kwa kufuata katiba hii.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col>
                  <Card.Img variant="top" src="https://via.placeholder.com/150.png" />
                  <Card.Body>
                    <Card.Title>Naibu Amiri</Card.Title>
                    <Card.Text>
                    <em><b>Hadhi: </b></em>Huyu ni msaidizi wa Amiri. <br />Hivyo hadhi na wajibu wake ni sawa na ule wa Amiri.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col>
                  <Card.Img variant="top" src="https://via.placeholder.com/150.png" />
                  <Card.Body>
                    <Card.Title>Katibu</Card.Title>
                    <Card.Text>
                      <em><b>Hadhi: </b></em>Huyu ndiye mtendaji wa kazi za kila siku za Jumuiya. <br />
                      <em><b>Wajibu: </b></em>Wajibu wake ni kutekeleza kazi zake kwa maelekezo ya Amiri wa Jumuiya au Naibu Amiri na kwa kuzingatia katiba hii .

                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Card.Img variant="top" src="https://via.placeholder.com/150.png" />
                  <Card.Body>
                    <Card.Title>Muhasibu mkuu</Card.Title>
                    <Card.Text>
                    <em><b>Hadhi: </b></em>Huyu ni msimamizi mkuu wa mali za Jumuiya  <br /> 
                    <em><b>Wajibu: </b></em>Wajibu wake ni kutenda kazi zake kwa kuzingatia taaluma yake ya Uhasibu na kuwa muaminifu kwa Mwenyezi Mungu.
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col>
                  <Card.Img variant="top" src="https://via.placeholder.com/150.png" />
                  <Card.Body>
                    <Card.Title>Amirat</Card.Title>
                    <Card.Text>
                    <em><b>Hadhi: </b></em>Huyu ndiye kiongozi wa juu wa kina mama. <br />Hivyo hadhi yake na wajibu wake ni sawa na ule wa Amiri .
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col>
                  <Card.Img variant="top" src="https://via.placeholder.com/150.png" />
                  <Card.Body>
                    <Card.Title>Naibu Amirat</Card.Title>
                    <Card.Text>
                      <em><b>Hadhi: </b></em>Huyu ni msaidizi wa Amirat. <br />Hivyo hadhi na wajibu wake ni sawa na ule wa Amirat.

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
