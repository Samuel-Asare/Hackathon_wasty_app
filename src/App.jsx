
import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./Components/Header";
import  MyRoutes  from "./Routes";
import { AuthContextProvider } from "./Context/AuthContext/AuthContext";



const App = () => {
    return (
      <AuthContextProvider>
        <BrowserRouter>
          <HeaderNav />
          <MyRoutes />
      </BrowserRouter>
      </AuthContextProvider>
    );
};

export default App;
