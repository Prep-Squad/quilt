import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase/firebaseIndex'

export default function Navbar(props) {
    console.log('nav props: ', props)

    const history = useHistory()


    async function Logout(){
       await auth.signOut().then(()=>{
            history.push('/login')
        }).catch((error) => {
            console.log(error)
          });
        
    }
    return (
        <div >
            {props.user ? (
              <nav id='navbar'>
            <Link to='/' onClick={Logout}> Logout</Link>
            </nav>
            ) : (
                <nav id='navbar'>

                <Link to='/signup'> Signup! </Link>
                <Link to='/login'> Login! </Link>
                </nav>
            )
}
            
        </div>
    )
}
