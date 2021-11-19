import React, { useState } from "react";
import Update from "./Update";
import "../index.css";

export const UpdateButton = ({
  id,
  name,
  status,
  address,
  phone,
  city,
  foodtype,
  cost,
  f1,
  f2,
  s1,
  s2,
  tag1,
  tag2,
  tag3,
  article,
  img,
}) => {
  const [editingShow, setEditingShow] = useState(false);
  return (
    <>
      <tr onClick={() => setEditingShow(true)}>
        <td>{id}</td>
        <td>{name.length > 25 ? name.substr(0, 25) + "..." : name}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>{city}</td>
        <td>{foodtype}</td>
        <td>{cost + "元"}</td>

        <td>{tag1}</td>
        <td>{tag2}</td>
        <td>{tag3}</td>
        <td>{f1 + "-" + f2}</td>
        <td>{s1 + "-" + s2}</td>
      </tr>
      {editingShow && (
        <Update
          name={name}
          status={status}
          address={address}
          phone={phone}
          city={city}
          foodtype={foodtype}
          cost={cost}
          f1={f1}
          f2={f2}
          s1={s1}
          s2={s2}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
          article={article}
          img={img}
          id={id}
          show={editingShow}
          onHide={() => setEditingShow(false)}
          state="editing"
        />
      )}
    </>
  );
};
