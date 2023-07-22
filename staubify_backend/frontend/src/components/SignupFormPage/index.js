import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionFunctions from '../../store/session'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom"



export default function LoginFormPage(){
    const dispatch = useDispatch()
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [day, setDay] = useState(1)
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(1)

    useEffect(()=> {
        console.log(day)
    },[day])

    function handleSubmit(e){
        e.preventDefault()
        // debugger
        //dispatch(sessionFunctions.signup({username, password, email, date: Date.new(year,month,day)})).then(() => history.push("/"))
    }

        //error handling later
        return(
            <form onSubmit={handleSubmit}>
                <label id="signup-username"> Username
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
    
                <label id="signup-password"> Password
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <label id="signup-email"> Email
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <select onChange={(e) => setDay(e.target.value)}>Day
                    <option value="">Select a day</option>
                    {Array(31).fill().map((_,i) => (
                        <option key = {i} value={i+1}>
                            {i+1}
                        </option>
                    ))}
                </select>

                <select onChange={(e) => setDay(e.target.value)}>Month
                    <option value="">Select a Month</option>
                    {Array(12).fill().map((_,i) => (
                        <option key = {i} value={i+1}>
                            {i+1}
                        </option>
                    ))}
                </select>
    
                <button type="submit">Sign Up</button>
            </form>
        )


}