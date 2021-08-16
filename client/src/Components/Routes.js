import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import Navbar from './Navbar'
import Login from './Login'


export default function Routes(props) {
    console.log('props in routes: ', props)
    return (
        <div>
            <Navbar/>
            <Switch>
            <Route exact path='/' component={Home} />        
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />


            </Switch>
           
        </div>
    )
}
