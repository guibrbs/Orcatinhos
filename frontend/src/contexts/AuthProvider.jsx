import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false)
    }, [])

    const login = async (email, password) => {
        const loggedUser = await createSession(email, password)

        updateUser(loggedUser)

        navigate("/home")
    }

    const updateUser = (userData) => {
        const {data} = userData
        if(data?._id){
            data.id = data._id
        }
        localStorage.setItem("user", JSON.stringify(data))
        setUser(data)
    }

    const logout = () => {
        localStorage.removeItem("user")
        setUser(null)
        navigate("/")
    }

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, updateUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}