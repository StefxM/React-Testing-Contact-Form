import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("form", async () => {
  const result = render(<ContactForm/>)
} )

test("first name", () => {
  const { getByText } = render(<App/>);
  const element = getByText(/first name/i);
  expect(element).toBeInTheDocument();
});

test("email", () => {
  const { getByText } = render(<App/>);
  const elementE = getByText(/email/i);
  expect(elementE).toBeInTheDocument();
})