import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const Cooking = ({ cookingItems }) => {
  const [cookingTime, setCookingTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  useEffect(() => {
    let calories = 0;
    let totalTime = 0;
    cookingItems.map((item) => {
      totalTime = totalTime + item.preparing_time_minutes;
      calories = calories + item.calories;
    });
    setTotalCalories(calories);
    setCookingTime(totalTime);
  }, [cookingItems]);

  return (
    <div>
      <h1 className="text-2xl text-center p-4 font-bold border-b-2">
        Currently Cooking: {cookingItems.length}
      </h1>
      <table className=" min-w-[400px] lg:w-full ">
        <thead className="font-bold text-lg text-start lg:text-center">
          <tr className="">
            <th></th>
            <td className="p-3">Name</td>
            <td>Time</td>
            <td>calories</td>
          </tr>
        </thead>

        <tbody className="text-sm lg:text-center px-4">
          {cookingItems.map((recipe, i) => {
            const { name, preparing_time_minutes, calories, recipe_id } =
              recipe;

            return (
              <>
                <tr className="bg-[#150B2B] bg-opacity-5 " key={recipe_id}>
                  <td className="font-semibold p-3">{i + 1}</td>
                  <td className="p-3">{name}</td>
                  <td>{preparing_time_minutes} minutes</td>
                  <td>{calories} calories</td>
                </tr>
              </>
            );
          })}
          <tr className="text-sm ">
            <th></th>
            <th></th>
            <td className="pt-4">Total Time= {cookingTime} minutes</td>
            <td>Total Calories={totalCalories} calories</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cooking;
Cooking.propTypes = {
  cookingItems: PropTypes.array,
};
