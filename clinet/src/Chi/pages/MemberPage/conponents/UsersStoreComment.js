import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';//處理POST
// 使用react-bootstrap 和CSS
import '../index.css';
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
 import FMemberIcon from './MemberIcon.js';

//使用圖片
//
class CUsersStoreComment extends React.Component{
  // 撈評論
    constructor(props) {
      super(props);
      this.state={
        FoxResponseDATA:""
      }
      this.authShowComment=this.authShowComment.bind(this); //綁定changePercent
    }
    componentDidMount(){
        this.authShowComment();}
    authShowComment = async()=>{  
      try{
        const id = localStorage.getItem("id");
        console.log(id);
        const foxResponse= await Axios.post('http://localhost:3001/showUserComment',{
          headers:{"x-access-token":localStorage.getItem("token"),},
          id:id,
        })
          let foxResponseDATA = foxResponse.data;
          this.setState({
             FoxResponseDATA:foxResponseDATA
          });
          console.log(foxResponseDATA);

      }catch(err){console.log(err);}

          

    }
    
    //從Response撈評論並用map塞到Array
    //物件要轉為陣列才能render *用Object.entries
        renderObject(){
	        	return Object.entries(this.state.FoxResponseDATA).map(([key, value], i) => {
	          	return (

                  <Container fluid className="CommentLine ">
            <Row id="commentUserInfo" >
              {/* 用戶小標+用戶名 */}
              <Col lg={4} > 
                <Col lg={5} className="userIcon w-100"><FMemberIcon/></Col>
                <Col className="commenterName"><h6>{localStorage.getItem('name')}</h6></Col>
              </Col>  

              <Col lg={8} className="CommentStoreInfo">
                  <Stack>
                    <Col><h6>{value.time} </h6></Col>
                    <Col><h6>{value.name}</h6></Col>
                    <Col><h6>評分:{value.score}</h6></Col>
                    <div></div> 
                  </Stack>
              </Col>
            </Row>
            {/* 評論內容 */}
                      <Row>
                        <Col lg={4}></Col>
                                  <Col className="commentText">評論內容:{value.comment}</Col>
                      </Row>
          
                      <Row>
                        <Col lg={4}></Col>
                        <Col lg={8} >圖片<img src="https://picsum.photos/id/102/250/150"/></Col>
                      </Row>
                     </Container >                  
	          		)
	          	})
	       }
        render () {
          if (localStorage.getItem('id')){
            //this.state.FoxResponseDATA=長度為0的物件 所以不能用map 物件要轉為陣列才能render
            console.log( this.state.FoxResponseDATA); 
            return (
                <div>
                     {/* <ul className="list-group list-group-flush">
                    {FoxResponseDATAKeys}
                  </ul> */}
                  {this.renderObject()}
                </div>
              );
          }else{
            return(
            <Container fluid >
            <Row id="commentUserInfo" >
              {/* 用戶小標+用戶名 */}
              <Col lg={4} > 
                <Col lg={5} className="userIcon w-100"><FMemberIcon/></Col>
                <Col className="commenterName"></Col>
              </Col>  

              <Col lg={8} className="CommentStoreInfo">
                  <Stack>
                    <Col></Col>
                    <Col>請登入查看過往評論</Col>
                    <Col></Col>
                  </Stack>
              </Col>
            </Row>
            {/* 評論內容 */}
                      <Row>
                        <Col lg={4}></Col>
                                  <Col className="commentText">評論內容:目前無資料</Col>
                      </Row>
          
                      <Row>
                        <Col lg={4}></Col>
                        <Col lg={8} ></Col>
                      </Row>
                     </Container >   
            )
          }

        }
}

export default CUsersStoreComment;