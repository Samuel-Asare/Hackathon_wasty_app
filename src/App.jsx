
import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./Components/Header";
import  MyRoutes  from "./Routes";
import { AuthContextProvider } from "./Context/AuthContext/AuthContext";
import { FormDataProvider } from "./Context/RequestContext";



const App = () => {
    return (
      <AuthContextProvider>
        <FormDataProvider>

        <BrowserRouter>
          <HeaderNav />
          <MyRoutes />
      </BrowserRouter>
        </FormDataProvider>
      </AuthContextProvider>
    );
};

export default App;
