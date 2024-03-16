import Cooking from "./Cooking";
import "./wantToCool.css";
import PropTypes from "prop-types";
const WantToCook = ({ wantToCookList, handleCooking, cookingItems }) => {
  return (
    <div>
      <div className="my-10 md:w-[450px] lg:w-auto  border-2 rounded-3xl p-10">
        <h1 className="text-2xl text-center p-4 font-bold border-b-2">
          Want to cook: {wantToCookList.length}
        </h1>
        <table className=" min-w-[400px] lg:w-full ">
          <thead className="font-bold text-lg text-start lg:text-center">
            <tr className="">
              <th></th>
              <td>Name</td>
              <td>Time</td>
              <td>calories</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {wantToCookList.map((recipe, i) => {
              const { name, preparing_time_minutes, calories } = recipe;
              return (
                <tr key={i}>
                  <td className="font-semibold p-2"></td>
                  <td>{name}</td>
                  <td>{preparing_time_minutes} minutes</td>
                  <td>{calories} calories</td>
                  <td>
                    <button
                      className="btn bg-[#0BE58A]"
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
