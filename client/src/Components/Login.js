import React, { useState } from 'react';
import Error from './Error';
import { auth } from '../firebase/firebaseIndex';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { CHECK_AUTH } from '../store/auth';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (error !== '') setError('');
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        window.localStorage.setItem('id', `${result.user.uid}`);
        props.checkUser();
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        setError('Not able to sign in! Please try again :)');
      });
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password"> Password: </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Error error={error} />
        <button>Login!</button>
      </form>
      <p>If you're not already a user, click here: </p>
      <Link to="/signup"> Sign Up!</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => dispatch({ type: CHECK_AUTH }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
