import "./styles/App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormContainer from "./components/FormContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStep } from "./redux/features/formSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStep(1)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ToastContainer />
      <FormContainer />
    </>
  );
}

export default App;
