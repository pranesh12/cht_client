import React from "react";
import { useParams } from "react-router-dom";

const Places = () => {
  const { district } = useParams();
  console.log(useParams());
  console.log("plces Activated");
  return (
    <div>
      <h1>{district}</h1>
    </div>
  );
};

export default Places;
