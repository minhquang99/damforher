import React, { useCallback, useEffect, useState } from 'react'
import heroSliderData from '../assets/fake-data/hero-slider';
import policy from '../assets/fake-data/policy';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import PolicyCard from '../components/PolicyCard';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import Grid from '../components/Grid';
import productData from '../assets/fake-data/product';
import ProductCard from '../components/ProductCard';
import banner from '../assets/images/banner.jpg'
import { Link } from 'react-router-dom';
import Cart from './Cart';
import MiniCart from '../components/MiniCart';

// const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cart"));

export const Home = () => {

    const [cartItems, setCartItems] = useState([]);

    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cartItems));
    // }, [cartItems])

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);

        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            )
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
        }
    }

    return (
        <Helmet title="Trang chủ">
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={true}
                timeOut={3000}
            />
            <MiniCart onAdd={onAdd} cartItems={cartItems} />
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={10}
                    >
                        {
                            policy.map((item, index) => <PolicyCard
                                key={index}
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                            />)
                        }
                    </Grid>

                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>
                    Sản phẩm bán chạy
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={10}
                    >
                        {
                            productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.img01}
                                    img02={item.img02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    onAdd={() => onAdd(item)}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>

            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>
                    Sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={10}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.img01}
                                    img02={item.img02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    onAdd={() => onAdd(item)}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>

            </Section>
        </Helmet>

    )
}

export default Home;