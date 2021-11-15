import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Create from "./Create";

const CreateButton = ({}) => {
  const [editingShow, setEditingShow] = useState(false);
  return (
    <
      // style={{ float: "right" }}
    >
      <button
        className="buttonStyle creatButton"
        // variant="outline-primary"
        onClick={() => setEditingShow(true)}
      >
        新增餐廳
      </button>

      {editingShow && (
        <Create show={editingShow} onHide={() => setEditingShow(false)} />
      )}
    </>
  );
};

export default CreateButton;
