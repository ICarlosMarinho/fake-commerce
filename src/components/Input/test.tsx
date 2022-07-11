import { screen, render, fireEvent } from "@testing-library/react";
import Input from ".";

describe("Tests Input component", () => {
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

  it("Should render error message on input blur", () => {
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
    screen.getByText(message);
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

    expect(error).toBeNull();
  });
});
