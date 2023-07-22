import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionFunctions from '../../store/session'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"



export default function LoginFormPage(){
    const dispatch = useDispatch()
    const history = useHistory()
    
    const [username, setCredential] = useState('')
    const [password, setPassword] = useState('')
    
    const sessionUser = useSelector(state => state.session.user)
    if (sessionUser) <Redirect to="/" />
    
    function handleSubmit(e){
        e.preventDefault()
        // debugger
        dispatch(sessionFunctions.login({username, password})).then(() => history.push("/"))
        
        // return redirect("/")
        //error handling later
    }

   
    
    return(
        <div className="outer-login-page">
            <div className="login-top-bar"></div>
            <div className="inner-login-page">
                <h1>Log In to Staubify</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label id="login-username"> Email or username
                        <br/>
                        <input 
                            type="text" value={username} placeholder="Email or username"
                            onChange={(e) => setCredential(e.target.value)}
                        />
                    </label>
                    <br/>

                    <label id="login-password"> Password
                        <br/>
                        <input type="password" value={password} placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <br/>
                    <button className= "login-page-submit" type="submit">Log In</button>
                </form>
                <p className="greyText">Don't have an account?
                    <Link to="/signup">Sign up for Spotify</Link>
                </p>
            </div>
        </div>
    )
}