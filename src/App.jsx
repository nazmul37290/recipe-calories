import "./App.css";
import Cover from "./components/cover/Cover";
import Header from "./components/header/Header";
import Recipes from "./components/recipes/Recipes";

function App() {
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
      <div className="flex flex-col lg:flex-row">
        <div className="w-2/3 grid grid-cols-1 lg:grid-cols-2">
          <Recipes></Recipes>
        </div>
        <div className="w-1/3"></div>
      </div>
    </>
  );
}

export default App;
