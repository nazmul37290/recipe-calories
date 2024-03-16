const Cooking = ({ cookingItems }) => {
  return (
    <div>
      <h1 className="text-2xl text-center p-4 font-bold border-b-2">
        Currently Cooking: {cookingItems.length}
      </h1>
    </div>
  );
};

export default Cooking;
