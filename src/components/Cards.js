import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Get to know these epic indian Experiences </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="./images/img-5.jpg"
              text="Discover India by Motorcycle - the great britsh Royal Enfield"
              label="The Indian adventure"
              path="/getgoing"
            />
            <CardItems
              src="./images/img-6.jpg"
              text="Discover different cultures and religions on you trip"
              label="The Indian adventure"
              path="/who"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="./images/img-3.jpg"
              text="Enjoy the beauty of the nature in the so called Sundar Bans"
              label="The Indian adventure"
              path="/joinus"
            />
            <CardItems
              src="./images/img-4.jpg"
              text="Pick one of many goddess to make your favorite like Ganesha"
              label="The Indian adventure"
              path="/welcome"
            />
            <CardItems
              src="./images/img-8.jpg"
              text="Explore the himalayan tracks and villages by motorcycle"
              label="The Indian adventure"
              path="/who"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
