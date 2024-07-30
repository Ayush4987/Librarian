import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const initAuthUser = localStorage.getItem("Users");
    const [authUser,setAuthUser] = useState(
        initAuthUser? JSON.parse(initAuthUser) :undefined,
    )

    return (
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)