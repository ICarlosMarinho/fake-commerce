import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Logo from ".";

describe("Logo component | Unit test", () => {
  it("Should render logo component", () => {
    const alt = "App logo, containing a dollar sign inside a circle and the words Fake Commerce.";

    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const logo = screen.getByAltText(alt);

    expect(logo).toBeInTheDocument();
  });
});
