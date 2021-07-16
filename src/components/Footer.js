import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

function Footer() {

    return (
        <footer className="bg-hayatul">
            <Container className="">
                
                <Row>
                  <Col md={4} className="mt-2">
                    <h6 className="text-white text-center">Links</h6>
                    <ul>
                      <Button variant="light" block><Link to="/login">HISMS</Link></Button>
                      <Button variant="light" block><Link to="/learn">Learn with Us!</Link></Button>
                      <Button variant="light" block><Link to="/tafsir-quran">Tafsiri ya Qur-an</Link></Button>
                      <Button variant="light" block>Technology</Button>
                    </ul>
                  </Col>
                  
                  <Col md={4} className="mt-2">
                  <h6 className="text-white text-center">Useful Links</h6>
                    <ul>
                      <li className="mb-2">
                      <a target="_blank" rel="noreferrer" href="https://www.necta.go.tz"><Button variant="light" block>Necta</Button></a>
                      </li>
                      <li className="mb-2">
                      <a target="_blank" rel="noreferrer" href="https://www.nacte.go.tz"><Button variant="light" block>Nacte</Button></a>
                      </li>
                      <li className="mb-2">
                      <a target="_blank" rel="noreferrer" href="https://www.moe.go.tz"><Button variant="light" block>MoE</Button></a>
                      </li>
                      <li className="mb-2">
                      <a target="_blank" rel="noreferrer" href="https://www.moh.go.tz"><Button variant="light" block>MoH</Button></a>
                      </li>
                    </ul>
                  </Col>
                  <Col md={4} className="mt-2">
                    <div>

                      <h6 className="text-white text-center">Follow Us!</h6>
                      <ol className="list-unstyled">
                        <li className="mb-2"><a href="https://youtube.com/hayatulislamiya" target="_blank" rel="noreferrer"><Button variant="light" block>Youtube</Button></a></li>
                        <li className="mb-2"><a href="https://facebook.com/hayatulislamiya" target="_blank" rel="noreferrer"><Button variant="light" block>Facebook</Button></a></li>
                        <li className="mb-2"><a href="https://instagram.com/hayatulislamiya" target="_blank" rel="noreferrer"><Button variant="light" block>Instagram</Button></a></li>
                        <li className="mb-2"><a href="https://twitter.com/hayatulislamiya" target="_blank" rel="noreferrer"><Button variant="light" block>Twitter</Button></a></li>
                      </ol>
                    </div>
                  </Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; TechDomeTZ</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
