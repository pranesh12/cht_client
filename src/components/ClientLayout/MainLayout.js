import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = (PageComponent) => {
  return function WithPage({ ...props }) {
    return (
      <div>
        <Navbar />
        <PageComponent />
        <Footer />
      </div>
    );
  };
};

export default MainLayout;
