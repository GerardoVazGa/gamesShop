import { useCart } from '../../hooks/useCart'
import { MinusIcon } from '../Icons/MinusIcon.jsx'
import { PlusIcon } from '../Icons/PlusIcon.jsx'
import { TrashIcon } from '../Icons/TrashIcon.jsx'
import './CartProd.css'

export function CartProd({gameCartList}){
    const { handleDelete, 
        handleDeleteAmount, 
        handleAddAmount} = useCart()
    return(
        <div className='cart-prod-container'>
            <section className='img-prod-container'>
                <img src={gameCartList.image} alt="Hola" />
            </section>
            <section className='prod-content'>
                <h5 className='prod-name'>
                    {gameCartList.name}
                </h5>
                <div className='amount-prod'>
                    <button className='minus-button' onClick={() => handleDeleteAmount(gameCartList.id)}>
                        <MinusIcon color='#f15247'/>
                    </button>
                    <strong className='quantity'>{gameCartList.amount}</strong>
                    <button className='plus-button' onClick={() => handleAddAmount(gameCartList.id)}>
                        <PlusIcon color='#12d426' strokeWidth={4}/>
                    </button>
                </div>
                <div className='delete-button'>
                    <button onClick={() => handleDelete(gameCartList.id)}>
                        <TrashIcon color="red" size={20} strokeWidth={1.5}/>
                    </button>
                </div>
            </section>
        </div>
    )
}