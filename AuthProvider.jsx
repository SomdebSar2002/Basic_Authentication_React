import { useContext,createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const loginAction = async (data)=>{
    try{
        // const response = await fetch("https://reqres.in/api/login",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify(data)
        // });
        // const result = await response.json();
        const response = {ok:true};
        const result = {
            data:{
                user:data.user,
                token:"dummy-token-123456"
            }
        };
        if(response.ok){
            setUser(result.data.user);
            setToken(result.data.token);
            localStorage.setItem("token",JSON.stringify(result.data.token));
            navigate("/dashboard");
            return;
        }
        throw new Error(result.error);
    }
    catch(err){
        console.log("Login failed", err);
        }
  }
  const logOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;