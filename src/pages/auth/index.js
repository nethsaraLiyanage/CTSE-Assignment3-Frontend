import { API } from "../../config";
 // POST request to create a new user
export const register = async(user) => {
    return await fetch(`${API}/auth` , {
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
  })
    .then(response => response.json())
    .catch(error => console.log(error))
  }

export const signin = async(user) => {
    return await fetch(`${API}/auth` , {
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
  })
    .then(response => response.json())
    .catch(error => console.log(error))
  }

  export const authenticate = (data, next) => {
    if(typeof window !== "undefined"){
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    }
  }

  export const logout = async(next) => {
    if(typeof window !== "undefined"){
      localStorage.removeItem("jwt");
      next();
      return await fetch(`${API}/logout`, {
        method:"GET"
      }).then(response => {
        console.log("logged out", response);
      }).catch(error => console.log(error));
    }
  }

  export const isAuthenticated = () => {
    if(typeof window == "undefined"){
      return false;
    }
    if(localStorage.getItem("jwt")){
      return JSON.parse(localStorage.getItem("jwt"));
    }else{
      return false;
    }
  }