import './Cart.css'
import { useCart } from "../../hooks/useCart"
import { CartProd } from '../CartProd/CartProd'
import { BuyIcon } from '../icons/BuyIcon'
import { CloseIcon } from '../icons/CloseIcon'

export function Cart(){
    const {cartItems, isCartOpen, handleCloseCart, handleBuyCart} = useCart()

    const sidebar = isCartOpen ? 'cart-container open' : 'cart-container'
    return(
        <>
            <div className={sidebar}>
                <section className='button-close'>
                    <button onClick={handleCloseCart}>
                        <CloseIcon color="#e20a0a" size={40} strokeWidth={2}/>
                    </button>
                </section>
                <section className='cart-products'>
                    {cartItems.map(game => (
                        <CartProd key={game.id} gameCartList={game}/>
                    ))}
                </section>
                {cartItems.length > 0 && <section className='buy-button-container'>
                    <button className='buy-button' onClick={() => handleBuyCart(cartItems)}>
                        Buy <BuyIcon color="white" size={20} />
                    </button>
                </section>}
            </div>
        </>
    )
}