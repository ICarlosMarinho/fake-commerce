import { screen, render, fireEvent } from "@testing-library/react";
import Button from ".";

describe("Tests Button component", () => {
  it("Should render a button with specified text", () => {
    const text = "Click me!";

    render(<Button>{text}</Button>);

    screen.getByText(text);
  });

  it("Should call a function on button click", () => {
    const handleClick = jest.fn();
    const text = "Click me!";

    render(<Button onClick={handleClick}>Click me!</Button>);

    const button = screen.getByText(text);

    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });
});
