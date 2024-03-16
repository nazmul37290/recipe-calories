import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import PropTypes from "prop-types";
const Recipe = ({ recipe }) => {
  const {
    name,
    recipe_id,
    image,
    short_description,
    ingredients,
    preparing_time_minutes,
    calories,
  } = recipe;
  return (
    <div className="my-10">
      <div className="card w-96 bg-gray-100 min-h-max shadow-xl">
        <figure className=" w-[336px] h-[172px] mt-6 mx-auto object-cover ">
          <img className="" src={image} />
        </figure>
        <div className="p-6">
          <h2 className="card-title font-bold text-xl">{name}</h2>
          <p className="py-4">{short_description}</p>
          <div className="border-y-2 py-4">
            <h5 className="text-lg font-bold">
              Ingredients: {ingredients.length}
            </h5>
            <ul>
              {ingredients.map((ingredient) => (
                <li key={recipe_id} className="inline-block ">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 py-4">
            <div className="flex items-center gap-1">
              <span>
                <CiClock2 />
              </span>
              <p>{preparing_time_minutes} minutes</p>
            </div>
            <div className="flex items-center gap-1">
              <span>
                <FaFire />
              </span>
              <p>{calories} Calories</p>
            </div>
          </div>

          <div className="card-actions justify-start">
            <button className="btn bg-[#0BE58A] rounded-full">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

Recipe.propTypes = {
  recipe: PropTypes.object,
};
