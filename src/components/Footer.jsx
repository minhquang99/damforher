import React from 'react'
import logo from '../assets/images/logo.png'
import { Link, useLocation } from 'react-router-dom'
import Grid from './Grid'

const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/intro"
    },
    {
        display: "Tin tức",
        path: "/news"
    },
    {
        display: "Khuyến mãi",
        path: '/sales'
    },
    {
        display: "Hệ thống cửa hàng",
        path: '/locations'
    },
]

const footerCustomerLinks = [
    {
        display: "Chính sách bảo hành",
        path: '/insurance'
    },
    {
        display: "Chính sách đổi trả",
        path: '/convert'
    },
    {
        display: "Chính sách hoàn tiền",
        path: '/refund'
    },

]

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} alt="" className="footer__logo" />
                            </Link>
                        </p>
                        <p>
                            Nếu phụ nữ là những nhụy hoa, thì những chiếc ĐẦM xinh xắn là những cánh hoa đẹp nhất, xứng đáng để tôn vinh vẻ đẹp ấy.
                        </p>
                    </div>

                    <div>
                        <div className="footer__title">
                            Hỗ trợ:
                        </div>
                        <div className="footer__content">
                            <p>Liên hệ đặt hàng</p>
                            <p>Thắc mắc đơn hàng</p>
                            <p>Khiếu nại, đổi trả</p>
                        </div>
                    </div>

                    <div>
                        <div className="footer__title">
                            Về chúng tôi
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <div className="footer__title">
                            Chính sách
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </Grid>
            </div>

        </footer>
    )
}
