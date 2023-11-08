// FormDataContext.js
import { createContext, useContext, useReducer } from "react";

const FormDataContext = createContext();

const initialState = {
  username: "",
  location: "",
  landmark: "",
  date: "",
  telephone: "",
  wasteType: "",
  numberOfBins: "",
  serviceOption: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const FormDataProvider = ({ children }) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormDataContext.Provider value={{ formData, dispatch }}>
      {children}
    </FormDataContext.Provider>
  );
};

const useFormData = () => {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};

export { FormDataProvider, useFormData };
