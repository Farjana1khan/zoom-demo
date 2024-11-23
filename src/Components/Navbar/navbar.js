import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button, Row, Col } from 'react-bootstrap';

function App() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/counter">Counter</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="jumbotron">
                <h1>Hello From GFG!</h1>
                <p>This is a simple Example of using bootstrap in React.</p>
                <hr />
                <p>the Component is called jumbotron in bootstrap.</p>
                <h1>{counter}</h1>
                <Button onClick={handleClick} variant="primary">Click me</Button>
            </div>

            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1 style={{ color: "green" }}>GeeksforGeeks</h1>
                        <h3>React Bootstrap Form Text</h3>
                        <Form>
                            {/* Form fields here */}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default App;
