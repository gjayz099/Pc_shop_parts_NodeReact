import { createContext, useContext } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  
    const login = ( User ) => {
        localStorage.setItem('User', JSON.stringify(User))
        localStorage.setItem('isLogin', JSON.stringify(true))
    }

    const logout = () => {
        localStorage.removeItem('isLogin')
        localStorage.removeItem('User')
    }

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
