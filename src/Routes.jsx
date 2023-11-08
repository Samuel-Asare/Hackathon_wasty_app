import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/Home_Page";
import Login from "./Components/Pages/Auth/Login";
import SignUp from "./Components/Pages/Auth/Sign_Up";
import RequestPage from "./Components/Pages/Request_Page";
import MainReviewPage from "./Components/RequestPage/MainReviewPage";
import CompletedRequest from "./Components/RequestPage/CompletedRequest";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/review" element={<MainReviewPage />} />
        <Route path="/colpleted" element={<CompletedRequest />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
