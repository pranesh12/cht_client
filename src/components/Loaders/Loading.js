import React from "react";

const Loading = ({ error }) => {
  return (
    <div className="mx-auto">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
