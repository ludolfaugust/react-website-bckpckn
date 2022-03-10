import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";

function Who() {
  return (
    <div>
      <h1 className="who">WHO WE ARE - WHERE WE TRAVEL</h1>
      <h2
        style={{
          color: "GrayText",
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        This is who we are - have a close look - closer! We are working with the
        best travel agencies all over India!
      </h2>
      <Cards />
      <Footer />
    </div>
  );
}

export default Who;
