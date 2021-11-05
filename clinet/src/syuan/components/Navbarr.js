
// 照著影片版本做

// import logo from './logo.svg';

// 引入
import '../components/css/Navcss.css';
import { Container, Nav, Button, NavDropdown, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Navbarr() {
    return (
        <div>
            {/* <Router> */}
            <Container className="containerr">
                <Navbar bg="light" expand="lg" className="navheight">
                    <Container fluid className="navbgc">
                        <Navbar.Brand href="/" className="logoname" >餵for me</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0 navdropDown"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                {/* <Nav.Link as={Link} to={"/home"} className="navlink">home</Nav.Link> */}
                                <Link to='/page2' className="navbar-brand navlink navtype">
                                    類型篩選
                                </Link>
                                <Nav.Link as={Link} to={"/page2"} className="navlink">縣市篩選</Nav.Link>
                                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown> */}
                                <Nav.Link as={Link} to={"/page1"} className="navlink">會員登入
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex navdropDown">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-warning" className="navsearch navdropsearch">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>


            {/* </Router> */}
        </div>
    );
}


export default Navbarr;