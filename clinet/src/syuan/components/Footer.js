import React, { Component } from 'react';
// import './css/Footer.css';
import './css/Footernew.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <span className="footerword">
                Copyright © 2021 餵 for me.
            </span>

            <span>
                <Link to='/page1' className="footerright footerlogin">
                    會員登入/註冊
                </Link>
            </span>
            <span>
                <Link to='/' className="footerright footerback">
                    回到首頁
                </Link>
            </span>



            {/* <footer class="footer_bottom" id="footer_bottom">
                <div class="row">
                    <div class="col-3 copyright">Copyright © 2021 Syuaneat. All rights reserved.</div>
                    <div class="col-7">
                        <div class="row">
                            <div class="col-4">
                                <a class="footer_a" href="./index.html">
                                    回到首頁
                                </a>
                            </div>
                            <div class="col-4">
                                商業合作請洽：<br />

                            </div>
                            <div class="col-4">
                                追蹤我：
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <p>瀏覽人數：</p>
                        <p></p>
                    </div>
                </div>
            </footer> */}



        </div>
    );
}

export default Footer;