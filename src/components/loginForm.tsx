import React, { useState } from 'react';
import '../styles/loginForm.css' 


interface LoginFormProps {
  onLogin: () => void;
}

interface LoginFormState {
  username: string;
  password: string;
}



const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {

  const [state, setState] = useState<LoginFormState>({
    username: '',
    password: ''
  });

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, username: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, password: event.target.value });
  }
  const handleLogin = () => {
    if (state.username && state.password) {
      onLogin();
     }
    }
  
  return (
    <>
    <div className='form-login'>
      <h1>Login</h1>
      <input
        type="text"
        value={state.username} 
        onChange={handleUsernameChange} 
        placeholder='Username' 
        />
      <input 
        type="password"
        value={state.password}
        onChange={handlePasswordChange}
        placeholder='Password'
        />
      <button onClick={handleLogin}>Login</button>
    </div>
    </>
  )

}

export default LoginForm;