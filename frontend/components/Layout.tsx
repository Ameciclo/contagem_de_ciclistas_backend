import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full mx-auto main-padding-top">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
