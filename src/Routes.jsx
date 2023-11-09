import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/Home_Page";
import Login from "./Components/Pages/Auth/Login";
import SignUp from "./Components/Pages/Auth/Sign_Up";
import RequestPage from "./Components/Pages/Request_Page";
import MainReviewPage from "./Components/RequestPage/MainReviewPage";
import CompletedRequest from "./Components/RequestPage/CompletedRequest";
import Email from "./Components/Pages/EmailVerify/Email";
import NotFound from "./Components/Pages/404/NotFound";
import SubmittedRequests from "./Components/Pages/YourSubmittedRequests/SubmittedRequests";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext/AuthContext";
import BlogComponentsContainer from "./Components/Pages/BlogPage/BlogComponents";

const MyRoutes = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/request" element={user ? <RequestPage /> : <Login />} />
        <Route path="/review" element={user ? <MainReviewPage /> : <Login />} />
        <Route
          path="/completed"
          element={user ? <CompletedRequest /> : <Login />}
        />
        <Route
          path="/blogpage"
          element={user ? <BlogComponentsContainer /> : <Login />}
        />
        <Route path="api/auth/:id/verify/:token" element={<Email />} />
        <Route
          path="/submittedrequests"
          element={user ? <SubmittedRequests /> : <Login />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
