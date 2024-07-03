import { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './pages/login'
import Home from './pages/home'

class App extends Component {
    constructor() {
        super()
        localStorage.setItem('isLogin', localStorage.hasOwnProperty('isLogin')? localStorage.getItem('isLogin'): false)
    }

    render() {
        console.log(typeof localStorage.getItem('isLogin'));
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path='/' render={() => localStorage.getItem('isLogin')==='true' ? <Redirect to={`/home`} /> : <Login/>} />
                        <Route path='/home' render={() => localStorage.getItem('isLogin')==='true' ? <Home/> : <Redirect to={`/`} />} />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App