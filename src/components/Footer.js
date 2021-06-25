import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="bg-secondary">
            <Container className="">
                
                <Row>
                  <Col className="mt-2">
                    <span>Links</span>
                    <ul>
                      <li>HISMS</li>
                      <li>Learn with Us!</li>
                      <li>Tafsiri ya Qur-an</li>
                    </ul>
                  </Col>
                  
                  <Col className="mt-2">
                  <span>Useful Links</span>
                    <ul>
                      <li><Link to="https://www.necta.go.tz">Necta</Link></li>
                      <li>Nacte</li>
                      <li>MoEd</li>
                    </ul>
                  </Col>
                  <Col className="mt-2">
                  <h6>Login</h6>
                  <input />
                  <input />
                  <input className="btn btn-info" value="Login" />
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
