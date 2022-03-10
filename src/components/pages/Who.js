import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";

function Who() {
  return (
    <div>
      <h1 className="who">WHO WE ARE - WHERE WE TRAVEL</h1>
      <p
        style={{
          color: "GrayText",
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        This is who we are - have a close look - closer!
      </p>
      <Cards />
      <Footer />
    </div>
  );
}

export default Who;
