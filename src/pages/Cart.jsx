import React from 'react'
import Grid from '../components/Grid';
import Helmet from '../components/Helmet';
import Section, { SectionBody, SectionTitle } from '../components/Section';

export const Cart = () => {
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
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Cart;
