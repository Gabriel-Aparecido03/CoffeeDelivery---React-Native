import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart() {
  const hook = useContext(CartContext)

  return hook
}