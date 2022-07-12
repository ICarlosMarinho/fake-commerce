import { getPrice } from ".";

describe("Utils module | Unit test", () => {
  it("Should return a formatted price string", () => {
    const value = 10.9;
    const price = "$10.90";

    const result = getPrice(value);

    expect(result).toBe(price);
  });
});
