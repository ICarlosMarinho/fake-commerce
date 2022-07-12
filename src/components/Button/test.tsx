import { screen, render } from "@testing-library/react";
import Button from ".";

describe("Button component | Unit test", () => {
  it("Should render a button with specified text", () => {
    const text = "Click me!";

    render(<Button>{text}</Button>);

    const button = screen.getByText(text);

    expect(button).toBeInTheDocument();
  });
});
