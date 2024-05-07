import '@testing-library/jest-dom';
import {render} from "@testing-library/react";
import App from "../App";
import LoginForm from '../components/loginForm';


test("Renders the Main page", () => {
  render(<App/>)
  expect(true).toBeTruthy()
})

describe('Renders Login form on Page', () => {
  render(<LoginForm onLogin={()=>{}}/>);
  expect(true).toBeTruthy
})