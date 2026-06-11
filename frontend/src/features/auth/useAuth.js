import { useState }  from "react";

import { login } from "../../services/authServise"

export default function useAuth(){
    const [user, setUser ] = useState(null);
    
    const loginUser = async (data)=>{
        const res = await login(data);
        console.log("res", res);
        console.log("res.data", res.data);
        console.log("user", res.data.user);
        localStorage.setItem("token",res.data.token);
        setUser(res.data.user);
    };
    return { user , loginUser};
}