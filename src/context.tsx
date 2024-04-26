import { createContext } from "react";

const emptyData: {
  red?: string;
  blue?: string;
} = {};

export const BaseContext = createContext({
  data: emptyData,
  handleDataChange: (_: Record<string, unknown>) => {},
});
