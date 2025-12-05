import { useEffect, useState } from "react";
import "./NavBar.css";
import {useCart} from "../../hooks/useCart";
import { HamButton } from "../HamburgerButtonComponent/HamButton";
import {NavLink} from 'react-router'
import { Cart } from "../CartComponent/Cart";
import { CartIcon } from "../icons/CartIcon";

export function NavBar() {
    const [isScroll, setIsScroll] = useState(false)
    const {cartItems, handleOpenCart, isCartOpen } = useCart()
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)


    useEffect(() => {
        const handleScrollingNav = () => {
            setIsScroll(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScrollingNav)

        return () => {
            window.removeEventListener("scroll", handleScrollingNav)
        }
    }, [])

    const transparentNav = isScroll ? 'navbar scrolled' : 'navbar'

    // const blockRedirect = (e) => {
    //     e.preventDefault()
    //     console.log('Block...')
    // }

    const handleHamburgerMenu = () => {
        setIsHamburgerOpen(!isHamburgerOpen)
    }

    const closeMenu = () => {
        setIsHamburgerOpen(false)
    }

    const hamburgerMenu = isHamburgerOpen ? 'navbar-options show' : 'navbar-options'
    return (
        <>
            <nav className={transparentNav}>
                <div className="navbar-logo-items">
                    <div className="logo-name">
                        <img className='logo' src="/images/logo.jpg" alt="" />
                        <h1 className="name">GameZone</h1>
                    </div>
                    <div className={hamburgerMenu}>
                            <li className="option"><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                            <li className="option"><NavLink to="/store" onClick={closeMenu}>Store</NavLink></li>
                            <li className="option"><NavLink to="/about" onClick={closeMenu}>About GameZone</NavLink></li>
                            <li className="option"><NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink></li>
                    </div>
                </div>
                <div className="cart-login">
                    <div className="cart-button-content">
                        <button className="cart-button" onClick={handleOpenCart}>
                            <CartIcon color="lightgray" size={30} />
                            {
                                isCartOpen ? null : ( cartItems.length > 0 ? (<span className="cart-amount">{cartItems.length}</span>) : null
                                )  
                            }
                        </button>
                    </div>
                    <div className="Ham-button">
                        <HamButton isMenuOpen={isHamburgerOpen} handleMenuOpen={handleHamburgerMenu} />
                    </div>
                </div>

            </nav>
        </>
    )
}