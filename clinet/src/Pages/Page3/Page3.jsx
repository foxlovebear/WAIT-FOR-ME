import React from "react";
import StoreListFather from "../../minmin/StoreListFather";

function Page3({ match }) {
  console.log(match);
  return (
    <div>
      <StoreListFather match={match} />
    </div>
  );
}

export default Page3;
