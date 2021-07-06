import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'

function Header() {

    const logoutHandler = () => (
        console.log("logout")
    )
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Hayatul</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="mr-auto">

                            <LinkContainer to='/'>
                                <Nav.Link >Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <Nav.Link >Kuhusu</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/services'>
                                <Nav.Link >Huduma</Nav.Link>
                            </LinkContainer>

                            
                                <NavDropdown title="Elimu" id='username'>
                                    <LinkContainer to='/education/nursery'>
                                        <NavDropdown.Item>Awali</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/education/primary'>
                                        <NavDropdown.Item>Msingi</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/education/secondary'>
                                        <NavDropdown.Item>Sekondari</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            
                                    <LinkContainer to='/health'>
                                        <Nav.Link>Afya</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/blogu'>
                                        <Nav.Link>Blogu</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/gallery'>
                                        <Nav.Link>Picha</Nav.Link>
                                    </LinkContainer>
                                    
                        </Nav>
                        <SearchBox /> 
                        <Nav>

                            <LinkContainer to='/contact-us'>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Wasiliana</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header

//<NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>