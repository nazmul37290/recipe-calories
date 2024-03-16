import { useEffect, useState } from "react";
import Recipe from "./recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return recipes.map((recipe) => (
    <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
  ));
};

export default Recipes;
