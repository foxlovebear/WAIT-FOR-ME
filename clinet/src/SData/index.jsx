import React, { useState, useEffect } from "react";
import List from "./List";
import CreateButton from "./Create/CreateButton";
import axios from "axios";
import { useDispatch } from "react-redux";
import { search } from "../redux/dataSlice";

function SData() {
  const [role, setrole] = useState(localStorage.getItem("name"));
  const dispatch = useDispatch();

  if (role == "admin") {
    return (
      <>
        <h1
          className="line"
          style={{ margin: "10px", textAlign: "left", fontSize: "50px" }}
        >
          後台系統
          <CreateButton />
        </h1>
        <div style={{ width: "99%", margin: "0 auto" }}>
          <input
            className="data-input"
            type="text"
            // value={searchTerm}
            onChange={(e) => {
              // setsearchTerm(e.target.value);
              dispatch(search(e.target.value));
            }}
            placeholder="  Search..."
          />
        </div>

        <List />
      </>
    );
  } else {
    return (
      <>
        <h1>THIS PAGE FOR ADMIN ONLY</h1>
      </>
    );
  }
}

export default SData;

// ====================有驗證版==================

// import React, { useState, useEffect } from "react";
// import List from "./List";
// import CreateButton from "./Create/CreateButton";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { search } from "../redux/dataSlice";

// function SData() {
//   // const [searchTerm, setsearchTerm] = useState("");
//   const dispatch = useDispatch();

//   const [role, setrole] = useState(""); //驗證身份
//   useEffect(() => {
//     //每次刷新用cookie當做req對server發送請求
//     axios.get("http://localhost:3001/manager/login").then((res) => {
//       // console.log(res.data);//物件
//       if (res.data.loggedIn == true) {
//         setrole(res.data.user[0].name); //從cookie設定身份
//       }
//     });
//   }, []);
//   if (role == "admin") {
//     return (
//       <>
//         <h1 className="line" style={{ textAlign: "left", fontSize: "50px" }}>
//           後台系統
//           <CreateButton />
//         </h1>
//         <div>
//           <input
//             className="w-100 data-input"
//             type="text"
//             // value={searchTerm}
//             onChange={(e) => {
//               // setsearchTerm(e.target.value);
//               dispatch(search(e.target.value));
//             }}
//             placeholder="  Search..."
//           />
//         </div>

//         <List />
//       </>
//     );
//   } else {
//     return (
//       <>
//         <h1>THIS PAGE FOR ADMIN ONLY</h1>
//       </>
//     );
//   }
// }

// export default SData;
