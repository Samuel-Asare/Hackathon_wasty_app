import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/Home_Page";
import Login from "./Components/Pages/Auth/Login";
import SignUp from "./Components/Pages/Auth/Sign_Up"; 

const MyRoutes = () => {
  return (
    <div>
      <Routes>
       <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};


export default MyRoutes;
