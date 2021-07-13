import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

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
                      <p>
                      <h4>Jiunge Nasi</h4>
                      katika kuihudumia jamii wanataasisi na wanajumiya ya Hayatul Islamiya Complex wanajitolea mali zao, nguvu zao na Afya zao katika kuiendeleza mbele dini ya Allah(S.W.) 
                      huku tukitaraji malipo makubwa mbele yake siku mwisho Inshaallah.
                      <br /><a href="#">Bonyeza hapa Kwa maelezo zaidi jinsi ya kujiunga na Jumuiya ya Hayatul Islamiya</a>
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
                                <td className="text-muted"><small>cost will be updated</small></td>
                                <td className='bg-success text-center'>v</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ujenzi wa shule ya sekondari - A - LEVEL</td>
                                <td>2015 - 2018</td>
                                <td className="text-muted"><small>cost will be updated</small></td>
                                <td className='bg-success text-center'>v</td>  
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Ujenzi wa Nyumba za walimu</td>
                                <td>2018 - 2020</td>
                                <td className="text-muted"><small>est will be updated</small></td>
                                <td className='bg-success text-center'>v</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Ujenzi wa Kituo cha Afya</td>
                                <td>2021 - 2022</td>
                                <td className="text-muted"><small>est will be updated</small></td>
                                <td className='bg-warning text-center'>v</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Ujenzi wa Chuo Cha ufundi</td>
                                <td>2013 - 2025</td>
                                <td className="text-muted"><small>est will be updated</small></td>
                                <td className='bg-danger text-center'>x</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Ujenzi wa Chuo Kikuu cha Kiislamu</td>
                                <td>2030 - 2040</td>
                                <td className="text-muted"><small>est will be updated</small></td>
                                <td className='bg-danger text-center'>x</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Ujenzi wa Hospitali Kubwa</td>
                                <td>2040 - 2050</td>
                                <td className="text-muted"><small>est will be updated</small></td>
                                <td className='bg-danger text-center'>x</td>
                            </tr>
                        </tbody>
                        </Table>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default LongerPost
