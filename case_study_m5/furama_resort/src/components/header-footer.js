import React from "react";

function HeaderFooter() {
    return <>
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <img src="https://cardy.vn/upload/images/san-pham/logo-diem-uu-dai/fvd.jpg" width="200px"
                         height="100px" alt="logo"/>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" >Giới thiệu</a>
                                <a className="nav-link" >Dịch vụ</a>
                                <a className="nav-link" >Ẩm thực</a>
                                <a className="nav-link" >Hội nghị và sự kiện</a>
                                <a className="nav-link" >Điểm đến</a>
                                <a className="nav-link">Ưu đãi</a>
                            </div>
                        </div>
                        <div className="login-btn">
                            <button>Đăng nhập</button>
                        </div>
                </div>
            </nav>
        </header>

        <footer>
            <div className="container">
                <div className="footer-menu">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="navbar-header">

                                <p className="navbar-brand" ref="index.html"><img
                                    src="https://cardy.vn/upload/images/san-pham/logo-diem-uu-dai/fvd.jpg" width="300px"
                                    height="200px"
                                    alt="LOGO"/></p>
                                <p className="footer-social">
                                    <a ><i className="fa fa-facebook"/></a>
                                    <a ><i className="fa fa-twitter"/></a>
                                    <a ><i className="fa fa-linkedin"/></a>
                                    <a ><i className="fa fa-google-plus"/></a>
                                </p>
                            </div>
                        </div>

                        <div className="col col-md-auto col-lg-3 d-flex">
                            <div className="catalog-widget d-none d-sm-block">

                                <div className="catalog-widget-inside" >
                                    {/*<a href="https://www.tripadvisor.com/Hotel_Review-g298085-d302750-Reviews-Furama_Resort_Danang-Da_Nang_Quang_Nam_Province.html"*/}
                                    {/*   target="_blank">*/}
                                        <div className="widget-tripadvisor">
                                            <div className="inside">
                                                <div className="widget-tripadvisor-logo"><img
                                                    src="https://smartdata.tonytemplates.com/bestel/wp-content/uploads/2018/05/widget-tripadvisor-logo.png"
                                                    alt=""/></div>
                                                <div className="widget-tripadvisor-rating"><img
                                                    src="https://furamavietnam.com/wp-content/uploads/2018/08/widget-tripadvisor-rating.png"
                                                    alt=""/></div>
                                                <div className="widget-tripadvisor-text">2,746 Reviews</div>
                                            </div>
                                        </div>
                                    {/*</a>*/}
                                    <span className="catalog-widget-toggle js-catalog-widget-toggle"/></div>
                            </div>
                            <div className="catalog-widget-mobile d-flex d-sm-none align-items-center mx-auto">
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <a >Liên hệ</a>
                            <p><i className='bx bxs-phone'/>84-236-3847
                                333/888</p>
                            <p><i className='bx bxl-gmail'/>reservation@furamavietnam.com
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <a >Khác</a>
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
        </>;
}

export default HeaderFooter;