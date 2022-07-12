import { screen, render, getByText } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from ".";
import { getPrice } from "../../common/utils";

describe("ProductCard component | Unit test", () => {
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

  const makeSut = () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );
  };

  it("Should render product img", () => {
    const alt = "Image showing product details";

    makeSut();

    const image = screen.getByAltText(alt);

    expect(image).toBeInTheDocument();
  });

  it("Should render product title", () => {
    makeSut();

    const title = screen.getByText(product.title);

    expect(title).toBeInTheDocument();
  });

  it("Should render formatted product price", () => {
    makeSut();

    const price = screen.getByText(getPrice(product.price));

    expect(price).toBeInTheDocument();
  });

  it("Should render add to cart button", () => {
    const text = "Add to cart";

    makeSut();

    const button = screen.getByText(text);

    expect(button).toBeInTheDocument();
  });
});
