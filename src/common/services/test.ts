import { rest } from "msw";
import { setupServer } from "msw/node";
import { getProductById, getProducts } from ".";

describe("Services module | Unit test", () => {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    }
  ];

  const server = setupServer(
    rest.get(`${process.env.API_URL}/products`, (_, res, ctx) => res(ctx.json(products))),
    rest.get(`${process.env.API_URL}/products/:id`, (req, res, ctx) => {
      const product = products.find(({ id }) => id === Number(req.params.id)) || null;

      return res(ctx.json(product));
    })
  );

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it("Should return an products array on request success", async () => {
    const data = await getProducts();

    expect(data).toEqual(products);
  });

  it("Should return an empty array on request fail", async () => {
    server.use(rest.get(`${process.env.API_URL}/products`, (_, res, ctx) => res(ctx.status(500))));

    const data = await getProducts();

    expect(data).toHaveLength(0);
  });

  it("Should return a product by its id on success", async () => {
    const data = await getProductById(1);

    expect(data).toEqual(products[0]);
  });

  it("Should return null on request fail", async () => {
    server.use(rest.get(`${process.env.API_URL}/products/:id`, (_, res, ctx) => res(ctx.status(500))));

    const data = await getProductById(1);

    expect(data).toBeNull();
  });
});
