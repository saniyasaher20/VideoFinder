import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex py-3 gap-6">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body; 