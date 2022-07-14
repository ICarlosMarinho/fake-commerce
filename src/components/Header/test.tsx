import { screen, render, fireEvent } from "@testing-library/react";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Header from ".";

describe("Header component | Unit test", () => {
  const makeSut = (initialEntry: "/" | "/cart") => {
    const history = createMemoryHistory({
      initialEntries: [initialEntry]
    });

    const result = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    return { result, history };
  };

  it("Should render app logo", () => {
    const alt = "App logo, containing a dollar sign inside a circle and the words Fake Commerce.";

    makeSut("/");

    const logo = screen.getByAltText(alt);

    expect(logo).toBeInTheDocument();
  });

  it("Should render cart button", () => {
    const text = "Cart";

    makeSut("/");

    const button = screen.getByText(text);

    expect(button).toBeInTheDocument();
  });

  it("Should navigate to homepage on click", () => {
    const { history } = makeSut("/cart");

    const link = screen.getByRole("link");

    fireEvent.click(link);

    expect(history.location.pathname).toBe("/");
  });

  it("Should navigate to cart on click", () => {
    const { history } = makeSut("/");

    const button = screen.getByText("Cart");

    fireEvent.click(button);

    expect(history.location.pathname).toBe("/cart");
  });
});
