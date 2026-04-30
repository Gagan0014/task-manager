import { link } from "react-router-dom"

function Sidebar({user}){
    return (
        <div className="flex justify-between p-4 bg-gray-100">
            <h1>TaskManager</h1>
            <div>
                <span>{useReducer.name}</span>
                <button className="m1-4">Logout</button>
            </div>
        </div>
    )
}
export default Sidebar;