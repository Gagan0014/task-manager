import { useState }  from "react";

import login from "../../services/authServise"

export default function useAuth(){
    const [user, setUser ] = useState(null);
    
    const loginUser = async (data)=>{
        const res = await login(data);
        localStorage.setItem("token",res.data.token);
        setUser(res.data.user);
    };
    return { user , loginUser};
}