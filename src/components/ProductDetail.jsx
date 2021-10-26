import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import numberWithCommas from "../utils/numberWithCommas";
import Button from "./Button";
import productData from "../assets/fake-data/product";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/shopping-cart/cartSlice";
import { remove } from "../redux/productModal/productModalSlice";

const ProductDetail = (props) => {
  const dispatch = useDispatch();

  let product = props.product;

  if (product === undefined)
    product = {
      title: "",
      price: "",
      img01: null,
      img02: null,
      categorySlug: "",
      colors: [],
      slug: "",
      size: [],
    };

  const [previewImg, setPreviewImg] = useState(product.img01);

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.img01);
    setColor(undefined);
    setSize(undefined);
    setQuantity(1);
  }, [product]);

  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu sắc");
      return false;
    }

    if (size === undefined) {
      alert("Vui lòng chọn kích cỡ");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      console.log(size, color, quantity);
      let newItem = {
        slug: product.slug,
        color: color,
        size: size,
        price: product.price,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        alert("Success");
      } else {
        alert("Fail");
      }
    }
  };

  const goToCart = () => {
    if (check()) {
      let newItem = {
        slug: product.slug,
        color: color,
        size: size,
        price: product.price,
        quantity: quantity,
      };
      if (dispatch(addItem(newItem))) {
        dispatch(remove());
        props.history.push("/cart");
      } else {
        alert("Fail");
      }
    }
  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.img01)}
          >
            <img src={product.img01} alt="" />
          </div>

          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.img02)}
          >
            <img src={product.img02} alt="" />
          </div>
        </div>

        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
      </div>

      <div className="product__info">
        <div className="product__info__title">{product.title}</div>

        <div className="product__info__item">
          <div className="product__info__item__price">
            {numberWithCommas(product.price)}
          </div>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {product.colors.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Size</div>
          <div className="product__info__item__list">
            {product.size.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => setSize(item)}
              >
                <div className="product__info__item__list__item__size">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>

        <div className="product__info__item">
          <Button onClick={() => addToCart()}>Thêm vào giỏ</Button>
          <Button onClick={() => goToCart()}>Mua ngay</Button>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default withRouter(ProductDetail);
