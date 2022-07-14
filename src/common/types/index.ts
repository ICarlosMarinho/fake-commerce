import { ReactNode } from "react";

export type WithChildren<T = {}> = { children: ReactNode } & T;

export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};
