import { ReactNode } from "react";

export type WithChildren<T = {}> = { children: ReactNode } & T;
