import React from "react";

import Navbar from "../Navbar/Navbar";

const SubmainLayout = (PageComponent) => {
  return function WithPage({ ...props }) {
    return (
      <div>
        <Navbar />
        <PageComponent />
      </div>
    );
  };
};

export default SubmainLayout;
