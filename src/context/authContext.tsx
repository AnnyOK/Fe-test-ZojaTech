import { createContext, useContext, useEffect, useRef, useState } from "react";
import { calllogin } from "../services/calllogin";
import { toast } from "react-toastify";
interface AuthData {
  auth: string | null;
  staffRole: any;
  role: string;
  login:(values:{ email: string; password: string })=>void;
  logout:()=>void;
  filterRef:any
}
const AuthContext = createContext<AuthData>({} as AuthData);
export function useAuth() {
  return useContext(AuthContext);
}
export const AuthContextProvider: React.FC<any> = ({ children }) => {
  const [auth, setAuth] = useState("");
//   const [timer, setTimer] = useState<any>(null);

  const [staffRole, setStaffRole] = useState<any>({});
  const downloadRef = useRef(null);
  const filterRef = useRef(null)
  const role = staffRole?.data?.role;
   // Store the timer in a useRef to avoid unnecessary re-renders
   const timerRef = useRef<any>(null);

   const resetTimer = () => {
     if (timerRef.current) {
       clearTimeout(timerRef.current); // Clear the previous timer
     }
    // Set new timeout for logging out after 10 minutes of inactivity
    timerRef.current= setTimeout(logout, 6000000); // 600000 ms = 10 minutes
  };
  const login = async (values: { email: string; password: string }) => {
    try {
      const res:any = await calllogin(values);
      if (res?.data) {
        if (
          !res?.data?.staffRole?.data?.role ||
          !res?.data?.token ||
          res?.data?.staffRole.role === "" ||
          res?.data?.token === ""
        ) {
          return res?.data
          // await toast.error(
          //   "Roles or access token is not available. Login unsuccesful"
          // );

        }
        localStorage.setItem("auth", res?.data.token);
        localStorage.setItem(
          "staffDetail",
          JSON.stringify(res?.data.staffRole)
        );
        return true
      }
    } catch (e:any) {
      await toast.error(
        "Roles or access token is not available. Login unsuccesful"
      );

      return false
    }
  };
  const logout = () => {
    localStorage.clear()
    setAuth('')
  };
  const authdata = { auth, staffRole, downloadRef, role, login, logout,filterRef };
  useEffect(() => {
    const auth = localStorage.getItem('auth');
    const staffRole = JSON.parse(localStorage.getItem("staffDetail") as string)
    if (auth) {
      setAuth(auth);
    }
    if (staffRole?.data?.role) {
      setStaffRole(staffRole);
    }
  }, []);
  useEffect(() => {
    // Set the inactivity timer when the component is mounted
    resetTimer();

    // Events to track user activity
    const events = ['mousemove', 'keydown', 'click', 'scroll'];
    events.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    return () => {
      // Cleanup event listeners on component unmount
      events.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
      if (timerRef.current) {
        clearTimeout(timerRef.current); // Clear timer on unmount
      }
    };
  }, []);

  return (
    <AuthContext.Provider value={authdata}>{children}</AuthContext.Provider>
  );
};