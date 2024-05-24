import LeftBar from "../components/navBar"
import { Outlet } from "react-router-dom";

function MainPage() {


    return (
        <>
            <LeftBar />
            <Outlet />
        </>
    )
}


export default MainPage