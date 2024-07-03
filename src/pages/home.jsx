import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component
{
    render()
    {
        return(
            <>
            <h1>home.jsx</h1>
            <br/>
            <Link to='/'><button onClick={()=>{localStorage.setItem('isLogin',false)}}>Logout</button></Link>
            </>
        )
    }
}
export default Home