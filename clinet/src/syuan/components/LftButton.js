
// import logo from './logo.svg';

// 引入
import '../components/css/LftButton.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { useDispatch } from "react-redux";
import { filterType } from "../../redux/storesSlice";

function LftButton() {

    const dispatch = useDispatch();

    return (
        <div>
            <section className="Foodtype">
                <div className="FoodtypeGrid">
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <Button variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("小吃"))}>
                            小吃
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("燒烤"))}>
                            燒烤
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("炸物"))}>
                            炸物
                        </Button>
                    </div>
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("飲料"))}>
                            飲料
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("甜點"))}>
                            甜點
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("麵包"))}>
                            麵包
                        </Button>
                    </div>
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("熱炒"))}>
                            熱炒
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("禮盒"))}>
                            禮盒
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("素食"))}>
                            素食
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("壽司"))}>
                            壽司
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("丼飯"))}>
                            丼飯
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("吃到飽"))}>
                            吃到飽
                        </Button>
                    </div>
                    <div className="FoodtypeGrid_title">料理類型</div>
                </div>
            </section>

            {/* <hr /> */}

            <section className="Foodtype">
                <div className="FoodtypeGrid">
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("中式"))}>
                            中式
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("台式"))}>
                            台式
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("韓式"))}>
                            韓式
                        </Button>
                    </div>
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("日式"))}>
                            日式
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("泰式"))}>
                            泰式
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("印尼"))}>
                            印尼
                        </Button>
                    </div>
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("美式"))}>
                            美式
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("法式"))}>
                            法式
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("義式"))}>
                            義式
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("印度"))}>
                            印度
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("墨西哥"))}>
                            墨西哥
                        </Button>
                    </div>
                    <div>
                        <Button as={Link} variant="outline-warning"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterType("越南"))}>
                            越南
                        </Button>
                    </div>
                    <div className="FoodtypeGrid_title">餐廳類型</div>
                </div>
            </section>
        </div>
    );
}

export default LftButton;