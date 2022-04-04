import { API } from "../../config";
 // POST request to create a new user
export const register = async(user) => {
    return await fetch(`${API}/register` , {
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