import React from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid'

const CartItem = props => {
    return (
        <div className="cart-item">
            <div className="cart-item__image">
                <img src={props.img} alt="" />
            </div>

            <div className="cart-item__title">
                <h5>{props.title}</h5>
            </div>

            <div className="cart-item__price">
                <h5>{props.price}</h5>
            </div>

            <div className="cart-item__qty">
                <h6>{props.qty}</h6>
            </div>
        </div>

    )
}

CartItem.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
}

export default CartItem
