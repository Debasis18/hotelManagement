import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"

function Applayout() {
    return (
        <div className="flex h-screen bg-white">
            <Sidebar />
            <div className="flex flex-col flex-1 w-0 ">
                <Header />
                <main className="flex-1 mt-10 relative  mx-auto w-11/12 p-10 overflow-x-scroll">
                    <Outlet />
                </main>
            </div>
        </div>

    )
}

export default Applayout