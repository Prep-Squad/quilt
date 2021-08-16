import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'

export default function Routes(props) {
    console.log('props in routes: ', props)
    return (
        <div>
            <Switch>
            <Route exact path='/' component={Home} />
           

            <Route exact path='/signup' component={SignUp} />
            

            </Switch>
           
        </div>
    )
}
