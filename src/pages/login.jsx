import { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component
{
    render()
    {
        return(
            <>
            <h1>login.jsx</h1>
            <br/>
            <div>
                <Link to='/home'><button onClick={()=>{localStorage.setItem('isLogin',true)}}>Login</button></Link>
            </div>
            </>
        )
    }
}
export default Login