const product01_img01 = require("../images/products/1.jpg").default
const product01_img02 = require("../images/products/11.jpg").default

const product02_img01 = require("../images/products/2.jpg").default
const product02_img02 = require("../images/products/21.jpg").default

const product03_img01 = require("../images/products/3.jpg").default
const product03_img02 = require("../images/products/31.jpg").default

const product04_img01 = require("../images/products/4.jpg").default
const product04_img02 = require("../images/products/41.jpg").default

const product05_img01 = require("../images/products/5.jpg").default
const product05_img02 = require("../images/products/51.jpg").default

// const product06_img01 = require("../images/products/6.jpg").default
// const product06_img02 = require("../images/products/61.jpg").default

// const product07_img01 = require("../images/products/7.jpg").default
// const product07_img02 = require("../images/products/71.jpg").default

// const product08_img01 = require("../images/products/8.jpg").default
// const product08_img02 = require("../images/products/81.jpg").default

const products = [
    {
        title: "Đầm midi nhấn ly eo cái nút trước",
        price: '695000',
        img01: product01_img01,
        img02: product01_img02,
        categorySlug: "dam",
        colors: ["orange", "white"],
        slug: "dam-midi-nhan-ly-eo-cai-nut-truoc",
        size: ["S", "M", "L", "XL"]
    },
    {
        title: "Đầm bẹt vai ren tùng xòe 3 tầng",
        price: '795000',
        img01: product02_img01,
        img02: product02_img02,
        categorySlug: "dam",
        colors: ["white"],
        slug: "dam-bet-vai-ren-tung-xoe-3-tang",
        size: ["S", "M", "L", "XL"]
    },
    {
        title: "Đầm 2 dây mini nhấn nơ bản",
        price: '495000',
        img01: product03_img01,
        img02: product03_img02,
        categorySlug: "dam",
        colors: ["blue", "white"],
        slug: "dam-2-day-mini-nhan-no-ban",
        size: ["S", "M", "L", "XL"]
    },
    {
        title: "Đầm mini cổ vuông nơ sau họa tiết hoa",
        price: '595000',
        img01: product04_img01,
        img02: product04_img02,
        categorySlug: "dam",
        colors: ["blue", "white"],
        slug: "dam-mini-co-vuong-no-sau-hoa-tiet-hoa",
        size: ["S", "M", "L", "XL"]
    },
    {
        title: "Đầm form suông phối yếm caro gingham",
        price: '595000',
        img01: product05_img01,
        img02: product05_img02,
        categorySlug: "dam",
        colors: ["blue", "pink"],
        slug: "dam-form-suong-phoi-yem-caro-gingham",
        size: ["S", "M", "L", "XL"]
    },
]

const getAllProducts = () => products;

const getProducts = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max-min) + min);
    return products.slice(start, start + count);
}

const productData = {
    getAllProducts,
    getProducts
}

export default productData