
// 照著影片版本做

// import logo from './logo.svg';

// 引入
import '../components/css/Navcss.css';
import { Container, Nav, Button, NavDropdown, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/css/dropdown.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Navbarr() {
    const a = () => {
        alert("ok");
    }

    const b = () => {
        alert("ok1");
    }

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


                                <NavDropdown title="類型篩選" id="navbarScrollingDropdown">

                                    <NavDropdown.Item as={Link} to={"/page2"} className="dropitems">
                                        <div>料理類型</div>
                                        <button onClick={a}>小吃</button>
                                        <button onClick={b}>燒烤</button>
                                        <button>炸物</button>
                                        <button>飲料</button>
                                        <button>甜點</button>
                                        <button>麵包</button><br />
                                        <button>熱炒</button>
                                        <button>禮盒</button>
                                        <button>素食</button>
                                        <button>壽司</button>
                                        <button>丼飯</button>
                                        <button>buffet</button><br />
                                        <div>餐廳類型</div>
                                        <button>中式</button>
                                        <button>台式</button>
                                        <button>韓式</button>
                                        <button>日式</button>
                                        <button>泰式</button>
                                        <button>印尼</button><br />
                                        <button>美式</button>
                                        <button>法式</button>
                                        <button>義式</button>
                                        <button>印度</button>
                                        <button>墨西哥</button>
                                        <button>越南</button>
                                    </NavDropdown.Item>
                                </NavDropdown>


                                <NavDropdown title="縣市篩選" id="navbarScrollingDropdown">
                                    <NavDropdown.Item as={Link} to={"/page2"} className="dropitems">
                                        <div>北部</div>
                                        <button>臺北</button>
                                        <button>新北</button>
                                        <button>基隆</button>
                                        <button>桃園</button>
                                        <button>新竹</button>
                                        <button>宜蘭</button>
                                        <div>中部</div>
                                        <button>苗栗</button>
                                        <button>臺中</button>
                                        <button>彰化</button>
                                        <button>南投</button>
                                        <button>雲林</button>
                                        <div>南部</div>
                                        <button>嘉義</button>
                                        <button>臺南</button>
                                        <button>高雄</button>
                                        <button>屏東</button>
                                        <div>東部</div>
                                        <button>花蓮</button>
                                        <button>臺東</button>
                                        <div>離島</div>
                                        <button>澎湖</button>
                                        <button>金門</button>
                                        <button>連江</button>
                                        <button>小琉球</button>
                                    </NavDropdown.Item>

                                    {/* 範本：易軒用這個邏輯去寫，我改樣式 */}
                                    {/* <NavDropdown.Item as={Link} to={"/page2"}>
                                        <button onClick={a} variant="outline-warning">小吃</button>
                                    </NavDropdown.Item> */}

                                    {/* dropdown原檔備用 */}
                                    {/* <NavDropdown.Item as={Link} to={"/page2"}>
                                        Another action
                                    </NavDropdown.Item> */}
                                    {/* <NavDropdown.Divider /> */}
                                    {/* <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item> */}
                                </NavDropdown>


                                <NavDropdown title="會員" as={Link} to={"/page2"} id="navbarScrollingDropdown">
                                    <NavDropdown.Item as={Link} to={"/page3"} className="dropitems">
                                        <button>臺北</button>
                                    </NavDropdown.Item>
                                </NavDropdown>



                                <Nav.Link as={Link} to={"/page1"} className="navlink">會員功能
                                </Nav.Link>


                            </Nav>

                            {/* 搜尋按鈕 */}
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