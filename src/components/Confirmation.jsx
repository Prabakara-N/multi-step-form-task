import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../redux/features/formSlice";
import { toast } from "react-toastify";

const Confirmation = () => {
  const { userInfo, preferences } = useSelector((state) => state.form);
  const { name, phoneNumber, address, city, pincode } = userInfo;
  const { smoking, noOfDays, preferenceInfo } = preferences;
  const dispatch = useDispatch();

  const handleSubmit = () => {
    toast.success("Form Submitted Successfully");
    const combinedData = { ...userInfo, preferences };
    console.log("HotelFormOutput:", combinedData);
  };
  return (
    <>
      <div className="flex flex-col gap-4 mt-6 justify-center font-semibold">
        <p>
          Name:<span className="ml-4 text-gray-600">{name}</span>{" "}
        </p>
        <p>
          Phone Number:<span className="ml-4 text-gray-600">{phoneNumber}</span>{" "}
        </p>
        <p>
          Address:<span className="ml-4 text-gray-600">{address}</span>{" "}
        </p>
        <p>
          City:<span className="ml-4 text-gray-600">{city}</span>{" "}
        </p>
        <p>
          Pincode:<span className="ml-4 text-gray-600">{pincode}</span>{" "}
        </p>
        <p>
          Smoking:
          <span className="ml-4 text-gray-600">
            {smoking ? "Yes" : "No"}
          </span>{" "}
        </p>
        <p>
          Preferences:
          <span className="ml-4 text-gray-600">
            {preferenceInfo.roomType}, {preferenceInfo.AC},{" "}
            {preferenceInfo.food}
          </span>{" "}
        </p>
        <p>
          No Of Days:<span className="ml-4 text-gray-600">{noOfDays}</span>{" "}
        </p>
        <div className="flex w-full justify-end gap-4 items-center">
          <button
            type="button"
            onClick={() => dispatch(setStep(2))}
            className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
