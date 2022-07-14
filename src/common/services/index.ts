import axios from "axios";
import { Product } from "../types";

const client = axios.create({
  baseURL: process.env.API_URL as string,
  timeout: 10000
});

export const getProducts = async () => {
  try {
    const { data } = await client.get<Product[]>("/products");

    return data;
  } catch (error) {
    return [];
  }
};

export const getProductById = async (id: number) => {
  try {
    const { data } = await client.get<Product>(`/products/${id}`);

    return data;
  } catch (error) {
    return null;
  }
};
