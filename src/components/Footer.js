import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { login } from '../store/actions/userActions'

function Footer({ location, history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const redirect =  '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo} = userLogin
    
    
    useEffect(() => {
      if (userInfo) {
        history.push(redirect)
      }
    }, [history, userInfo, redirect])
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(login(email, password))
    }


    return (
        <footer className="bg-hayatul">
            <Container className="">
                
                <Row>
                  <Col md={4} className="mt-2">
                    <h6 className="text-white text-center">Links</h6>
                    <ul>
                      <Button variant="light" block><Link to="/login">HISMS</Link></Button>
                      <Button variant="light" block>Learn with Us!</Button>
                      <Button variant="light" block>Tafsiri ya Qur-an</Button>
                    </ul>
                  </Col>
                  
                  <Col md={4} className="mt-2">
                  <h6 className="text-white text-center">Useful Links</h6>
                    <ul>
                      <li className="mb-2">
                      <a target="_blank" href="https://www.necta.go.tz"><Button variant="light" block>Necta</Button></a>
                      </li>
                      <li className="mb-2">
                      <a target="_blank" href="https://www.nacte.go.tz"><Button variant="light" block>Nacte</Button></a>
                      </li>
                      <li className="mb-2">
                      <a target="_blank" href="https://www.moe.go.tz"><Button variant="light" block>MoE</Button></a>
                      </li>
                    </ul>
                  </Col>
                  <Col md={4} className="mt-2">
                  <h6 className="text-white text-center">Login</h6>
                  <FormContainer> 
                    <Form onSubmit={submitHandler}>

                      <Form.Group controlId='email'>
                          <Form.Control
                              type='email'
                              placeholder='Enter Email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                          >
                          </Form.Control>
                      </Form.Group>


                      <Form.Group controlId='password'>
                          <Form.Control
                              type='password'
                              placeholder='Enter Password'
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              
                          >
                          </Form.Control>
                      </Form.Group>
                      <Button type="submit" variant="light" block>Login</Button>
                    </Form>
                  </FormContainer>
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
