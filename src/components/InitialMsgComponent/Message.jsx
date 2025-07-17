import {Link} from 'react-router'
import './Message.css'

export function Message(){
    return(
        <section className="message-container">
            <h1 className='message-text'>GameZone. Los mejores juegos al mejor precio</h1>
            <p className="message-subtext">Descubre ofertas exclusivas y encuentra tus juegos favoritos.</p>
            <Link to='/store' className='buy-now'>Compra ya</Link>
        </section>
    )
}