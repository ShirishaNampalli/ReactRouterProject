import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/DetailedPage";

const DetailedPage = ({ data }) => {
  console.log(data);
  if (!data) return <p>Loading....</p>;

  let drinks = data.drinks[0];
  console.log(drinks);
  return (
    <Wrapper>
      <div className="top-bar">
        <Link to="/"className="btn"> Home </Link>
      </div>
      <div className="content">
        <div>
          <img src={drinks.strDrinkThumb} alt={drinks.strDrink} />
        </div>
        <div className="items">
          <h4>
            <span>Name:</span>
            {drinks.strDrink}
          </h4>
          <h4>
            <span>Category:</span> {drinks.strCategory}
          </h4>
          <h4>
            <span>Info:</span> {drinks.strAlcoholic}
          </h4>
          <h4>
            <span>Glass:</span>
            {drinks.strGlass}
          </h4>
          <h4>
            <span>Ingredients: </span> {drinks.strIngredient1},
            {drinks.strIngredient2},{drinks.strIngredient3},
            {drinks.strIngredient4}
          </h4>
          <h4>
            <span>Instructions:</span> {drinks.strInstructions}
          </h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default DetailedPage;

