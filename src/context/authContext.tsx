import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { calllogin } from "../services/calllogin";
import { toast } from "react-toastify";
interface AuthData {
  auth: string | null;
  setAuth: (data: string) => void;
  login: (values: { email: string; password: string }) => void;
  logout: () => void;
  userLogin: any,
  setUserLogin: (data: any) => void
}
const AuthContext = createContext<AuthData>({} as AuthData);
export function useAuth() {
  return useContext(AuthContext);
}
export const AuthContextProvider: React.FC<any> = ({ children }) => {
  const [auth, setAuth] = useState("");
  const [userLogin, setUserLogin] = useState<any>({})
  const timerRef = useRef<any>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(logout, 6000000); // 600000 ms = 10 minutes
  };
  const login = useCallback(async (values: { email: string; password: string }) => {
    try {
      const res: any = await calllogin(values);
      if (res?.data) {
        const token = res.data.token;

        localStorage.setItem("auth", token);
        localStorage.setItem(
          "userDetail",
          JSON.stringify(res?.data.user)
        );
        setAuth(token)
        return true
      }
    } catch (e: any) {
      await toast.error(
        "Roles or access token is not available. Login unsuccesful"
      );

      return false
    }
  }, []);
  const logout = () => {
    localStorage.clear()
    setAuth('')
  };
  useEffect(() => {
    const isauth = localStorage.getItem('auth');
    if (isauth) {
      setAuth(isauth);
    }
  }, [auth, login]);

  useEffect(() => {
    if (auth) {

      // Set the inactivity timer when the component is mounted
      resetTimer();
      // Events to track user activity
      const events = ['mousemove', 'keydown', 'click', 'scroll'];
      events.forEach(event => {
        window.addEventListener(event, resetTimer);
      });

      return () => {
        events.forEach(event => {
          window.removeEventListener(event, resetTimer);
        });
        if (timerRef.current) {
          clearTimeout(timerRef.current); // Clear timer on unmount
        }
      }
    };
  }, []);
  const authdata = { auth, setAuth, login, logout, userLogin, setUserLogin };

  return (
    <AuthContext.Provider value={authdata}>{children}</AuthContext.Provider>
  );
};