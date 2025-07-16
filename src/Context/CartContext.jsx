import { useReducer, useEffect, useState } from "react";
import { createContext } from "react";
import { CartReducer } from "../Reducer/CartReducer";
import { useVideoGames } from "../hooks/useVideogames";

export const CartContext = createContext()

const initialCart = JSON.parse(localStorage.getItem('gameCartList')) || []

export function CartProvider({ children }) {
    // This is where you would implement the logic for managing the cart state
    // For example, you could use useReducer or useState to manage the cart items
    const [cartItems, dispatch] = useReducer(CartReducer, initialCart);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { updateStockProduct } = useVideoGames();
    
    useEffect(() => {
        if(cartItems.length > 0) {
            localStorage.setItem('gameCartList', JSON.stringify(cartItems));
        }else {
            localStorage.removeItem('gameCartList');
        }
    }, [cartItems])

    const handleAddCart = (game) => {
        const { name, imageGame, price, stock } = game;
        dispatch({ type: 'ADD_CART', name, image: imageGame, price, stock });
        setIsCartOpen(true);
    }

    const handleDelete = (id) => {
        dispatch({ type: 'REMOVE_PROD', id });
    }

    const handleDeleteAmount = (id) => {
        dispatch({ type: 'DELETE_AMOUNT', id });
    }

    const handleAddAmount = (id) => {
        dispatch({ type: 'ADD_AMOUNT', id });
    }

    const handleBuyCart = (game) => {
        game.forEach(game => {
            updateStockProduct(game);
        });
        dispatch({ type: 'BUY_CART' });
    }

    const handleOpenCart = () => {
        setIsCartOpen(true);
    }

    const handleCloseCart = () => {
        setIsCartOpen(false);
    }

    return (
        <CartContext.Provider value={{cartItems, handleAddCart, handleDelete, handleAddAmount, handleDeleteAmount, handleBuyCart, handleOpenCart, handleCloseCart, isCartOpen}}>
            {children}
        </CartContext.Provider>
    )
}