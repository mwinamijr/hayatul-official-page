import React from 'react'
import { Row, Col, Card, Image, CardColumns } from 'react-bootstrap'


function PrimaryScreen() {
    return (
      <div>
        <div className="px-4 my-5 text-center border-bottom">
          <h3 className="display-4 fw-bold">Shule ya Msingi Hayatul Islamiya(HISM)</h3>
          <div className="col-lg-8 mx-auto">
            <p className="lead mb-4">
            Shule ya Msingi Hayatul islamiya ni shule bora kabisa inayofundisha, kuwajenga na kuwaandaa watoto kuwa tayari kuendelea elimu yao ya sekondari kwa mafanikio makubwa.
                Kama ilivyo katika dhamira yetu, tunawalea na kwafundisha watoto wetu kwa <b>misingi na taratibu za dini ya kiislamu.</b> <br />
              </p>
              <p className="text-white rounded bg-dark">
                <strong>Lugha yetu kuu ya kufundishia ni <em>Kiswahili</em></strong>

              </p>
          </div>
        </div>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src="http://127.0.0.1:8000/images/nursery/20201128_091608.jpg" />
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
                    Ili kupata vijana waliokuwa bora na wanaomcha Allah(s.w) malezi yanachukua nafasi kubwa katika kuwajenga watoto wetu.
                    Kuanzia katika umri mdogo kabisa watoto wetu wanafundishwa na kulelewa katika malezi, misingi na taratibu za dini ya kiislamu ili waweze 
                    kuyazoea maisha hayo na kuyafanya ni sehemu ya maisha yao ya kila siku. <br />
                    Malezi hayo yanahusisha mifumo yote ya maisha :-
                  </Card.Text>
                  <Card.Text>
                    <ul>
                      <li>Maisha ya kiislamu</li>
                      <li>Ibada za kiislamu</li>
                      <li>Mavazi ya kiislamu wawapo shuleni na nyumbani</li>
                      <li>Tamaduni mbali mbali za kiislamu</li>
                      <li>Dua na Adh-kar mbalimbali</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Masomo</Card.Title>
                  <Card.Text>
                      Katika kutoa elimu na ujuzi masomo yote yana umuhimu sawa ili kujenga jamii iliyoelimika na yenye <strong>kumuogopa na Kumcha Mwenyezi Mungu kikweli kweli</strong> <br />
                      Hivyo shule zetu zinafundisha <strong><i>Masomo ya dini</i></strong> kama masomo mengine na kwa kufuata mitaala inayotambuliwa na serikali katika utoaji a elimu.
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
              <Row>
                <Col>
                  <ol>
                    <li>Elimu ya dini ya Kiislamu</li>
                    <li>Lugha ya Kiarabu</li>
                    <li>Qur-an Tajweed</li>
                    <li>Hifdhul Qur-an</li>
                  </ol>
                </Col>
                <Col>
                  <ol>
                    <li>Hesabu</li>
                    <li>Sayansi</li>
                    <li>English language</li>
                    <li>Kiwswahili</li>
                    <li>Maarifa ya Jamiii(Uraia, Historia na Jiografia)</li>
                  </ol>
                </Col>
              </Row>
            </Card.Body>
            
          </Card>
      </div>
    )
}

export default PrimaryScreen
