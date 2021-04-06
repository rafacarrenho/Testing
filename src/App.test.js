import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("should button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });

  // expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // Click button
  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the button text to be 'Change to red'
  expect(button).toHaveTextContent("Change to Medium Violet Red");
});

test("Should initial condition", () => {
  render(<App />);
  // check that the button start out enabled
  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });

  expect(button).toBeEnabled();
  // check that the checkbox start out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Should button to be disabled when checkbox is checked", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: /change to Midnight Blue/i,
  });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  // check the checkbox to disable button
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({
    backgroundColor: "grey",
  });

  // uncheck the checkbox to enable  button
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

describe("Spaces before camel-case capital Letters", () => {
  test("Works for no inner capital letter", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Work for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Work for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
