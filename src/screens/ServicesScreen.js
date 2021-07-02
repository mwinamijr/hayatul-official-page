import React from 'react'
import { Row, Col, Card, Table } from 'react-bootstrap'


function ServicesScreen() {
    return (
    <div>
      <Card className="mb-2">
        <Card.Header><h3 className=" text-center display-4 fw-normal">Elimu</h3></Card.Header>
        <Card.Body>
          <Card.Title>Utangulizi</Card.Title>
          Shule yetu inatoa elimu kwa watoto wote bila ubaguzi wa aina yeyote. Shule zetu zinaruhusu wanafunzi <strong>wa dini zote bila kujali dhehebu.</strong> <br />
          Pamoja na kuruhusu uwepo wa wanafunzi wa dini zote, shule zetu zote <strong>zinaongozwa kwa kufuata taratibu na misingi yote ya dini ya kiislamu</strong>. Taratibu hizi
          zinajumuisha <i>wanafunzi, waalimu na wafanyakazi wote</i> wanaopatikana katika mazingira ya Hayatul Islamiya
          
        </Card.Body>
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

      <Card className="mb-2">
        <Card.Header>
          <h3 className=" text-center display-4 fw-normal">Afya</h3>
        </Card.Header>
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

      <Card className="mb-2">
        <Card.Header>
          <h3 className=" text-center display-4 fw-normal">QT na Resitors</h3>
        </Card.Header>
        <Card.Body>
        <Card.Title>QT</Card.Title>
        <Card.Text>
            Kwa wale wote wanaohitaji kusoma kwa njia isiyo rasmi, Shule  za Hayatul zinatoa nafasi ya kurudia, kusoma na kituo cha kufanyia mitihani hiyo.
            Huduma hii ni kwa wanafunzi au yeyote anayehitaji sehemu ambayo atasoma na kufanya mitihani yake.
            <h6>Mitihani inayotolewa</h6>
            <ul>
              <li>Qualifying Test (QT)</li>
              <li>Kidato cha Nne (CSEE)</li>
              <li>Kidato cha sita (ACSEE)</li>
            </ul>
        </Card.Text>
        </Card.Body>
        
        <Card.Body>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h3 className="display-4 fw-normal">Gharama zetu</h3>
            <p className="fs-5 text-muted">
              Gharama za kituo ni kama ifuatavyo <br />
              <em>(Gharama za mtihani zinalipiwa BARAZA la Mitihani wakati wa kujisajili )</em>
            </p>
          </div>
        <Card.Text>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">QT</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title"><small>Tsh 20000/-</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Gharama ya kituo</li>
                    <li>(Fedha ya mtihani inalipwa peke yake - NECTA)</li>
                    <li><i><b>Ths 20,000/-</b></i></li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-primary">Wasiliana nasi</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Arts</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title"><small>Tsh 30000/-</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                  <li>Gharama ya kituo</li>
                    <li>(Fedha ya mtihani inalipwa peke yake - NECTA)</li>
                    <li><i><b>Ths 50,000/-</b></i></li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-primary">Wasiliana nasi</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Science</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title"><small>Tsh 50000/-</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                  <li>Gharama ya kituo + Practicals</li>
                    <li>(Fedha ya mtihani inalipwa peke yake - NECTA)</li>
                    <li><i><b>Ths 50,000/-</b></i></li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-primary">Wasiliana nasi</button>
                </div>
              </div>
            </div>
          </div>
        </Card.Text>
        <Card.Text>
          
          <h2 className="display-6 text-center mb-4">JUMLA YA GHARAMA</h2>

          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th ></th>
                  <th >QT</th>
                  <th >Arts</th>
                  <th >Science</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-start">Jumla</th>
                  <td>Tsh 40,000/-</td>
                  <td>Tsh 80,000/-</td>
                  <td>Tsh 100,000/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Text>
        </Card.Body>

      </Card>
    </div>
    )
}

export default ServicesScreen
