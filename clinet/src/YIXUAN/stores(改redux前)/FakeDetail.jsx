import React, { useState,useEffect } from 'react'


function FakeDetail({match}) {
    //match 要從<Route component{<>}進來才會有值
        useEffect(() => {
            fetchData()
            console.log(match);
        }, []) 
    
        const[data,setData]=useState('');
    
        const fetchData = async() => {
            const rep = await fetch(`http://localhost:3001/page3?id=${match.params.id}`);
            //得到rep物件
            const data = await rep.json();//默認rep物件裡的data去轉
            setData(data);
    
        }
        console.log(data);//先空再有陣列
    
        if(data !== ''){//這裡不能用trycatch所以用這個方法
        return (
            <div>
                {data[0].name}
            </div>
        )}else{return<></>}
    }
    export default FakeDetail
