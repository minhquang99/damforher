import React from 'react'
import productData from '../assets/fake-data/product';
import Helmet from '../components/Helmet';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';

export const Product = props => {

    const product = productData.getProductBySlug(props.match.params.slug);

    const relatedProduct = productData.getProducts(8);

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductDetail product={product} ></ProductDetail>
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>Sản phẩm liên quan</SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        smCol={2}
                        mdCol={1}
                        gap={10}
                    >
                        {
                            relatedProduct.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    name={item.title}
                                    img01={item.img01}
                                    img02={item.img02}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                >
                                </ProductCard>
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product;
