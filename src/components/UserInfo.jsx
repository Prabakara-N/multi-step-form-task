import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep, setUserInfo } from "../redux/features/formSlice";

const initalstate = {
  name: "",
  phoneNumber: "",
  address: "",
  city: "",
  pincode: "",
};

const UserInfo = () => {
  const [info, setInfo] = useState(initalstate);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.form);

  const { name, phoneNumber, address, city, pincode } = info;

  useEffect(() => {
    setInfo({ ...userInfo }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePhoneNumber = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 10) {
      setInfo({ ...info, phoneNumber: inputValue.slice(0, 10) });
    } else {
      setInfo({ ...info, phoneNumber: inputValue });
    }
  };

  const handlePostCode = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 6) {
      setInfo({ ...info, pincode: inputValue.slice(0, 6) });
    } else {
      setInfo({ ...info, pincode: inputValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && phoneNumber && address && city.trim() && pincode) {
      const userData = { ...info };
      dispatch(setUserInfo(userData));
      dispatch(setStep(2));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="mt-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="User Name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="number"
            id="number"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            minLength={10}
            maxLength={10}
            placeholder="Phone Number"
            required
          />
        </div>

        <div className=" flex flex-col gap-4">
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <textarea
              type="text"
              id="address"
              value={address}
              onChange={handleInputChange}
              name="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Address"
              required
              rows={2}
            />
          </div>
          <div className="w-full flex items-center gap-4 md:justify-between">
            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                value={city}
                name="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="City"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="pincode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                value={pincode}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pincode"
                onChange={handlePostCode}
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-auto"
        >
          Next
        </button>
      </form>
    </>
  );
};

export default UserInfo;
