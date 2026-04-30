import {Link} from "react-router-dom"

function Sidebar({user}){
    return(
        <div className="w-64 h-screen bg-gray-900 text-white p-4">
            <h2 className="text-xl mb-4">Dashboard</h2>
            <Link to="/tasks">Tasks</Link>

            {user.role==="admin" &&(
                <Link to = "/admin" className="block mt-2">Admin</Link>
            )}
        </div>
    )
}