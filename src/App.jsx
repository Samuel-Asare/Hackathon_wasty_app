import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./Components/Header";
import MyRoutes from "./Routes";
import { AuthContextProvider } from "./Context/AuthContext/AuthContext";
import { UserInputProvider } from "./Context/RequestContext";

const App = () => {
    return (
        <AuthContextProvider>
            <UserInputProvider>
                <BrowserRouter>
                    <HeaderNav />
                    <MyRoutes />
                </BrowserRouter>
            </UserInputProvider>
        </AuthContextProvider>
    );
};

export default App;
