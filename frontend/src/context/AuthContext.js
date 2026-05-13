import {
    createContext,
    useState
} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(

        localStorage.getItem("usuario") || null
    );

    const login = (
        token,
        usuarioNombre
    ) => {

        localStorage.setItem(
            "token",
            token
        );

        localStorage.setItem(
            "usuario",
            usuarioNombre
        );

        setUsuario(usuarioNombre);
    };

    const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("usuario");

    setUsuario(null);
};

    return (

        <AuthContext.Provider
            value={{
                usuario,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>
    );
};