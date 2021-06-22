import React from 'react'
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
                      <li>Learning App</li>
                      <li>Tafsir ya Qur-an</li>
                    </ul>
                  </Col>
                  
                  <Col className="mt-2">
                  <span>Useful Links</span>
                    <ul>
                      <li>Necta</li>
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
