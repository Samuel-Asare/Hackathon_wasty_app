import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/Home_Page";
import Login from "./Components/Pages/Auth/Login";
import SignUp from "./Components/Pages/Auth/Sign_Up";
import RequestPage from "./Components/Pages/Request_Page";
import Email from "./Components/Pages/EmailVerify/Email";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="api/auth/:id/verify/:token" element={<Email />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
