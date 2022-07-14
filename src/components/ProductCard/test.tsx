import { screen, render, fireEvent } from "@testing-library/react";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import ProductCard from ".";
import { getPrice } from "../../common/utils";

describe("ProductCard component | Unit test", () => {
  const makeSut = () => {
    const history = createMemoryHistory({
      initialEntries: ["/"]
    });

    const product = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120
      }
    };

    const result = render(
      <Router history={history}>
        <ProductCard product={product} />
      </Router>
    );

    return { result, product, history };
  };

  it("Should render product props", () => {
    const { product } = makeSut();
    const image = screen.getByAltText("Image showing product details");
    const title = screen.getByRole("heading", { level: 3 });
    const price = screen.getByRole("heading", { level: 4 });

    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toEqual(product.image);

    expect(title).toBeInTheDocument();

    expect(price).toBeInTheDocument();
    expect(price.textContent).toEqual(getPrice(product.price));
  });

  it("Should render add to cart button", () => {
    makeSut();

    const button = screen.getByText("Add to cart");

    expect(button).toBeInTheDocument();
  });

  it("Should navigate to product details page", () => {
    const { product, history } = makeSut();

    const link = screen.getByRole("link");

    fireEvent.click(link);

    expect(history.location.pathname).toEqual(`/product/${product.id}`);
  });
});
