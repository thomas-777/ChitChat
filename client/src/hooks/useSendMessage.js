import { useState } from "react";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const URL= import.meta.env.VITE_SERVER_URL 
    const sendMessage =async ({message,receiverId}) => {
        setLoading(true);   
        try {
           
            const res = await fetch(`${URL}/api/messages/send/${receiverId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message, receiverId }),
                credentials: 'include'
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error);
            }
            return data;
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
        
    }
    return{sendMessage,loading}
}
export default useSendMessage;