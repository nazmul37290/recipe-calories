import { useState } from "react";
import "./App.css";
import WantToCook from "./components/cooking/WantToCook";
import Cover from "./components/cover/Cover";
import Header from "./components/header/Header";
import Recipes from "./components/recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cookingItems, setCookingItems] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const handleWantToCook = (recipe) => {
    if (recipes.includes(recipe)) {
      toast("Already added");
      return;
    }
    const newListedRecipes = [...recipes, recipe];
    setRecipes(newListedRecipes);
  };
  const handleCooking = (removedRecipe) => {
    const newWantToCookList = recipes.filter(
      (recipe) => recipe !== removedRecipe
    );
    setRecipes(newWantToCookList);
    const newCookingItems = [...cookingItems, removedRecipe];
    setCookingItems(newCookingItems);
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Cover></Cover>
      <div className="mt-24">
        <h3 className="text-3xl  font-bold text-center">Our Recipes</h3>
        <p className="text-center mt-4 mx-auto w-auto md:w-[600px]">
          Welcome to our Recipes section, where culinary creativity meets
          mouthwatering flavors. Whether you&apos;re a seasoned chef or a novice
          cook, our collection of recipes offers something for everyone.
        </p>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:justify-around">
        <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-5  h-auto">
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
        </div>
        <div className="w-auto lg:w-2/5">
          <WantToCook
            wantToCookList={recipes}
            handleCooking={handleCooking}
            cookingItems={cookingItems}
          ></WantToCook>
        </div>
      </div>
    </>
  );
}

export default App;
