import React from "react";
import { Container } from "react-bootstrap";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

//本標籤管理
//1.{dataList:從index拿到的data}
//2.狀態:none
//3.將處理過的資料.map去產生<item>

function List({ dataList }) {
  return (
    <div>
      {dataList.map((v) => {
        const { id, name, category, img, content, hashtag1, city } = v;
        return (
          <Container>
            <Link to={`/page3/${id}`}>
              <ItemCard
                id={id}
                key={id}
                name={name}
                category={category}
                img={img}
                content={content}
                hashtag1={hashtag1}
                city={city}
              ></ItemCard>
            </Link>
          </Container>
        );
      })}
    </div>
  );
}

export default List;
