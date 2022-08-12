import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ActiveReource from "components/ActiveResource"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ActiveReource />
      {children}
      <Footer />
    </>
  );
}
