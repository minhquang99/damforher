import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Helmet from "../components/Helmet";
import Section from "../components/Section";
import { SectionTitle } from "../components/Section";
import { SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import CartItem from "../components/CartItem";
import productData from "../assets/fake-data/product";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/shopping-cart/cartSlice";
import numberWithCommas from "../utils/numberWithCommas";

// const getLocalItems = () => {
//   let list = localStorage.getItem("cart");
//   console.log("list", list);

//   if (list) {
//     return JSON.parse(localStorage.getItem("cart"));
//   } else {
//     return [];
//   }
// };

export const Cart = () => {
  //   const [cart, setCart] = useState(getLocalItems());

  const cartItems = useSelector(selectCartItems);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.qty) * Number(item.price),
        0
      )
    );
  }, [cartItems]);
  return (
    <Helmet title="Giỏ hàng">
      <Section>
        <SectionTitle>Giỏ hàng của bạn (being fixed)</SectionTitle>

        <SectionBody>
          {cartProducts ? (
            cartProducts.map((item, index) => (
              <CartItem
                key={index}
                img={item.img01}
                title={item.title}
                price={item.price}
                qty={item.qty}
              />
            ))
          ) : (
            <p>Empty Cart</p>
          )}
          Thanh tien: {numberWithCommas(Number(totalPrice))}
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Cart;
