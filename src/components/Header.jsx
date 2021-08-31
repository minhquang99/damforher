import React, { useRef, useEffect } from 'react'
import logo from '../assets/images/logo.png'
import { Link, useLocation } from 'react-router-dom'

const mainNav = [
    {
        display: 'Trang chủ',
        path: '/damforher'
    },
    {
        display: 'Sản phẩm',
        path: '/catalog'
    },
    {
        display: 'Liên hệ',
        path: '/contact'
    }
]

export const Header = () => {

    const { pathName } = useLocation();
    const activeNav = mainNav.findIndex(e => e.path === pathName);

    //scroll header -> shadow box
    const headerRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("shrink")
            } else {
                headerRef.current.classList.remove("shrink")
            }
        })
        return () => {
            window.removeEventListener("scroll", null)
        }
    }, [])

    //show-hide menu for tablet-mobile
    const menuRef = useRef(null);

    const menuToggle = () => menuRef.current.classList.toggle('active')

    const showCart = () => {
        var x = document.getElementById("mini-cart");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
    }

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/damforher">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left' ></i>
                    </div>
                    <div className="header__menu__left" ref={menuRef}>
                        <div className="header__menu__left__close">
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/search">
                                <i className='bx bx-search-alt-2' ></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link onClick={showCart}>
                                <i className='bx bx-cart' ></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/user">
                                <i className='bx bx-user' ></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
