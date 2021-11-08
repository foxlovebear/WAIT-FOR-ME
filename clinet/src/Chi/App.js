import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Link, Switch } from "react-router-dom";

import TemporaryNavBar from './pages/TemporaryNavBar';
import FLoginPage from './pages/Login';
import FMemberPage from './pages/MemberPage';
import FBookingRecordPage from './pages/BookingRecord';
import FStarPage from './pages/star';
import FRegisterPage from './pages/Register';


const App = () =>{
    return(
        <BrowserRouter>
            <TemporaryNavBar/>
            <Switch>
                <Route exact path="/" component={TemporaryNavBar} />
                <Route path="/login" component={FLoginPage} />
                <Route path="/registerpage" component={FRegisterPage} />
                <Route path="/memberpage" component={FMemberPage} />
                <Route path="/bookingrecord" component={FBookingRecordPage} />
                <Route path="/starpage" component={FStarPage} />
            </Switch>
        </BrowserRouter>

    )
}



export default App;
