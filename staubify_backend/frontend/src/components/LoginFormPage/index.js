import { useDispatch, useSelector } from "react-redux";
import * as sessionFunctions from '../../store/session'


function LoginFormPage(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        return dispatch(sessionActions.login({credential, password}))

        //error handling later
    }
    return(
        <form onSubmit={handleSubmit}>
            <label> Username/Email
                <input type="text" value={credential}
            </label>
        </form>
    )
}