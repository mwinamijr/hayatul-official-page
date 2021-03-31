import React from 'react'
import { Row, Col, Card, Table } from 'react-bootstrap'


function ServicesScreen() {
    return (
    <div>
      <Card className="mb-2">
        <Card.Header>Elimu</Card.Header>
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
        <Card.Header>Afya</Card.Header>
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
        <Card.Header>QT na Resitors</Card.Header>
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
        <Card.Title>Gharama za kituo</Card.Title>
        <Card.Text>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Masomo ya Sayansi</td>
              <td>Tsh 50,000</td>
            </tr>
            <tr>
              <td>Masomo ya Sanaa</td>
              <td>Tsh 30,000</td>
              
            </tr>
          </tbody>
        </Table>
        </Card.Text>
        </Card.Body>
      </Card>
    </div>
    )
}

export default ServicesScreen
