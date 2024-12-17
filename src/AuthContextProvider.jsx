import React,{useState, createContext} from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [isAuth,setIsAuth] = useState(false);

   const login = async ({email, password}) => {
    try{
      let response = await fetch ('https://reqres.in/api/login',{
        method : "POST",
        headers : {"Content-Type" : "application/json" },
        body : JSON.stringify({email, password}),
      });
      
      let data = await response.json();
      if(response.ok){ setIsAuth(true)
        return {success: true};      }
      else{ return {success: false, message : data.error}}
    }
    catch(error){
      console.log("Error:",error);
    }
   
  };

  const logout = ()=>{
    setIsAuth(false);
  }
  
  return (
    <div>
      <AuthContext.Provider value={{isAuth, login, logout}}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider;
