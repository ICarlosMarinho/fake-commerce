export const getPrice = (value: number) =>
  value.toLocaleString("en-us", { style: "currency", currency: "USD" });
