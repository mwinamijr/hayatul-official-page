import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Row, Col, Card } from 'react-bootstrap'

function LongerPost() {
    return (
        <div>
            <div className="p-4 p-md-5 mb-4 text-black rounded bg-light">
            <Link to="/blogu/" className='btn btn-light my-3'>Go Back</Link>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 px-0">
                    <h1 className="display-4 fst-italic">Mpango kazi wa Hayatul Islamiya Complex hadi 2050</h1>
                    <p className="lead my-3"><b>"Alhamdulillah, tunasonga mbele"</b> kwa neema zake Allah (S.W) kwani katika safari yetu hii ya kuihudumia jamii tunaendelea kupiga hatua kila siku 
                      kuelekea katika malengo ya <i>kuumbwa kwetu<b>(Qur-an 51:56)</b></i>. 
                      </p>
                      <Row>
                      <Col md={6}>
                        <Card>
                            <Card.Img variant="top" src="images/secondary002.png" />
                        </Card>
                        </Col>
                        <Col md={6}>
                        <Card>
                            <Card.Img variant="top" src="images/secondary004.png" />
                            
                        </Card>
                        </Col>
                      </Row>
                      <p>
                      <h4>Jiunge Nasi</h4>
                      katika kuihudumia jamii wanataasisi na wanajumiya ya Hayatul Islamiya Complex wanajitolea mali zao, nguvu zao na Afya zao katika kuiendeleza mbele dini ya Allah(S.W.) 
                      huku tukitaraji malipo makubwa mbele yake siku mwisho Inshaallah.
                      <br /><a href="jiunge-hic">Bonyeza hapa Kwa maelezo zaidi jinsi ya kujiunga na Jumuiya ya Hayatul Islamiya</a>
                    </p>
                    <h4>Mikakati yetu (tulipotoka na Tunapoelekea)</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Mpango kazi</th>
                            <th>Muda</th>
                            <th>Gharama</th>
                            <th>Tayari</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ujenzi wa shule ya sekondari - O-LEVEL</td>
                                <td>2010 - 2014</td>
                                <td className="text-muted"><small>895,000,000</small></td>
                                <td className='bg-success text-center'>done</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ujenzi wa shule ya sekondari - A - LEVEL</td>
                                <td>2015 - 2018</td>
                                <td className="text-muted"><small>610,000,000</small></td>
                                <td className='bg-success text-center'>done</td>  
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Ujenzi wa Nyumba za walimu</td>
                                <td>2018 - 2020</td>
                                <td className="text-muted"><small>1,000,000,000</small></td>
                                <td className='bg-warning text-center'>in progress</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Ujenzi wa Kituo cha Afya</td>
                                <td>2021 - 2022</td>
                                <td className="text-muted"><small>100,000,000</small></td>
                                <td className='bg-warning text-center'>v</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Ujenzi wa Chuo Cha ufundi stadi</td>
                                <td>2013 - 2025</td>
                                <td className="text-muted"><small>550,000,000</small></td>
                                <td className='bg-danger text-center'>x</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Ujenzi wa Chuo Kikuu cha matabibu</td>
                                <td>2025 - 2030</td>
                                <td className="text-muted"><small>600,000,000</small></td>
                                <td className='bg-danger text-center'>x</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Ujenzi wa Chuo kikuu cha sayansi</td>
                                <td>2030 - 2040</td>
                                <td className="text-muted"><small>2,000,000,000</small></td>
                                <td className='bg-danger text-center'>x</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Ujenzi Hospitali ya kisasa</td>
                                <td>2040 - 2050</td>
                                <td className="text-muted"><small>5,000,000,000</small></td>
                                <td className='bg-danger text-center'>x</td>
                            </tr>
                        </tbody>
                        </Table>
                    
                </div>
            </div>
            <h3 className="text-center">
              Changia ujenzi wa Hayatul Islamiya Complex Health Cente: <br />
              <span className="text-center text-info">    BENKI NBC: 072206006583 JINA: UJENZI WA KITUO CHA AFYA HIC;   </span> <br />
              <span className="text-warning">    Halo Pesa: 0622 977 536  Jina: Husseni Mwinami</span>
              </h3>
            </div>
        </div>
    )
}

export default LongerPost
