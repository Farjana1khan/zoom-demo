// import React, { useState } from 'react';
// import { Col, Container, Form, Row } from 'react-bootstrap';

// function App() {
//     const [counter, setCounter] = useState(0);

//     const handleClick = () => {
//         console.log("hi");
       
//         setCounter(prevCounter => prevCounter + 1);
//     };

//     return (
// //         <div>
        
// //         <div class="container-xl">

// //         <nav class="navbar navbar-expand-lg bg-body-tertiary">
// //   <div class="container-fluid">
// //     <a class="navbar-brand" href="/#">Navbar</a>

  
// //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //       <span class="navbar-toggler-icon"></span>
// //     </button>
// //     <div class="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
// //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
// //         <li class="nav-item">
// //           <a class="nav-link active" aria-current="page" href="/#">Home</a>
// //         </li>
// //         <li class="nav-item">
// //           <a class="nav-link" href="/#">Link</a>
// //         </li>
// //         <li class="nav-item dropdown">
// //           <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
// //             Dropdown
// //           </a>
// //           <ul class="dropdown-menu">
// //             <li><a class="dropdown-item" href="/#">Action</a></li>
// //             <li><a class="dropdown-item" href="/#">Another action</a></li>
// //             <li><hr class="dropdown-divider" /></li>
// //             <li><a class="dropdown-item" href="/#">Something else here</a></li>
// //           </ul>
// //         </li>
       
// //       </ul>
// //       {/* <form class="d-flex" role="search">
// //         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
// //         <button class="btn btn-outline-success" type="submit">Search</button>
// //       </form> */}
// //     </div>
// //   </div>
// // </nav>

// //         </div>
// //             <div className="jumbotron container">
// //                 <h1 className="display-4">Hello From GFG!</h1>
// //                 <p className="lead">This is a simple Example of using bootstrap in React.</p>
// //                 <hr className="my-4" />
// //                 <p>the Component is called jumbotron in bootstrap.</p>
// //                 <h1>{counter}</h1>
// //                 <p className="lead">
// //                     <a
// //                         onClick={handleClick} // Corrected here
// //                         className="btn btn-primary btn-lg" href="/#"
// //                         role="button">Click me</a>
// //                 </p>
// //             </div>
// //             <Container className="mt-5">
// //             <Row>
// //                 <Col md={{ span: 6, offset: 3 }}>
// //                     <h1
// //                         style={{
// //                             color: "green",
// //                         }}
// //                     >
// //                         GeeksforGeeks
// //                     </h1>
// //                     <h3>React Bootstrap Form Text</h3>
// //                     <Form>
// //                         <Form.Group controlId="username">
// //                             <Form.Label>Username</Form.Label>
// //                             <Form.Control
// //                                 type="text"
// //                                 placeholder="Enter your username"
// //                             />
// //                             <Form.Text
// //                                 id="usernameHelp"
// //                                 className="text-muted"
// //                                 bsPrefix="geeks-form-text"
// //                                 as="span"
// //                             >
// //                                 Enter Your Name Geek
// //                             </Form.Text>
// //                         </Form.Group>
// //                         <Form.Group controlId="password">
// //                             <Form.Label>Password</Form.Label>
// //                             <Form.Control
// //                                 type="password"
// //                                 placeholder="Enter your password"
// //                             />
// //                             <Form.Text
// //                                 id="passwordHelp"
// //                                 className="text-danger"
// //                                 plaintext
// //                             >
// //                                 Hey Geek! Your password should be secure and
// //                                 unique.
// //                             </Form.Text>
// //                         </Form.Group>
// //                         <Form.Group controlId="email">
// //                             <Form.Label>Email</Form.Label>
// //                             <Form.Control
// //                                 type="email"
// //                                 placeholder="Enter your email"
// //                             />
// //                             <Form.Text
// //                                 id="emailHelp"
// //                                 className="geeks-form-text"
// //                             >
// //                                 Hello Geek! We will send important updates to
// //                                 your email.
// //                             </Form.Text>
// //                         </Form.Group>
// //                     </Form>
// //                 </Col>
// //             </Row>

            
// //         </Container>

// //         <Container className=" mt-6" >
// //         <div class="container text-center">
// //   <div class="row">
// //     <div class="col">
// //       Column
// //     </div>
// //     <div class="col">
// //       Column
// //     </div>
// //     <div class="col">
// //       Column
// //     </div>
// //   </div>
// // </div>
// //         </Container>
// //   <Container>
// //     <div>
// //     <img src="data:image/jpeg;base64,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" class="rounded float-start" alt="..." />
// // <img src="data:image/jpeg;base64,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" class="rounded float-end" alt="..." />
// //     </div>
// //   </Container>
//         // </div>

//         import React, { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Container, Form, Button, Row, Col } from 'react-bootstrap';

// function App() {
//     const [counter, setCounter] = useState(0);

//     const handleClick = () => {
//         setCounter(prevCounter => prevCounter + 1);
//     };

//     return (
//         <Container>
//             <Navbar bg="light" expand="lg">
//                 <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link href="/home">Home</Nav.Link>
//                         <Nav.Link href="#link">Link</Nav.Link>
//                         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>

//             <div className="jumbotron">
//                 <h1>Hello From GFG!</h1>
//                 <p>This is a simple Example of using bootstrap in React.</p>
//                 <hr />
//                 <p>the Component is called jumbotron in bootstrap.</p>
//                 <h1>{counter}</h1>
//                 <Button onClick={handleClick} variant="primary">Click me</Button>
//             </div>

//             <Container className="mt-5">
//                 <Row>
//                     <Col md={{ span: 6, offset: 3 }}>
//                         <h1 style={{ color: "green" }}>GeeksforGeeks</h1>
//                         <h3>React Bootstrap Form Text</h3>
//                         <Form>
//                             {/* Form fields here */}
//                         </Form>
//                     </Col>
//                 </Row>
//             </Container>
//         </Container>
//     );
// }

// export default App;

import React, { Component } from 'react'

export class counter extends Component {
  render() {
    return (
      <div>
        <h1>dlkslkfldskgldfkgl,dfh</h1>
      </div>
    )
  }
}

export default counter
