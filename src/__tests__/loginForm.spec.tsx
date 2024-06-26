import { render,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/'; 
import LoginForm from '../components/loginForm';

describe('Login Form component', () => {
  it('renders username and password fields with a login button', ()=>{
    const { getByPlaceholderText, getByRole } = render(<LoginForm onLogin={() => {}} />);
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Login' })).toBeInTheDocument();
  
  });
  
  it('does not call onLogin function when clicking the Login button with empty inputs', () => {
    const onLoginMock = jest.fn();
    const { getByRole } = render(<LoginForm onLogin={onLoginMock} />);
    const loginButton = getByRole('button', {name: 'Login'});

    fireEvent.click(loginButton);

    expect(onLoginMock).not.toHaveBeenCalled();

  });

  it('updates the state when typing in the username input', () => {
    const { getByPlaceholderText } = render(<LoginForm onLogin={() => {}} />);
    const usernameInput = getByPlaceholderText('Username');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });

    expect(usernameInput).toHaveValue('testuser');
  });
  it('updates the state when typing in the password input', () => {
    const { getByPlaceholderText } = render(<LoginForm onLogin={() => {}} />);
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(passwordInput).toHaveValue('testpassword');
  });

  it('calls onLogin function when clicking the Login button with valid credentials', () => {
    const onLoginMock = jest.fn();
    const { getByRole, getByPlaceholderText } = render(<LoginForm onLogin={onLoginMock} />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByRole('button', {name: 'Login'});

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(loginButton);

    expect(onLoginMock).toHaveBeenCalledTimes(1);
  });

});
