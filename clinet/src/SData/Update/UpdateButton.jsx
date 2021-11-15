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
  tag1,
  tag2,
  tag3,
  img,
}) => {
  const [editingShow, setEditingShow] = useState(false);
  return (
    <>
      <tr onClick={() => setEditingShow(true)}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>{city}</td>
        <td>{foodtype}</td>
        <td>{tag1}</td>
        <td>{tag2}</td>
        <td>{tag3}</td>
      </tr>
      {editingShow && (
        <Update
          name={name}
          status={status}
          address={address}
          phone={phone}
          city={city}
          foodtype={foodtype}
          tag1={tag1}
          tag2={tag2}
          tag3={tag3}
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
