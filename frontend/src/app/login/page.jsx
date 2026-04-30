import { useNavigate } from "react-router-dom";
import { login } from "@/services/authServise"
import { useState } from "react";

function Login(){
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const res = await login({email,password});

            const user = res.data.user;
            if (!user) {
            console.log("User missing in response");
                return;
            }

      
            localStorage.setItem("token", res.data.token);

            if(user.role=="admin"){
                navigate("/admin");
            }else{
                navigate("/tasks");
            }
        }catch(err){
            console.log("LOGIN ERROR:", err.response?.data || err.message);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
        <input
        placeholder="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />
        <input 
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>        
        </form>
    );
}
console.log("Calling:", "/auth/login");
export default Login;