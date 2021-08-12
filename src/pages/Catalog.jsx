import React, { useCallback, useState } from 'react'
import category from '../assets/fake-data/category';
import color from '../assets/fake-data/color';
import size from '../assets/fake-data/size';
import productData from '../assets/fake-data/product';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Grid from '../components/Grid';
import Helmet from '../components/Helmet';
import ProductCard from '../components/ProductCard';

export const Catalog = () => {

    const intitState = {
        category: [],
        color: [],
        size: []
    }

    const productList = productData.getAllProducts();

    const [product, setProduct] = useState(productList);

    const [filter, setFilter] = useState(intitState);

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "CATEGORY":
                    setFilter({ ...filter, category: [...filter.category, item.categorySlug] });
                    break;
                case "COLOR":
                    setFilter({ ...filter, color: [...filter.color, item.color] });
                    break;
                case "SIZE":
                    setFilter({ ...filter, size: [...filter.size, item.size] })
                default:
            }
        } else {
            switch (type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({ ...filter, category: newCategory });
                    break;
                case "COLOR":
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({ ...filter, color: newColor });
                    break;
                case "SIZE":
                    const newSize = filter.size.filter(e => e !== item.size)
                    setFilter({ ...filter, size: newSize });
                    break;
                default:
            }
        }
    }

    // const updateProduct = useCallback(
    //     () => {
    //         let temp = productList;
    //         if (filter.category.length > 0) {
    //             temp = temp.filter(e => filter.category.includes(e.categorySlug));
    //         }

    //     },
    //     [input],
    // )

    return (
        <Helmet title="Sản phẩm">
            {
                console.log(filter)
            }
            <div className="catalog">
                <div className="catalog__filter">
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Danh mục sản phẩm
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                category.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            key={index}
                                            label={item.display}
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Màu sắc
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                color.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            key={index}
                                            label={item.display}
                                            onChange={(input) => filterSelect("COLOR", input.checked, item)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Kích cỡ
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                size.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            key={index}
                                            label={item.display}
                                            onChange={(input) => filterSelect("SIZE", input.checked, item)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm">Xóa bộ lọc</Button>
                        </div>
                    </div>
                </div>
                <div className="catalog__content">
                    <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={10}
                    >
                        {
                            productData.getAllProducts().map((item, index) =>
                                <ProductCard
                                    key={index}
                                    name={item.title}
                                    img01={item.img01}
                                    img02={item.img02}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                >

                                </ProductCard>
                            )
                        }
                    </Grid>
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog;
