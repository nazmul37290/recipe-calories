import Cooking from "./Cooking";

import PropTypes from "prop-types";
const WantToCook = ({ wantToCookList, handleCooking, cookingItems }) => {
  return (
    <div>
      <div className="my-10 md:w-[450px] lg:w-auto  border-2 rounded-3xl  py-10">
        <h1 className="text-2xl text-center p-4 font-bold border-b-2">
          Want to cook: {wantToCookList.length}
        </h1>
        <table className="w-auto md:min-w-[400px] w-full lg:w-full ">
          <thead className="font-bold text-lg text-start lg:text-center">
            <tr className="">
              <th></th>
              <td className="p-3">Name</td>
              <td>Time</td>
              <td>calories</td>
              <td></td>
            </tr>
          </thead>
          <tbody className="text-xs md:text-base">
            {wantToCookList.map((recipe, i) => {
              const { name, preparing_time_minutes, calories } = recipe;
              return (
                <tr className="bg-[#150B2B] bg-opacity-5" key={i}>
                  <td className="font-semibold p-2">{i + 1}</td>
                  <td className="p-2">{name}</td>
                  <td className="p-2">{preparing_time_minutes} minutes</td>
                  <td className="p-2">{calories} calories</td>
                  <td>
                    <button
                      className="btn p-1 md:px-2 text-sm bg-[#0BE58A]"
                      onClick={() => handleCooking(recipe)}
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Cooking cookingItems={cookingItems}></Cooking>
      </div>
    </div>
  );
};

export default WantToCook;
WantToCook.propTypes = {
  wantToCookList: PropTypes.array,
  handleCooking: PropTypes.func,
  cookingItems: PropTypes.array,
};
