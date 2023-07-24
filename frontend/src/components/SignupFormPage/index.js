import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as sessionFunctions from '../../store/session'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"



export default function LoginFormPage(){
    const dispatch = useDispatch()
    const history = useHistory()

    const MONTHS = [
        `January`,
        `February`,
        `March`,
        `April`,
        `May`,
        `June`,
        `July`,
        `August`,
        `September`,
        `October`,
        `November`,
        `December`
    ]

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [errors, setErrors] = useState([])

    //redirects to homepage if signin is called while logged in
    if (sessionStorage.currentUser) history.push("/")

    useEffect(() => {
        setUsername(username)
    },[username])

    // useEffect(() => {
    //     setMonth(month);

    //     if(!month){
    //         setErrors(errors.push('Select your birth month.'))
    //     } else if (errors.includes('Select your birth month.')){
    //         let i = errors.indexOf('Select your birth month.')
    //         setErrors(errors.splice(i, 1))
    //     }

    //   }, [month]);
    
    // useEffect(() => {
    //     setDay(day);

    //     if((!(day.isInteger) || day > 31) ||
    //     (["April", "June", "September", "November"].includes(month) && day > 30) ||
    //     (year && month === "February" && year%4 === 0 && day>29) || 
    //     (month === "February" && day>28)){
    //         setErrors(errors.push('Enter a valid day of the month.'))
    //     } else if(errors.includes('Enter a valid day of the month.')){
    //         let i = errors.indexOf('Enter a valid day of the month.')
    //         setErrors(errors.splice(i, 1))
    //     }
    //   }, [day]);

    // useEffect(() => {
    //     setYear(year)

    //     if(!(year.isInteger)|| year>2023 || year < 1910){
    //         setErrors(errors.push('Enter a valid year.'))
    //     } else if (errors.includes('Enter a valid year.')){
    //         let i = errors.indexOf('Enter a valid year.')
    //         setErrors(errors.splice(i, 1))
    //     }
    // },[year])


    function handleSubmit(e){
        e.preventDefault()
        // debugger
        const birthday = new Date()
        birthday.setFullYear(year, month, day)
        dispatch(sessionFunctions.signup({username, password, email, birthday}))
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
        console.log(errors)
    }

    function eleError(element){
        const eleError = []
        if(errors[0]){
            errors[0].forEach((error) => {
                if(error.toUpperCase().includes(element.toUpperCase())){
                    eleError.push(error)
                }
            });
        }
        // debugger
        if(eleError){
            return <div className="red-error-message">{eleError[0]}</div>
        } else {
            return []
        }
    }



        return(
            <div className="signup-form-holder">
                <h2>Sign up for free to start listening.</h2>
                <div className="light-grey-line"></div>
                <form onSubmit={handleSubmit} className="signup-form">
                {/* {errors.map((error) => <div><p>{error}</p></div>)} */}
                    <label className="signup-email signup-text-letters"> What's your email address?
                        <br/>
                        <input 
                            type="text" value={email} placeholder= 'Enter your email.' 
                            onChange={(e) => setEmail(e.target.value)} required>
                        </input>
                    </label>
                    {eleError("email")}
                    <br/>
                    <label className="signup-password signup-text-letters"> Create a password
                        <br/>
                        <input 
                            type="text" value={password} placeholder="Create a password."
                            onChange={(e) => setPassword(e.target.value)} required>
                        </input>
                    </label>
                    {eleError("password")}
                    <br/>
                    <label className="signup-username signup-text-letters"> What should we call you?
                        <br/>
                        <input 
                            type="text" value={username} placeholder= 'Enter a profile name.'
                            onChange={(e) => setUsername(e.target.value)} required>
                        </input>
                    </label>
                    {eleError("username")}
                    <br/>
                    <p className="whats-your-birthday-p">What's your date of birth?</p>
                    <label className="birthday-div">
                    <br/>
                        <label className= "month-label">Month
                            <select 
                                id="signup-month" className="signup-month" 
                                onChange={(e) => setMonth(e.target.value)}
                            >
                                <option value="">Month</option>
                                {MONTHS.map((month,i) => (
                                    <option key = {month} value={i}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <br/>

                        <label id="signup-day"> Day
                            <br/>
                            <input 
                                type="text" value={day} placeholder="DD"
                                onChange={(e) => setDay(e.target.value)}>
                            </input>
                        </label>

                        <label id="signup-year"> Year
                            <br/>
                            <input 
                                type="text" value={year} placeholder="YYYY"
                                onChange={(e) => setYear(e.target.value)}>
                            </input>
                        </label>
                        {eleError("day")}
                        {eleError('month')}
                        {eleError('year')}
                        {eleError("date")}
                    </label>
                   
        
                    <button type="submit">Sign Up</button>
                </form>
                <p className="blackText">{"Have an account?  "}  
                    <Link to="/login">Log in.</Link>
                </p>
            </div>
        )


}