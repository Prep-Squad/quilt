import React, { useState } from 'react';
import { auth } from '../firebase/firebaseIndex';
import Error from './Error';
import { useHistory } from 'react-router-dom';

function SignUp(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (error !== '') setError('');
    if (password !== password2) {
      setError(`Ya passwords dont match ya dingus!`);
    }
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        history.push('/login');
      })
      .catch((error) => {
        console.log(error);
        if (error.code) {
          if (error.code.includes('auth/weak-password')) {
            setError(
              `It is not the strength of the body, but the strength of the spirit. ...and also your password. Please make it stronger.`
            );
          } else if (error.code.includes('auth/email-already-in-use')) {
            setError('Email is already in use!');
          } else {
            setError('Unable to register.');
          }
        }
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter a username</label>
        <input
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="email">Enter your email</label>
        <input
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="password2">Confirm your password</label>
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={(event) => setPassword2(event.target.value)}
        />
        <button>Submit</button>
        <Error error={error} />
      </form>
    </div>
  );
}

export default SignUp;
