import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container className="bg-info">
                <Row >
                    <Col className="text-center py-3">Copyright &copy; TechDomeTZ</Col>
                </Row>
                <Row>
                  <Col>
                    <span className="inline" >Links</span>
                    <ul>
                      <li>HISMS</li>
                      <li>HISMS</li>
                      <li>HISMS</li>
                    </ul>
                  </Col>
                  
                  <Col>
                  <span>Useful Links</span>
                    <ul>
                      <li>Necta</li>
                      <li>Nacte</li>
                      <li>MoEd</li>
                    </ul>
                  </Col>
                  <Col>
                  <h6>Login</h6>
                  <input />
                  <input />
                  <input className="btn btn-success" value="Login" />
                  </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
