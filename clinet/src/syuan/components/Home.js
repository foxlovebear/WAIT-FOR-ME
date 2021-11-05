// 引入navbar
// import logo from './logo.svg';
import '../App.css';
import React, { Component } from 'react'
import Left from './Left';
import Right from './Right';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Footernew.css';

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <Left className="leftrwd"></Left>
                <Right className="rightrwd"></Right>

            </div>
        )
    }
}


