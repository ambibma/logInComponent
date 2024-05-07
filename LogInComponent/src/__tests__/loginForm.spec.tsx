import { render,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/'; 
import LoginForm from '../components/loginForm';

describe('Login Form component', () => {
  it('renders username and password fields with a login button', ()=>{
    const { getByPlaceholderText, getByRole } = render(<LoginForm onLogin={() => {}} />);
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Login' })).toBeInTheDocument();
  })
  it('calls onLogin function when clicking Login button with valid credentials', () => {
    const onLoginMock = jest.fn();
    const { getByRole, getByPlaceholderText } = render(<LoginForm onLogin={onLoginMock} />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByRole('button', { name: 'Login' });
    
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(loginButton);

    expect(onLoginMock).toHaveBeenCalled();

  });
  it('does not call onLogin function when clicking the Login button with empty inputs', () => {
    const onLoginMock = jest.fn();
    const { getByRole } = render(<LoginForm onLogin={onLoginMock} />);
    const loginButton = getByRole('button', {name: 'Login'});

    fireEvent.click(loginButton);

    expect(onLoginMock).not.toHaveBeenCalled();

  });

});
