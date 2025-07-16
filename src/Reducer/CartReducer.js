let newId = 0;

export function CartReducer(stateCart, action) {
    let gameExit = null

    switch (action.type) {
        case 'ADD_CART':
            gameExit = stateCart.find(game => game.name === action.name)
            if (gameExit) {
                if (action.stock > gameExit.amount) {
                    return stateCart.map(game => game.name === action.name ? {
                        ...game,
                        amount: game.amount + 1,
                        totalPrice: game.totalPrice + game.price,

                    } : game)
                } else {
                    return stateCart
                }
            } else {
                const newGameInCart = {
                    id: newId++,
                    name: action.name,
                    image: action.image,
                    amount: 1,
                    price: action.price,
                    totalPrice: action.price,
                }

                return [...stateCart, newGameInCart]
            }
        case 'DELETE_AMOUNT':
            return stateCart.map(game => game.id === action.id ? { ...game, amount: game.amount - 1 } : game).filter(game => game.amount > 0)
        case 'ADD_AMOUNT':
            return stateCart.map(game => game.id === action.id ? { ...game, amount: game.amount + 1 } : game)
        case 'REMOVE_PROD':
            return stateCart.filter(game => game.id !== action.id)
        case 'BUY_CART':
            return []
        default:
            return stateCart
    }
}