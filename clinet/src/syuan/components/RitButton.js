
// import logo from './logo.svg';

// 引入
import '../components/css/RitButton.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { useDispatch } from "react-redux";
import { filterCity } from "../../redux/storesSlice";

function RitButton() {

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <section className="Citytype">
                <div className="CitytypeGrid">
                    <div className="Citytype_section" style={{ top: '50px' }}>北部</div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("臺北"))}>
                            臺北
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("新北"))}>
                            新北
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("基隆"))}>
                            基隆
                        </Button>
                    </div>
                    <div className="Citytype_section"></div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("桃園"))}>
                            桃園
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("新竹"))}>
                            新竹
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("宜蘭"))}>
                            宜蘭
                        </Button>
                    </div>
                </div>
            </section><br />

            <section className="Citytype">
                <div className="CitytypeGrid">
                    <div className="Citytype_section" style={{ top: '50px' }}>中部</div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("苗栗"))}>
                            苗栗
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("臺中"))}>
                            臺中
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("彰化"))}>
                            彰化
                        </Button>
                    </div>
                    <div className="Citytype_section"></div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("南投"))}>
                            南投
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("雲林"))}>
                            雲林
                        </Button>
                    </div>

                </div>
            </section><br></br>

            <section className="Citytype">
                <div className="CitytypeGrid">
                    <div className="Citytype_section" style={{ top: '50px' }}>南部</div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("嘉義"))}>
                            嘉義
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("臺南"))}>
                            臺南
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-success"
                            as={Link}
                            to="/page2" onClick={() => dispatch(filterCity("高雄"))}>
                            高雄
                        </Button>
                    </div>
                    <div className="Citytype_section"></div>
                    <div>
                        <a href="">
                            <button type="button" className="btn btn-outline-success citytype_btn">屏東</button>
                        </a>
                    </div>
                </div>
            </section><br></br>



            {/* 會斷開的東部 */}
            <section className="Citytype testttt">
                <div className="CitytypeGrid_east ">
                    <div className="Citytype_east " style={{ top: '50px' }}>東部</div>
                    <div className="citytype_btnnn">
                        <a href="">
                            <button type="button" className="btn btn-outline-success citytype_btn ">花蓮</button>
                        </a>
                    </div>
                    <div className="citytype_btnnn">
                        <a href="">
                            <button type="button" className="btn btn-outline-success citytype_btn">臺東</button>
                        </a>
                    </div>
                    <div className="eastspace">

                    </div>
                </div>
            </section><br></br>

            <section className="Citytype">
                <div className="CitytypeGrid">
                    <div className="Citytype_section" style={{ top: '50px' }}>離島</div>
                    <div>
                        <a href="">
                            <button type="button" className="btn btn-outline-success citytype_btn">澎湖</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" className="btn btn-outline-success citytype_btn">金門</button>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <button type="button" className="btn btn-outline-success citytype_btn">連江</button>
                        </a>
                    </div>
                    <div className="Citytype_section"></div>
                    <div>
                        <a href="">
                            <button type="button" className="btn btn-outline-success citytype_btn">小琉球</button>
                        </a>
                    </div>
                </div>
            </section>

        </React.Fragment >
    );
}



export default RitButton;