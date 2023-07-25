import React from "react";
import Stepper from "./Stepper";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";
import Preferences from "./Preferences";
import Confirmation from "./Confirmation";

const FormContainer = () => {
  const { step } = useSelector((state) => state.form);
  return (
    <div className="w-[95%] mx-auto md:w-[500px] h-[550px] bg-slate-100 rounded-lg p-5">
      <Stepper />
      {step === 1 && <UserInfo />}
      {step === 2 && <Preferences />}
      {step === 3 && <Confirmation />}
    </div>
  );
};

export default FormContainer;
