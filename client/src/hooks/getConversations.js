import { useEffect, useState } from "react";

 
 
 const getConversations=()=>{
    const [loading,setloading]=useState(false)
    const [conversation,setConversation]=useState([])
    const URL= process.env.url 
    useEffect(()=>{
        const getConversations=async ()=>{
            setloading(true);
            try {
                const response =await fetch(`${URL}/api/users`,{
                    credentials:'include'
                })
                const data=await response.json()
                if(data.error){
                    throw new Error(data.error);
                }
                setConversation(data);
            } catch (error) {
                console.log(error)
            }
            finally{
                setloading(false)
            }
        }
        getConversations();
    },[])
    return {loading,conversation}
}

export default getConversations;