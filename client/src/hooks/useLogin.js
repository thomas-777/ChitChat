import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogin=()=>{
    const[loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext()
    const URL= import.meta.env.VITE_SERVER_URL
    const login=async({username,password})=>{
        const success = handleInputError({username,password})
        if(!success){
            return
        }
        setLoading(true)
        try{
            console.log(URL);
            const res=await fetch(`${URL}/api/auth/login`,{
                method :"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username,password}),
                credentials: 'include'
            })

            const data=await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            console.log(data);
            
            localStorage.setItem("userInfo",JSON.stringify(data))
            setAuthUser(data)
        }
        catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
        }
        
    };
    return{loading,login};
}

export default useLogin;

function handleInputError({username,password}){

    if(!username || !password){
        alert("All fields are required")
        return false
    }
    return true
}