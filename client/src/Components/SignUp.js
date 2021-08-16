import React, { useState } from 'react';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  return (
    <div>
      <form>
        <label htmlFor="username">Enter a username</label>
        <input name="username" value={username} onChange={setUsername} />
        <label htmlFor="email">Enter your email</label>
        <input name="email" value={email} onChange={setEmail} />
        <label htmlFor="password">Enter your password</label>
        <input name="password" value={password} onChange={setPassword} />
        <label htmlFor="password2">Confirm your password</label>
        <input name="password2" value={password2} onChange={setPassword2} />
        <button>Submit</button>
      </form>
    </div>
  );
}
