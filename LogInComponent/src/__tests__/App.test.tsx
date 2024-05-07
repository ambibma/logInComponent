import '@testing-library/jest-dom';
import {render} from "@testing-library/react";
import App from "../App";



test("Renders the Main page", () => {
  render(<App/>)
  expect(true).toBeTruthy()
})

