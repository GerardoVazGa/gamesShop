import { useEffect, useState } from "react";
import "./NavBar.css";
// import { useCart } from "../../hooks/useCart";
import { HamButton } from "../HamburgerButtonComponent/HamButton";
import {NavLink} from 'react-router'

export function NavBar() {
    const [isScroll, setIsScroll] = useState(false)
    // const { handleOpenCart } = useCart()
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

    const hamburgerMenu = isHamburgerOpen ? 'navbar-options show' : 'navbar-options'
    return (
        <>
            <nav className={transparentNav}>
                <div className="navbar-logo-items">
                    <div className="logo-name">
                        <img className='logo' src="/images/logo.jpg" alt="" />
                        <h1 className="name">Gamer Zone</h1>
                    </div>
                    <div className={hamburgerMenu}>
                            <li className="option"><NavLink to="/">Home</NavLink></li>
                            <li className="option"><NavLink to="/store">Store</NavLink></li>
                            <li className="option"><NavLink to="/about">About Game Zone</NavLink></li>
                            <li className="option"><NavLink to="/faq">FAQ</NavLink></li>
                    </div>
                </div>
                <div className="cart-login">
                    {/* <div className="cart-button-content">
                        <button className="cart-button" onClick={handleOpenCart}>
                            <img src="/images/cart.svg" />
                        </button>
                    </div> */}
                    <div className="Ham-button">
                        <HamButton isMenuOpen={isHamburgerOpen} handleMenuOpen={handleHamburgerMenu} />
                    </div>
                </div>

            </nav>
        </>
    )
}