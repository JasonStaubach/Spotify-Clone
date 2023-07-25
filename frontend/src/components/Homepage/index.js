
import HeaderBar from "../HeaderBar"
import SideBar from "../SideBar"

export default function HomePage(){
    return(
        <div id="home-page">
            <SideBar/>
            <div className="resizer-bar"/>
            <div id="home-page-right">
                <HeaderBar/>
            </div>
        </div>
    )

}
    