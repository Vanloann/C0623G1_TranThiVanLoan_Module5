import React from "react";
import 'boxicons';

function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="footer-menu">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="navbar-header">

                                    <p className="navbar-brand" href="index.html">
                                        <img src="https://aml.bestwebdesignsg.com/wp-content/uploads/2020/09/furama-hotel-logo-e1601432079391.png" width="200px"
                                             height="50px"
                                             alt="LOGO"/></p>
                                </div>
                            </div>

                            <div className="col-sm-3">
                                <h5>Theo dõi chúng tôi</h5>
                                <div className="footer-social">
                                    <box-icon type='logo' name='facebook'></box-icon>
                                    <box-icon name='twitter' type='logo' ></box-icon>
                                    <box-icon name='instagram-alt' type='logo' ></box-icon>
                                    <box-icon name='google' type='logo' ></box-icon>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <h5>Liên hệ</h5>
                                <p><box-icon name='phone-call' type='solid'  ></box-icon>84-236-3847
                                    333/888</p>
                                <p><box-icon name='gmail' type='logo' ></box-icon>reservation@furamavietnam.com
                                </p>
                            </div>
                            <div className="col-sm-3">
                                <h5>Khác</h5>
                                <p>Chính sách quyền riêng tư</p>
                                <p>Điều khoản & Điều kiện</p>
                                <p>Quy chế hoạt động</p>
                            </div>
                        </div>
                    </div>
                    <div className="hm-footer-copyright">
                        <hr/>
                        <div className="row text-center">
                            <p>
                                103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ hành Sơn, Tp. Đà Nẵng, Việt
                                Nam</p>
                            <p>
                                © 2018 Furama Resort Danang.
                            </p>
                        </div>

                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;