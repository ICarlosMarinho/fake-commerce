import { screen, render, fireEvent } from "@testing-library/react";
import Input from ".";

describe("Input | Unit test", () => {
  it("Should render a label and an input element associated with it", () => {
    const labelText = "Test input";

    render(<Input id="test-input" labelText={labelText} />);
    screen.getByLabelText(labelText);
  });

  it("Should call onValueChange with input element value", () => {
    const labelText = "Test input";
    const value = "Testing input component...";
    const onValueChange = jest.fn((value) => null);

    render(<Input id="test-input" labelText={labelText} onValueChange={onValueChange} />);

    const input = screen.getByLabelText(labelText);

    fireEvent.change(input, { target: { value } });

    expect(onValueChange).toHaveBeenCalledWith(value);
  });

  it("Should not render error message with a valid input value", () => {
    const labelText = "Test input";
    const message = "Value is required";

    render(
      <Input
        id="test-input"
        labelText={labelText}
        constraints={[{ validator: (value) => value.length > 0, message }]}
      />
    );

    const input = screen.getByLabelText(labelText);

    fireEvent.change(input, { target: { value: "A valid input value..." } });
    fireEvent.blur(input);

    const error = screen.queryByText(message);

    expect(error).not.toBeInTheDocument();
  });

  it("Should render one error message at a time on input blur", () => {
    const labelText = "Test input";

    render(
      <Input
        id="test-input"
        labelText={labelText}
        constraints={[
          {
            validator: (value) => value.length > 10,
            message: "Error: value must have at least 10 characters"
          },
          { validator: (value) => /\d+/.test(value), message: "Error: value must have numeric characters" }
        ]}
      />
    );

    const input = screen.getByLabelText(labelText);

    fireEvent.change(input, { target: { value: "inv..." } });
    fireEvent.blur(input);

    const errors = screen.getAllByText("Error", { exact: false });

    expect(errors).toHaveLength(1);
  });

  it("Should remove error message from screen on input focus", () => {
    const labelText = "Test input";
    const message = "Value is required";

    render(
      <Input
        id="test-input"
        labelText={labelText}
        constraints={[{ validator: (value) => value.length > 0, message }]}
      />
    );

    const input = screen.getByLabelText(labelText);

    fireEvent.blur(input);
    fireEvent.focus(input);

    const error = screen.queryByText(message);

    expect(error).not.toBeInTheDocument();
  });
});
