
import HeaderBar from "../HeaderBar"
import SideBar from "../SideBar"

export default function HomePage(){


    function resizer(){
        debugger
        let leftBarSize = 90
        let element = document.getElementById("home-page-right");
        element.style.width = `${100-leftBarSize}%`;
        element = document.getElementById("side-bar")
        element.style.width = `${leftBarSize}%`;
    }

    return(
        <>
            <div id="home-page">
                <div id="fixed-page">
                    <SideBar/>
                    <div className="resizer-bar"/>
                    <div id="home-page-right">
                        <HeaderBar/>
                    </div>
                </div>
            </div>
        {resizer()}
        </>
    )

}
    