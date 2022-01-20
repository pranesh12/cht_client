import React from "react";

const Success = ({ success }) => {
  return (
    <div className="mx-auto">
      <div className="alert alert-success" role="alert">
        {success}
      </div>
    </div>
  );
};

export default Success;
