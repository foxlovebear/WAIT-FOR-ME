// 測試接後端
import React, { useState, useEffect } from 'react';
import '../components/css/Page2Syuan.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function FoodtypePage() {

    return (
        <div className="page2mdstyle">

            {/* 左側篩選器 */}
            <div id="restaurantLeft">

                <div>
                    <form action="" className="situtationChoose">
                        <input type="checkbox" id="wifi" name="wifi" />
                        <label for="wifi" className="situtationBtn">有WIFI</label><br />
                        <input type="checkbox" id="socket" name="socket" />
                        <label for="socket" className="situtationBtn">有插座</label><br />
                        <input type="checkbox" id="lowexpense" name="lowexpense" />
                        <label for="lowexpense" className="situtationBtn">無低消</label><br />
                        <input type="checkbox" id="servicecharge" name="servicecharge" />
                        <label for="servicecharge" className="situtationBtn">無服務費</label><br />
                        <input type="checkbox" id="timelimit" name="timelimit" />
                        <label for="timelimit" className="situtationBtn">無時間限制</label><br />
                        <input type="checkbox" id="petfriendly" name="petfriendly" />
                        <label for="petfriendly" className="situtationBtn">寵物友善</label><br />
                        <input type="checkbox" id="kidsfriendly" name="kidsfriendly" />
                        <label for="kidsfriendly" className="situtationBtn">親子友善</label><br />
                    </form>
                </div>
            </div>

            {/* 右側店家列表 */}

            {/* 在照片和第二格時，都可以點選跳轉第三頁 */}
            <section>
                <div id="restaurantRight">
                    <section className="storeSection">
                        <div className="row page2row">
                            <div className="col-3 ">
                                <Link to="/ResterauntPage">
                                    <img className="storepic" src="/images/syuan/carouselIMG11.jpg" alt="" />
                                </Link>
                            </div>
                            <div className="col-3 storeinfor">
                                <Link to="/resterauntPage" className="topage3">
                                    <div>店名：foodtype</div>
                                    <div>營業時間：00:00 - 00:00</div>
                                    <div>低消：xxx元</div>
                                    <div>星星評分：</div>
                                    <div className="storeaddress">地址：台中市南區某某某路某某某巷某某某某某號</div>
                                    <div className="storetag">標籤：</div>
                                </Link>
                            </div>
                            <div className="col-2">3</div>
                            <div className="col-2">4</div>
                            <div className="col-2">5</div>
                        </div>
                    </section>
                </div>
            </section>


            {/* 返回最上層按鈕BACKTOP */}
            <section className="backtop">
                <a href="#">
                    <img src="/images/syuan/upbacktop.png" className="backtopimg" alt="" />
                </a>
            </section>

        </div>
    );
}

export default FoodtypePage;
