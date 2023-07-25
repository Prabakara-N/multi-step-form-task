import React from "react";
import { useSelector } from "react-redux";

const Stepper = () => {
  const { step } = useSelector((state) => state.form);

  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex flex-col gap-2 items-center relative">
        <p
          className={`${
            step === 1 || step === 2 || step === 3
              ? "bg-blue-500 text-white line-one"
              : "bg-slate-200"
          } rounded-full w-[40px] h-[40px] flex items-center justify-center font-medium`}
        >
          1
        </p>
        <p className="text-gray-600 text-sm md:text-base">Personal Info</p>
      </div>
      <div className="flex flex-col gap-2 items-center relative">
        <p
          className={`${
            step === 1
              ? "line-two bg-slate-200"
              : step === 2 || step === 3
              ? "bg-blue-500 text-white line-two-before line-two"
              : "bg-slate-200"
          } rounded-full w-[40px] h-[40px] flex items-center justify-center font-medium `}
        >
          2
        </p>
        <p className="text-gray-600 text-sm md:text-base">Preferences</p>
      </div>
      <div className="flex flex-col gap-2 items-center relative">
        <p
          className={`${
            step === 3
              ? "bg-blue-500 text-white line-three-before"
              : "bg-slate-200 "
          } rounded-full w-[40px] h-[40px] flex items-center justify-center font-medium`}
        >
          3
        </p>
        <p className="text-gray-600 text-sm md:text-base">Confirmation</p>
      </div>
    </div>
  );
};

export default Stepper;
