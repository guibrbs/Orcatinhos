import { useContext } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { AuthContext, AuthProvider } from "../contexts/AuthProvider";
import { Auth } from "../pages/Auth";
import { HomePage } from "../pages/Home";

const AppRoutes = () => {
    
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext)

        if(loading){
            return <div>Carregando...</div>
        }

        if(!authenticated){
            return <Navigate to={"/"}/>
        }
        return children
    }

    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route
                        path="/home" 
                        element={
                            <Private>
                                <HomePage />
                            </Private>
                        }
                        />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRoutes