import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import numberWithCommas from '../utils/numberWithCommas';
import Button from './Button';
import Cart from '../pages/Cart';
import { Link } from 'react-router-dom';

const cartFromStorage = JSON.parse(localStorage.getItem("cart"));

const MiniCart = props => {

    const { onAdd, cartItems } = props;

    const [cart, setCart] = useState(cartFromStorage);

    localStorage.setItem("cart", JSON.stringify(cartItems));

    return (

        <div className="mini-cart" id="mini-cart" style={{ display: "none" }}>
            <h4>GIỎ HÀNG NHỎ</h4>
            <div>

                <div>{cartItems.length === 0 && <div>Empty Cart</div>}</div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart">
                        <img src={item.img01} alt="" />
                        <div>
                            <h2>{item.title}</h2>
                            <h3>{numberWithCommas((item.price) * (item.qty))}</h3>
                        </div>

                        <h3>x{item.qty}</h3>

                    </div>
                ))
                }
            </div>
            <Link to="/cart">
                <Button
                    size="sm"
                    className="btn"
                >Xem chi tiết</Button>
            </Link>
            <div className="big-cart">
                <Cart cart={cart} />
            </div>
        </div>

    )
}

MiniCart.propTypes = {
    onAdd: PropTypes.func,
    cartItems: PropTypes.array,
}

export default MiniCart
