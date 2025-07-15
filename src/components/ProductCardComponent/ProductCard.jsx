import './ProductCard.css'
// import { useCart } from '../hooks/useCart'
export function ProductCard({game}){
    // const {handleAddCart} = useCart()
    const gamePrice = `$${game.price.toFixed(2)}`
    return(
        <div className="product-card">
            <div className="product-card-image">
                <img src={game.imageGame} />
            </div>
            <section className="product-card-console">
                <h2>{game.platform}</h2>
            </section>
            <section className="product-card-content">
                <p className="product-card-gamename">{game.name}</p>
                <p className="product-card-game-price">{gamePrice}</p>
            </section>
            <div className="product-card-buying">
                <p className={game.stock > 0 ? '' : 'notStock'}>{game.stock > 0 ? game.stock : 'No hay en Stock'}</p>
                <button className="button-buying" >
                    <img className="image-button" src="/images/cart.svg"/>
                </button>
            </div>
            
        </div>
    )
}