import { useState } from "react";
import "./App.css";
import WantToCook from "./components/cooking/WantToCook";
import Cover from "./components/cover/Cover";
import Header from "./components/header/Header";
import Recipes from "./components/recipes/Recipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  const handleWantToCook = (recipe) => {
    const newListedRecipes = [...recipes, recipe];
    setRecipes(newListedRecipes);
  };

  return (
    <>
      <Header></Header>
      <Cover></Cover>
      <div className="mt-24">
        <h3 className="text-3xl  font-bold text-center">Our Recipes</h3>
        <p className="text-center mt-4 mx-auto w-[600px]">
          Welcome to our Recipes section, where culinary creativity meets
          mouthwatering flavors. Whether you&apos;re a seasoned chef or a novice
          cook, our collection of recipes offers something for everyone.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="lg:w-2/3 grid grid-cols-1 lg:grid-cols-2">
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
        </div>
        <div className="lg:w-1/3">
          <WantToCook wantToCookList={recipes}></WantToCook>
        </div>
      </div>
    </>
  );
}

export default App;
