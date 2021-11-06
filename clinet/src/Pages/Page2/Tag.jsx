import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTag } from "../../reduxStore/storesSlice";

function Tag({}) {
  const data = useSelector((state) => state.stores.data);
  const tag1 = [...new Set(data.map((v) => v.tag1))];
  const tag2 = [...new Set(data.map((v) => v.tag2))];
  const tag3 = [...new Set(data.map((v) => v.tag3))];

  const tag = [...new Set(tag1.concat(tag2, tag3))];
  // console.log(
  //   data.filter((v) => {
  //     return v.city == "新竹";
  //   })
  // );
  console.log(
    data.filter((v) => {
      return (
        v.tag1 == "無時間限制" ||
        v.tag2 == "無時間限制" ||
        v.tag3 == "無時間限制"
      );
    })
  );

  const dispatch = useDispatch();

  // const filterClean = () => {
  //   setData(allData);
  // };
  // const filtertag1 = (tagV) => {
  //   const newDate = data.filter((v) => v.tag1 === tagV);
  //   setData(newDate);
  // };
  // const filterHash2 = (tagV) => {
  //   const newDate = data.filter((v) => v.tag2 === tagV);
  //   setData(newDate);
  // };

  return (
    <>
      {tag.map((v, i) => {
        return [
          <button key={i} onClick={() => dispatch(filterTag(v))}>
            {v}
          </button>,
          <>11</>,
        ];
      })}
    </>
  );
}

export default Tag;
