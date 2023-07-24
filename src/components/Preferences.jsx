import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreferences, setStep } from "../redux/features/formSlice";
import ToggleBtn from "./ToggleBtn";
import { preferencesOptions } from "../utils";

const Preferences = () => {
  const [noOfDays, setNoOfDays] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedPreferences, setSelectedPreferences] = useState({});
  const { preferences } = useSelector((state) => state.form);

  useEffect(() => {
    setNoOfDays(preferences.noOfDays);
    setSelectedPreferences({ ...preferences.selectedPreferences });
    setIsChecked(preferences.isChecked); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPreferences && noOfDays) {
      const preferenceData = {
        noOfDays,
        smoking: isChecked,
        preferenceInfo: selectedPreferences,
      };
      dispatch(setPreferences(preferenceData));
      dispatch(setStep(3));
    }
  };

  const handlePreferenceChange = (e) => {
    setSelectedPreferences({
      ...selectedPreferences,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-2">
        <div className="mt-6 flex flex-col justify-center items-center gap-6">
          {preferencesOptions.map((preference) => {
            const { id, name, optionOne, optionTwo } = preference;
            return (
              <div key={id} className="flex items-center gap-4">
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="radio"
                    id={optionOne}
                    name={name}
                    value={optionOne}
                    onChange={handlePreferenceChange}
                    checked={selectedPreferences[name] === optionOne}
                    required
                  />
                  <label
                    htmlFor={optionOne}
                    className="block text-base font-medium text-gray-900 dark:text-white"
                  >
                    {optionOne}
                  </label>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="radio"
                    id={optionTwo}
                    value={optionTwo}
                    onChange={handlePreferenceChange}
                    checked={selectedPreferences[name] === optionTwo}
                    name={name}
                    required
                  />
                  <label
                    htmlFor={optionTwo}
                    className="block text-base font-medium text-gray-900 dark:text-white"
                  >
                    {optionTwo}
                  </label>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <p className="font-medium text-gray-700">Smoking :</p>
          <ToggleBtn isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>

        <div>
          <label
            htmlFor="noofdays"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            No Of Days
          </label>
          <input
            type="number"
            id="noofdays"
            value={noOfDays}
            onChange={(e) => setNoOfDays(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            min={0}
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="flex w-full justify-end gap-4 items-center">
          <button
            type="button"
            onClick={() => dispatch(setStep(1))}
            className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Previous
          </button>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Preferences;
