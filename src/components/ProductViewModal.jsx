import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Button from "./Button";

import { remove } from "../redux/productModal/productModalSlice";

import productData from "../assets/fake-data/product";
import ProductDetail from "./ProductDetail";
import { selectProductModal } from "../redux/productModal/productModalSlice";

const ProductViewModal = () => {
  const productSlug = useSelector(selectProductModal);
  console.log("mxczxc", productSlug);
  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div
      className={`product-view__modal ${product === undefined ? "" : "active"}`}
    >
      <div className="product-view__modal__content">
        <ProductDetail product={product} />
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
