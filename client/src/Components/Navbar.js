import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebaseIndex';
import { connect } from 'react-redux';
import { CHECK_AUTH } from '../store/auth';

function Navbar(props) {
  console.log('nav props: ', props);

  const history = useHistory();

  async function Logout() {
    await auth
      .signOut()
      .then(() => {
        props.clearUser();
        history.push('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      {props.auth ? (
        <nav id="navbar">
          <Link to="/" onClick={Logout}>
            Logout
          </Link>
        </nav>
      ) : (
        <nav id="navbar">
          <Link to="/signup"> Signup! </Link>
          <Link to="/login"> Login! </Link>
        </nav>
      )}
    </div>
  );
}

const mapState = (state) => ({
  auth: state.auth,
});

const mapDispatch = (dispatch) => ({
  clearUser: () => dispatch({ type: CHECK_AUTH }),
});

export default connect(mapState, mapDispatch)(Navbar);
