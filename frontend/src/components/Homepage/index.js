
import { useEffect } from "react";
import HeaderBar from "../HeaderBar"
import SideBar from "../SideBar"
import { useDispatch, useSelector } from "react-redux";

export default function HomePage(){
    const dispatch = useDispatch()

    const resizer = () => {
        let leftBarSize = 10
        debugger
        let element = document.getElementById("home-page-right");
        element.style.width = `${100-leftBarSize}%`;
        element = document.getElementById("side-bar")
        element.style.width = `${leftBarSize}%`;
        // element = document.getElementsByClassName("header-bar");
        // element.style.width = `${leftBarSize}%`;
    }

    return(
        <>
            <div id="home-page">
                <div id="fixed-page">
                    <SideBar/>
                    <div className="resizer-bar" onMouseDown={resizer}/>
                    <div id="home-page-right">
                        <HeaderBar/>
                    </div>
                </div>
            </div>
        </>
    )

}
    