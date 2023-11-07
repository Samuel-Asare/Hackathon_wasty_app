
import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./Components/Header";
import  MyRoutes  from "./Routes";



const App = () => {
    return (
        <BrowserRouter>
          <HeaderNav />
          <MyRoutes />
      </BrowserRouter>
    );
};

export default App;
