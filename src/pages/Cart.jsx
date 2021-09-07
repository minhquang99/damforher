import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from '../components/Helmet'
import Section from '../components/Section'
import { SectionTitle } from '../components/Section'
import { SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import CartItem from '../components/CartItem'

const getLocalItems = () => {
    let list = localStorage.getItem('cart');
    // console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('cart'));
    } else {
        return [];
    }

}

export const Cart = () => {

    const [cart, setCart] = useState(getLocalItems());

    return (
        <Helmet title="Giỏ hàng">
            <Section>
                <SectionTitle>
                    Giỏ hàng của bạn (being fixed)
                </SectionTitle>

                <SectionBody>
                    {
                        cart ? cart.map((item, index) => (
                            <CartItem
                                key={index}
                                img={item.img01}
                                title={item.title}
                                price={item.price}
                                qty={item.qty}
                            />
                        )) : <p>Empty Cart</p>
                    }
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Cart
