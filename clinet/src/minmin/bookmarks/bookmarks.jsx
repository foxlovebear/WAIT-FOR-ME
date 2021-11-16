import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

// 引用各個導覽書籤路徑
import Env from './components/env';
import Map from './components/map';
import Menu from './components/menu';
import Photo from './components/photo-album';
import Comment from './components/comment';
import Share from './components/user-share';

// 引用導覽列小圖片
import Camera from './components/icon/Camera.png';
import Person from './components/icon/Person.png';
import Location from './components/icon/Location.png';
import Shop from './components/icon/Shop.png';
import Writing from './components/icon/Writing.png';
import Eating from './components/icon/Eating.png';

function Bookmarks ( { data } ){

    

    return(
        <Router>
            <div>
            <Nav fill variant="tabs" defaultActiveKey="/page3/2">

                <Nav.Item   >
                    
                    <Nav.Link  as={Link} to={'/page3/2'}>用戶分享
                    &nbsp; 
                    <img src={ Person } alt="Person" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/photo-album'} >相片集
                    &nbsp; 
                    <img src={ Camera } alt="Camera" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/map'} >地圖
                    &nbsp; 
                    <img src={ Location } alt="Location" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/menu'} >相關資訊
                    &nbsp; 
                    <img src={ Eating } alt="Eating" />
                    </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link as={Link} to={'/env'} >環境資訊
                    &nbsp; 
                    <img src={ Shop } alt="Shop" />
                    </Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                    <Nav.Link as={Link} to={'/comment'} >新增評論
                    &nbsp; 
                    <img src={ Writing } alt="Writing" />
                    </Nav.Link>
                </Nav.Item>

            </Nav>





        </div>

        <div>
            {/* 引用各個導覽書籤路徑 */}
            
            <Switch>
            
                <Route path='/page3/2'>
                    < Share data={data} />
                </Route>

                <Route path='/photo-album'>
                    < Photo data={data} />
                </Route>

                <Route path='/map'>
                    < Map data={data} />
                </Route>

                <Route path='/menu'>
                    < Menu data={data} />
                </Route>
{/* 
                <Route path='/env'>
                    < Env data={data} />
                </Route> */}

                <Route path='/comment'>
                    < Comment data={data}  />
                </Route>

             
            </Switch>

        </div>

        </Router>
    )
}




export default Bookmarks;