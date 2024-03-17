import "./cover.css";

const Cover = () => {
  return (
    <div className="cover rounded-3xl h-[550px] p-5 lg:p-28 flex flex-col justify-center items-center space-y-10">
      <h1 className="text-2xl lg:text-5xl font-bold text-white text-center">
        Discover an exceptional cooking <br /> class tailored for you!
      </h1>
      <p className="text-white text-lg md:text-xl w-auto md:w-[680px] text-center">
        Welcome to RecipeCalories, your go-to destination for nutritious and
        delicious recipes tailored to help you achieve your health and wellness
        goals.
      </p>
      <div className="flex justify-center gap-5">
        <button className="btn bg-[#0BE58A] rounded-full text-sm text-lg">
          Explore Now
        </button>
        <button className="btn bg-transparent text-white text-sm text-lg rounded-full">
          Our FeedBack
        </button>
      </div>
    </div>
  );
};

export default Cover;
