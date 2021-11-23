import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

// 使用react-bootstrap 和CSS
import '../index.css';
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
 import Axios from 'axios'; //處理POST

//使用圖片

//
class CList extends React.Component{
  // 撈個資
    constructor(props) {
      super(props);
      this.state={
        UserInfoResponseDATA:""
      }
      this.authShowUserInfo=this.authShowUserInfo.bind(this); //綁定changePercent
    }
    componentDidMount(){
        this.authShowUserInfo();}
    authShowUserInfo = async()=>{  
      try{
        const id = localStorage.getItem("id");
        // console.log(id);
        const UserInfoResponse= await Axios.post('http://localhost:3001/showUserInfo',{
          headers:{"x-access-token":localStorage.getItem("token"),},
          id:id,
        })
          let UserInfoResponseDATA = UserInfoResponse.data;
          this.setState({
             UserInfoResponseDATA:UserInfoResponseDATA
          });
          // console.log(UserInfoResponseDATA);
          if(UserInfoResponse.data.auth === false){
            document.location.href="/login";
          }

      }catch(err){console.log(err);}

          

    }
    
    //從Response撈評論並用map塞到Array
    //物件要轉為陣列才能render *用Object.entries
        renderObject(){
	        	return Object.entries(this.state.UserInfoResponseDATA).map(([key, value], i) => {
              var passwordL = '';
              for(var a=0; a<value.password.length;a++){
                     passwordL += '*';
                    }
	          	return (
                <table className="userInfoTable">
                <tr>
                    <td className="userInfoTitle">顯示名稱:</td>
                    <td className="userInfoContent"> {value.name}
                    </td>
                </tr>

                <tr>
                    <td className="userInfoTitle">帳號(電郵):</td>
                    <td className="userInfoContent">{value.email}
                    </td>
                </tr>
                <tr>
                    <td className="userInfoTitle">我的密碼:</td>
                    <td className="userInfoContent">{passwordL}</td>
                </tr>
                <tr>
                    <td className="userInfoTitle">行動電話:</td>
                    <td className="userInfoContent">{value.phone == "null"?"尚無資料" : value.phone}
                    </td>
                </tr>
                <tr>
                   <Link to="/revisepage" >
                      <Button variant="" type=""className="w-100 buttonStyle">
                       修改會員資料
                      </Button>
                   </Link>
                </tr>
            </table>
                            
	          		)
	          	})
	       }
        render () {
          if (localStorage.getItem('id')){
            //this.state.UserInfoResponseDATA=長度為0的物件 所以不能用map 物件要轉為陣列才能render
            // console.log( this.state.UserInfoResponseDATA); 
            return (
                <div>
                     {/* <ul className="list-group list-group-flush">
                    {UserInfoResponseDATAKeys}
                  </ul> */}
                  {this.renderObject()}
                </div>
              );
          }else{
            return(
              <table className="userInfoTable">
                <tr>
                    <td className="userInfoTitle">【請登入後查看修改】</td>
                    <td className="userInfoContent"> 
                    </td>
                </tr>
                <tr>
                    <td className="userInfoTitle">顯示名稱:</td>
                    <td className="userInfoContent"> 
                    </td>
                </tr>

                <tr>
                    <td className="userInfoTitle">帳號(電郵):</td>
                    <td className="userInfoContent">
                    </td>
                </tr>
                <tr>
                    <td className="userInfoTitle">我的密碼:</td>
                    <td className="userInfoContent"></td>
                </tr>
                <tr>
                    <td className="userInfoTitle">行動電話:</td>
                    <td className="userInfoContent">
                    </td>
                </tr>

            </table>
            )
          }

        }
}

export default CList;
