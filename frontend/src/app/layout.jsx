import Sidebar from "@/components/layout/Sidebar"
import Navbar from "@/components/layout/Navbar"

function Layout({children , user}){
    return (
        <div className="flex">
            <Sidebar user={false}/>
            <div className="flex-1">
                <Navbar user={user}/>
                <div className="p-4">{children}</div>
            </div>
        </div>
    )
}
export default Layout;