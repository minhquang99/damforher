import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from '../components/Helmet'
import Section from '../components/Section'
import { SectionTitle } from '../components/Section'
import { SectionBody } from '../components/Section'
import Grid from '../components/Grid'

const getLocalItems = () => {
    let list = localStorage.getItem('cart');
    // console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('cart'));
    } else {
        return [];
    }

}

const Cart = props => {
    const { cart } = props;

    const [cart1, setCart] = useState(getLocalItems());

    console.log("cart1", cart1);
    return (
        <Helmet title="Giỏ hàng">
            <Section>
                <SectionTitle>
                    Giỏ hàng của bạn
                </SectionTitle>

                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={10}
                    >
                        {
                            cart1 ? cart1.map((item) => (
                                <div key={item.id} className="cart">
                                    <h2>{item.title}</h2>

                                </div>
                            )) : <p>Empty Cart</p>
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

Cart.propTypes = {
    cart: PropTypes.array,
}

export default Cart
