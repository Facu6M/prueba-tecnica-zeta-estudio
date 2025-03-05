import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";

interface AuthContextType {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  setToken: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const savedToken = Cookies.get("auth_token");
    if (savedToken) {
      setToken(savedToken);
      setIsAuth(true);
    }
  }, []);

  const storeTokenInCookies = (newToken: string) => {
    Cookies.set("auth_token", newToken, {
      // expires: 30 / 86400,
      expires: 7,
      secure: true,
      sameSite: "Strict",
    });
    setToken(newToken);
  };

  const logout = () => {
    Cookies.remove("auth_token");
    setToken("");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        token,
        setToken: storeTokenInCookies,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
