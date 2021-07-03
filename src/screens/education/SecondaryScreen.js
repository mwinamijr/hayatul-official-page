import React from 'react'
import { Row, Col, Card, Image, CardColumns } from 'react-bootstrap'


function SecondaryScreen() {
    return (
      <div>
        <div className="px-4 my-5 text-center border-bottom">
          <h3 className="display-4 fw-bold">Hayatul Islamiya Secondary School(HIHS)</h3>
          <div className="col-lg-8 mx-auto">
            <p className="lead mb-4">
              Hayatul Islamiya Secondary School ni shule inayotoa elimu bora kwa gharama nafuu kabisa. Kama zilivyo shule zote za Hayatul Islamiya, shule hii pia inatoa 
              elimu na mafunzo yote kwa kuzingatia <b>misingi na taratibu za dini ya kiislamu.</b> <br />
            </p>
            <p className="text-white rounded bg-dark">
                <h5 className="display-4 fw-bold">Form One - Form Six</h5>
                <h5 className="text-center text-danger">Shule ni ya Bweni na kutwa</h5>
              </p>
          </div>
        </div>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Img variant="top" src="http://127.0.0.1:8000/images/nursery/20201128_091608.jpg" />
                <Card.Body>
                <Card.Text className="text-center">
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
              <hr />
            <Col md={6}>
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
                    <ul className="text-info">
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
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Michezo</Card.Title>
                  <Card.Text>
                  Katika kutoa elimu na ujuzi masomo yote yana umuhimu sawa ili kujenga jamii iliyoelimika na yenye <strong>kumuogopa na Kumcha Mwenyezi Mungu kikweli kweli</strong> <br />
                      Hivyo shule zetu zinafundisha <strong><i>Masomo ya dini</i></strong> kama masomo mengine na kwa kufuata mitaala inayotambuliwa na serikali katika utoaji a elimu.
                  </Card.Text>
                  <Card.Text className="text-success">
                    Masomo ya dini yanapewa kipaumbele cha hali ya juu ili kuwaandaa watoto wetu kama raia wema wanaomugopa na kumcha Allah (s.w.)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
              <Col md={6}>
                <Card>
                  <Card.Body>
                  <Card.Text className="text-center">
                      This is a longer card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                  </Card.Text>
                  </Card.Body>
                  <Card.Img variant="top" src="http://127.0.0.1:8000/images/nursery/20201128_091608.jpg" />
                </Card>
              </Col>
              
          </Row>
          <br />
          <Card className="mb-2" border="warning">
            <Card.Header>Masomo wanayojifunza O-Level</Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <ol>
                    <li>Elimu ya dini ya Kiislamu</li>
                    <li>Lugha ya Kiarabu</li>
                    <li>Qur-an Tajweed</li>
                    <li>Hifdhul Qur-an</li>
                  </ol>
                </Col>
                <Col md={4}>
                  <ol>
                    <li>Basic Mathematics</li>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Biology</li>
                  </ol>
                </Col>
                <Col md={4}>
                  <ol>
                    <li>English</li>
                    <li>Kiswahili</li>
                    <li>History</li>
                    <li>Geography</li>
                    <li>Civics</li>
                  </ol>
                </Col>
              </Row>
            </Card.Body>
            
          </Card>
          <br />
          <Card className="mb-2" border="info">
            <Card.Header>Combination za A-Level</Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <ol>
                    <li>PCM</li>
                    <li>PCB</li>
                    <li>PGM</li>
                    <li>EGM</li>
                  </ol>
                </Col>
                <Col md={4}>
                  <ol>
                    <li>HGL</li>
                    <li>HKL</li>
                    <li>HGK</li>
                    <li>HGE</li>
                    <li>KLA</li>
                  </ol>
                </Col>
              </Row>
            </Card.Body>
            
          </Card>
      </div>
    )
}

export default SecondaryScreen
