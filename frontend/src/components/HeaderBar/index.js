import { useDispatch, useSelector } from "react-redux";
import * as sessionFunctions from '../../store/session'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

export default function HeaderBar({headBarRef, invisHeadBarRef}){
    const dispatch = useDispatch()
    const history = useHistory()
    // const activeUser = useSelector(state => state.session.currentUser)

    function handleLogout(e){
        e.preventDefault()
        dispatch(sessionFunctions.logout()).then(() => history.push("/login"))
    }

    return(
        <>
            <div id="header-bar" className="header-bar" ref={headBarRef}/>
            <div id="invis-header-bar" className="header-bar" ref={invisHeadBarRef}>
                {sessionStorage.currentUser ? null : <button className="log login-head-button"><Link to="/login">Log In</Link></button>}
                {sessionStorage.currentUser ? null : <button className="log signup-head-button"><Link to="/signup">Sign Up</Link></button>}
                {sessionStorage.currentUser ? <button className="log logout-head-button" onClick={handleLogout}>Logout</button> : null}
            </div>
        </>
    )
}
{if(sessionStorage.currentUser){<button>Logout</button>}}