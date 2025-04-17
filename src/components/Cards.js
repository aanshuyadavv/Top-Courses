import React from "react";
import Card from "../components/Card";
import "../index.css";

const Cards = ({ filterCards, isDataLoading }) => {

  return (
    <div className="cards">
      {isDataLoading ? (
        <div className="custom-loader"></div>
      ) : filterCards.length > 0 ? (
        filterCards.map((card) => <Card key={card.id} {...card} />)
      ) : (
        <div className="custom-loader"></div>
      )}
    </div>
  );
};

export default Cards;
