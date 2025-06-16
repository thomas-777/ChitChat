import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

const useLogout=()=>{
    const [loading,setloading]=useState(false)
    const {setAuthUser}=useAuthContext()
    const URL= import.meta.env.VITE_SERVER_URL 
    const logout =async()=>{
        setloading(true);
        try {
            const res=await fetch( `${URL}/api/auth/logout`,{
                method:"POST",
                headers: {"Content-Type":"application/json"}

            });
            const data=await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            console.log("Logged out")
            
            localStorage.removeItem("userInfo")

            setAuthUser(null)
        } catch (error) {
            
        }
        finally{
            setloading(false);
        }
    }
    return {loading,logout}
}
export default useLogout;