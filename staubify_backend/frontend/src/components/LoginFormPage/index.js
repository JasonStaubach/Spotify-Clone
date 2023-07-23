import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionFunctions from '../../store/session'
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"



export default function LoginFormPage(){
    const dispatch = useDispatch()
    const history = useHistory()
    
    const [username, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    
    if (sessionStorage.currentUser) history.push("/")
    
    function handleSubmit(e){
        e.preventDefault()
        // debugger
        dispatch(sessionFunctions.login({username, password}))
        .catch(async (res) => {
            let data
            try {
              data = await res.clone().json();
            } catch {
              data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else history.push("/");
          })
        
        // return redirect("/")
        //error handling later
    }

    function demoLogin(e){
        e.preventDefault()
        dispatch(sessionFunctions.login({
            username: "Demo",
            password: "password"
        })).then(() => history.push(""))
    }

   
    
    return(
        <div className="outer-login-page">
            <div className="login-top-bar"></div>
            <div className="inner-login-page">
                <h1 className="login-header">Log In to Staubify</h1>
                {errors.map((error) => <div className="login-error"><p>{error}</p></div>)}
                <div className="grey-line"/>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label id="login-username"> Email or username
                        <br/>
                        <input 
                            type="text" value={username} placeholder="Email or username"
                            onChange={(e) => setCredential(e.target.value)} required
                        />
                    </label>
                    <br/>

                    <label id="login-password"> Password
                        <br/>
                        <input type="password" value={password} placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} required/>
                    </label>
                    <br/>
                    <button className= "login-page-submit" type="submit">Log In</button>
                    <button 
                        className= "login-page-submit" id="demo-login-button" 
                        onClick={demoLogin}>Demo Log In
                    </button>
                </form>
                <div className="grey-line"/>
                <p className="greyText">Don't have an account?
                    <Link to="/signup">Sign up for Spotify</Link>
                </p>
            </div>
        </div>
    )
}