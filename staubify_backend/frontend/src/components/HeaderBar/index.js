import { useDispatch, useSelector } from "react-redux";
import * as sessionFunctions from '../../store/session'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

export default function HeaderBar(){
    const dispatch = useDispatch()
    const history = useHistory()
    // const activeUser = useSelector(state => state.session.currentUser)

    function handleLogout(e){
        e.preventDefault()
        dispatch(sessionFunctions.logout()).then(() => history.push("/login"))
    }

    return(
        <>
            <h1>Temp Splash Page</h1>
          <Link to="/login">Login</Link>
          {sessionStorage.currentUser ? <button onClick={handleLogout}>Logout</button> : null}
        </>
    )
}
{if(sessionStorage.currentUser){<button>Logout</button>}}