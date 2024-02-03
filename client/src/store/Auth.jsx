import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import {toast} from "react-toastify";


export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("");
    const [services,setServices] = useState([]);
  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };

  const authenticationToken = `Bearer ${token}`;

  //   this is the get the value in either true or false in the original state of token
  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedin ", isLoggedIn);

  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //to get currentlylogged in user data

  const userAuthentication = async() =>{
    try {
        const response = await fetch("http://localhost:4000/api/auth/user",{
            method: "GET",
            headers:{
                Authorization: `Bearer ${token}`,
            },
        });

        if(response.ok)
        {
            const data = await response.json();
            setUser(data.userData);
        }
    } catch (error) {
      toast.error("Error in getting data of the currently logged in user")
        console.log("Error in getting data of the currently logged in user",error);
    }
  }

  //to fetch services data

  const getServices = async() =>{
    try {
      const response = await fetch("http://localhost:4000/api/data/service",{
        method:"GET",

      });

      if(response.ok){
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg)
      }
    } catch (error) {
      toast.error("Error in fetching services data")
      console.log("Error in fetching services data", error);
    }
  }

  useEffect(()=>{
    getServices();
    userAuthentication();
  },[])

  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, services ,authenticationToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};