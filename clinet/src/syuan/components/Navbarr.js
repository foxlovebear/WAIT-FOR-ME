
// 照著影片版本做

// import logo from './logo.svg';

// 引入
import '../components/css/Navcss.css';
import { Container, Nav, Button, NavDropdown, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/css/dropdown.css";
import { useDispatch } from "react-redux";
import { filterCity } from "../../redux/storesSlice";
import { filterType } from "../../redux/storesSlice";
import { search } from "../../redux/storesSlice";
import Axios from 'axios'; //處理POST

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Navbarr() {

    const dispatch = useDispatch();
    // 期翔會員驗證
    const userAuthenticated=()=>{
    Axios.get('http://localhost:3001/authYN',{
       headers:{"x-access-token":localStorage.getItem("token"),
      },
      // memberId:memberId,
    }).then((response)=>{
      if(response.data.auth == false){
        document.location.href="/login";
      }
      console.log(response);
      console.log(response.data.message);
      console.log(response.data.auth);
    })
  }
    // 期翔會員驗證END

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
                                {/* <Link to='/page2' className="navbar-brand navlink navtype">
                                    類型篩選1
                                </Link>
                                <Nav.Link as={Link} to={"/page2"} className="navlink">
                                    縣市篩選1
                                </Nav.Link> */}

                                <NavDropdown title="類型篩選" id="navbarScrollingDropdown">
                                    <NavDropdown.Item as={Link} to={"/page2"} className="dropitems">
                                        <div>料理類型</div>
                                        <button to="/page2" onClick={() => dispatch(filterType("小吃"))}>
                                            小吃
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("燒烤"))}>
                                            燒烤
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("炸物"))}>
                                            炸物
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("飲料"))}>
                                            飲料
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("甜點"))}>
                                            甜點
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("麵包"))}>
                                            麵包
                                        </button><br />
                                        <button to="/page2" onClick={() => dispatch(filterType("熱炒"))}>
                                            熱炒
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("禮盒"))}>
                                            禮盒
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("素食"))}>
                                            素食
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("壽司"))}>
                                            壽司
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("丼飯"))}>
                                            丼飯
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("吃到飽"))}>
                                            吃到飽
                                        </button><br />
                                        <div>餐廳類型</div>
                                        <button to="/page2" onClick={() => dispatch(filterType("中式"))}>
                                            中式
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("台式"))}>
                                            台式
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("韓式"))}>
                                            韓式
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("日式"))}>
                                            日式
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("泰式"))}>
                                            泰式
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("印尼"))}>
                                            印尼
                                        </button><br />
                                        <button to="/page2" onClick={() => dispatch(filterType("美式"))}>
                                            美式
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("法式"))}>
                                            法式
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("義式"))}>
                                            義式
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("印度"))}>
                                            印度
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("墨西哥"))}>
                                            墨西哥
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterType("越南"))}>
                                            越南
                                        </button>
                                    </NavDropdown.Item>
                                </NavDropdown>


                                <NavDropdown title="縣市篩選" id="navbarScrollingDropdown">
                                    <NavDropdown.Item as={Link} to={"/page2"} className="dropitems">
                                        <div>北部</div>
                                        <button to="/page2" onClick={() => dispatch(filterCity("臺北"))}>
                                            臺北
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("新北"))}>
                                            新北
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("基隆"))}>
                                            基隆
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("桃園"))}>
                                            桃園
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("新竹"))}>
                                            新竹
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("宜蘭"))}>
                                            宜蘭
                                        </button>
                                        <div>中部</div>
                                        <button to="/page2" onClick={() => dispatch(filterCity("苗栗"))}>
                                            苗栗
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("臺中"))}>
                                            臺中
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("彰化"))}>
                                            彰化
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("南投"))}>
                                            南投
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("雲林"))}>
                                            雲林
                                        </button>
                                        <div>南部</div>
                                        <button to="/page2" onClick={() => dispatch(filterCity("嘉義"))}>
                                            嘉義
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("臺南"))}>
                                            臺南
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("高雄"))}>
                                            高雄
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("屏東"))}>
                                            屏東
                                        </button>
                                        <div>東部</div>
                                        <button to="/page2" onClick={() => dispatch(filterCity("花蓮"))}>
                                            花蓮
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("臺東"))}>
                                            臺東
                                        </button>
                                        <div>離島</div>
                                        <button to="/page2" onClick={() => dispatch(filterCity("澎湖"))}>
                                            澎湖
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("綠島"))}>
                                            綠島
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("金門"))}>
                                            金門
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("蘭嶼"))}>
                                            蘭嶼
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("馬祖"))}>
                                            馬祖
                                        </button>
                                        <button to="/page2" onClick={() => dispatch(filterCity("小琉球"))}>
                                            小琉球
                                        </button>
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

{/* --------------------------------------CHI期翔------------------------------------------ */}

                                <NavDropdown title="會員功能" id="navbarScrollingDropdown">
                                    <NavDropdown.Item as={Link} to={"/login"} className="dropitems">
                                        <button>會員登入</button>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/memberpage"} onClick={userAuthenticated} className="dropitems">
                                        <button>會員頁</button>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/"} onClick= {()=>{localStorage.clear();}} className="dropitems">
                                        <button>登出</button>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                {/* <Nav.Link as={Link} to={"/page1"} className="navlink">會員功能1
                                </Nav.Link> */}

{/* --------------------------------------CHI期翔END------------------------------------------ */}
                            </Nav>

                            {/* 搜尋按鈕 */}
                            <Form className="d-flex navdropDown">
                                {/* <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-warning" className="navsearch navdropsearch">Search</Button> */}

                                <input
                                    type="text"
                                    id="search"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            document.getElementById("btn").click();
                                        }
                                    }}
                                    placeholder="Search All..."
                                />
                                <Link to="/page2">
                                    <Button
                                        variant="outline-warning"
                                        className=" navsearch navdropsearch"
                                        id="btn"
                                        onClick={() => {
                                            const keyword = document.getElementById("search").value; //要包在裏面，不然react很嚴格會報錯
                                            dispatch(search(keyword));
                                            document.getElementById("search").value = ""; //clean input
                                        }} //11/7改enter送出
                                    >
                                        search
                                    </Button>
                                </Link>

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


