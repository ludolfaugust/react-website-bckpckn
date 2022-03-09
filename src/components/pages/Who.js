import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";

function Who() {
  return (
    <div>
      <h1 className="who">WHO WE ARE</h1>
      <p>This is who we are - have a close look</p>
      <Cards />
      <Footer />
    </div>
  );
}

export default Who;
