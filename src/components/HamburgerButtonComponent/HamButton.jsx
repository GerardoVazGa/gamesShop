import './HamButton.css'

export function HamButton({ isMenuOpen, handleMenuOpen }) {
    // const textMenu = isMenuOpen ? 'X' : '☰'
    const menuOpen = isMenuOpen ? 'ham-button open' : 'ham-button'
    return (
        <div className='H'>
            <button className={menuOpen} onClick={handleMenuOpen}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </div>
    )
}