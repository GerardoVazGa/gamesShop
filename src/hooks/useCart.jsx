import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export function useCart() {
    const cartContex = useContext(CartContext)
    if(cartContex === null) {
        throw Error('El contexto cart debe de estar usandose dentro de un CartProvider')
    }

    return cartContex
}