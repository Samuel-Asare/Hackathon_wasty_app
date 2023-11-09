// UserInputContext.js

import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

// Define the initial state
const initialState = {
  username: "",
  location: "",
  landmark: "",
  dateTime: "",
  telephone: "",
  wasteType: "",
  numberOfBins: "",
  serviceOption: "",
};

const UserInputContext = createContext();

const userInputReducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, username: action.payload };
    case "LOCATION":
      return { ...state, location: action.payload };
    case "LANDMARK":
      return { ...state, landmark: action.payload };
    case "DATE_TIME":
      return { ...state, dateTime: action.payload };
    case "PHONE":
      return { ...state, telephone: action.payload };
    case "WASTE_TYPE":
      return { ...state, wasteType: action.payload };
    case "NUMBER_OF_BINS":
      return { ...state, numberOfBins: action.payload };
    case "SERVICE_OPTION":
      return { ...state, serviceOption: action.payload };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserInput = () => {
  return useContext(UserInputContext);
};

export const UserInputProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userInputReducer, initialState);

  return (
    <UserInputContext.Provider value={{ state, dispatch }}>
      {children}
    </UserInputContext.Provider>
  );
};

// PROP VALIDATION FOR THE CHILDREN.................
UserInputProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
