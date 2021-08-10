import React from 'react'
import PropTypes from 'prop-types'
import productData from '../assets/fake-data/product'
import { Link } from 'react-router-dom'
import Button from './Button'

const ProductCard = props => {
    return (
        <div className="product-card">
            <Link>
                <div className="product-card__image">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <h5 className="product-card__name">{props.name}</h5>
                <div className="product-cart__price">
                    {props.price}
                    <span className="product-card__price__old">
                        <del>800000</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    size="sm"
                    icon="bx bx-cart"
                    animate={true}
                >
                    Mua hàng
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard
