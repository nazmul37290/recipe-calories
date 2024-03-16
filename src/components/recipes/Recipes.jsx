import { useEffect, useState } from "react";
import Recipe from "./recipe/Recipe";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return recipes.map((recipe, i) => (
    <Recipe
      handleWantToCook={handleWantToCook}
      key={i}
      recipe={recipe}
    ></Recipe>
  ));
};

export default Recipes;
