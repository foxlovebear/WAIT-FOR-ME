// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { filterTag, tagClean } from "../../../redux/storesSlice";
// import "../Page2.css";
// // import "../Page2Syuan.css";

// //待優化
// //1.button onclick 兩個function
// //2.重設不會改顏色(要重新整理)

// function Tag({}) {
//   //取得資料
//   const data = useSelector((state) => state.stores.data);
//   const tagArray = useSelector((state) => state.stores.tagArray);
//   const dispatch = useDispatch();

//   //組合所有標籤統一map
//   const tag1 = [...new Set(data.map((v) => v.tag1))];
//   const tag2 = [...new Set(data.map((v) => v.tag2))];
//   const tag3 = [...new Set(data.map((v) => v.tag3))];
//   const tag = ["營業中", ...new Set(tag1.concat(tag2, tag3))];

//   var f = (id, tag) => {
//     const temp = document.getElementById(id);
//     if (tagArray.includes(tag)) {
//       temp.className = "btn btnt";
//     } else {
//       temp.className = "btn btnt active activet";
//     }
//   }; //看tagArray有沒有包含onclick的v，沒有就把active拔掉

//   return (
//     <div>
//       {/* <button
//         onClick={() => {
//           dispatch(tagClean());
//         }}
//       >
//         重設
//       </button><br /> */}

//       {tag.map((v, i) => {
//         return (
//           <div id="restaurantLeft" className="situtationChoose">
//             {/* <button
//               style={{ padding: "0" }}
//               className="btn situtationChoose"
//               id={"btn" + i}
//               key={i}
//               onClick={() => dispatch(filterTag(v))}
//             >
//               <span onClick={() => f("btn" + i, v)}>{v}</span>
//             </button> */}

//             <form action="" className="situtationChoose rwd999tag">
//               <input
//                 type="checkbox"
//                 className="situtationinput"
//                 id={"btn" + i}
//                 name={"btn" + i}
//                 key={i}
//                 onClick={() => dispatch(filterTag(v))}
//               />
//               <label
//                 for={"btn" + i}
//                 className="situtationBtn btn situtationChoose"
//                 onClick={() => f("btn" + i, v)}
//               >
//                 {v}
//               </label>
//             </form>

//             {/*---------------------- RWD版本 --------------------*/}

//             <form action="" className="situtationChoose rwd300tag">
//               <input
//                 type="checkbox"
//                 className="situtationinput"
//                 id={"btn" + i}
//                 name={"btn" + i}
//                 key={i}
//                 onClick={() => dispatch(filterTag(v))}
//               />
//               <label
//                 for={"btn" + i}
//                 className="situtationBtn btn situtationChoose"
//                 onClick={() => f("btn" + i, v)}
//               >
//                 {v}
//               </label>
//             </form>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Tag;

// =======================
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTag, tagClean } from "../../../redux/storesSlice";
import "../Page2.css";
// import "../Page2Syuan.css";

//待優化
//1.button onclick 兩個function
//2.重設不會改顏色(要重新整理)

function Tag({}) {
  //取得資料
  const data = useSelector((state) => state.stores.data);
  const tagArray = useSelector((state) => state.stores.tagArray);
  const dispatch = useDispatch();

  //組合所有標籤統一map
  const tag1 = [...new Set(data.map((v) => v.tag1))];
  const tag2 = [...new Set(data.map((v) => v.tag2))];
  const tag3 = [...new Set(data.map((v) => v.tag3))];
  const tag = ["營業中", ...new Set(tag1.concat(tag2, tag3))];

  var f = (id, tag) => {
    const temp = document.getElementById(id);
    if (tagArray.includes(tag)) {
      temp.className = "btn btnt";
    } else {
      temp.className = "btn btnt active activet";
    }
  }; //看tagArray有沒有包含onclick的v，沒有就把active拔掉

  return (
    <div>
      {/* <button
        onClick={() => {
          dispatch(tagClean());
        }}
      >
        重設
      </button><br /> */}

      <input
        type="checkbox"
        className="situtationinput"
        id="營業中"
        onClick={() => dispatch(filterTag("營業中"))}
      />
      <label for="營業中" className="situtationBtn btn situtationChoose">
        營業中
      </label>
      <input
        type="radio"
        // className="situtationinput"
        id="平價美食"
        name="cost"
        checked={tagArray.includes("平價美食")}
        onClick={() => dispatch(filterTag("平價美食"))}
      />
      <label for="平價美食" className="situtationBtn btn situtationChoose">
        平價美食
      </label>
      <input
        type="radio"
        // className="situtationinput"
        id="中等消費"
        name="cost"
        onClick={() => dispatch(filterTag("中等消費"))}
        checked={tagArray.includes("中等消費")}
      />
      <label for="中等消費" className="situtationBtn btn situtationChoose">
        中等消費
      </label>
      <input
        type="radio"
        // className="situtationinput"
        id="高級餐廳"
        name="cost"
        onClick={() => dispatch(filterTag("高級餐廳"))}
        checked={tagArray.includes("高級餐廳")}
      />
      <label for="高級餐廳" className="situtationBtn btn situtationChoose">
        高級餐廳
      </label>
      {tag.map((v, i) => {
        return (
          <div id="restaurantLeft" className="situtationChoose">
            {/* <button
              style={{ padding: "0" }}
              className="btn situtationChoose"
              id={"btn" + i}
              key={i}
              onClick={() => dispatch(filterTag(v))}
            >
              <span onClick={() => f("btn" + i, v)}>{v}</span>
            </button> */}

            <form action="" className="situtationChoose rwd999tag">
              <input
                type="checkbox"
                className="situtationinput"
                id={"btn" + i}
                name={"btn" + i}
                key={i}
                onClick={() => dispatch(filterTag(v))}
              />
              <label
                for={"btn" + i}
                className="situtationBtn btn situtationChoose"
                onClick={() => f("btn" + i, v)}
              >
                {v}
              </label>
            </form>

            {/*---------------------- RWD版本 --------------------*/}

            <form action="" className="situtationChoose rwd300tag">
              <input
                type="checkbox"
                className="situtationinput"
                id={"btn" + i}
                name={"btn" + i}
                key={i}
                onClick={() => dispatch(filterTag(v))}
              />
              <label
                for={"btn" + i}
                className="situtationBtn btn situtationChoose"
                onClick={() => f("btn" + i, v)}
              >
                {v}
              </label>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Tag;
