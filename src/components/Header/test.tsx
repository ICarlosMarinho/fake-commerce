import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from ".";

describe("Header component | Unit test", () => {
  const makeSut = () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  };

  it("Should render app logo", () => {
    const alt = "App logo, containing a dollar sign inside a circle and the words Fake Commerce.";

    makeSut();

    const logo = screen.getByAltText(alt);

    expect(logo).toBeInTheDocument();
  });

  it("Should render cart button", () => {
    const text = "Cart";

    makeSut();

    const button = screen.getByText(text);

    expect(button).toBeInTheDocument();
  });
});
