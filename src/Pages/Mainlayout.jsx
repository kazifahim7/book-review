import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>


            <div className="mt-5">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayOut;