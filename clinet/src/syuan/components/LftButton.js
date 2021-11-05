
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

function LftButton() {

    return (
        <div>
            <section className="Foodtype">
                <div className="FoodtypeGrid">
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <Button as={Link} to={"/Page2"} variant="outline-warning">小吃</Button>
                    </div>
                    <div>
                        <Button as={Link} to={"/foodtypePage"} variant="outline-warning">燒烤</Button>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">炸物</button>
                        </a>
                    </div>
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">飲料</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">甜點</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">麵包</button>
                        </a>
                    </div>
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">熱炒</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">禮盒</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">素食</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">壽司</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">丼飯</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">buffet</button>
                        </a>
                    </div>
                    <div className="FoodtypeGrid_title">料理類型</div>
                </div>
            </section>

            {/* <hr /> */}

            <section className="Foodtype">
                <div className="FoodtypeGrid">
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <Button as={Link} to={"/foodtypePage"} variant="outline-warning">中式</Button>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">台式</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">韓式</button>
                        </a>
                    </div>
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">日式</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">泰式</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">印尼</button>
                        </a>
                    </div>
                    <div className="FoodtypeGrid_title"></div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">美式</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">法式</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">義式</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">印度</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">墨西哥</button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-warning">越南</button>
                        </a>
                    </div>
                    <div className="FoodtypeGrid_title">餐廳類型</div>
                </div>
            </section>
        </div>
    );
}

export default LftButton;