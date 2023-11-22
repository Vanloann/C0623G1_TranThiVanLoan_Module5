import {Link} from "react-router-dom";
import React from "react";
import 'boxicons';

function Header() {

    return (
        <>
            <div id="header">
                <div className="sidebar-top container">
                    <div className="sidebar-icon"><Link to="/"><img src="https://aml.bestwebdesignsg.com/wp-content/uploads/2020/09/furama-hotel-logo-e1601432079391.png"
                                                        alt="logo"/></Link></div>
                    <div className="sidebar-menu">
                        <div className="nav-list">
                            <Link to="/">Giới thiệu</Link>
                            <Link to="/service-creating">Dịch vụ</Link>
                            <Link to="/customer">Khách hàng</Link>
                            <Link to="/contract">Hợp đồng</Link>
                        </div>
                    </div>
                    <div className="login-btn">
                        <button>Đăng nhập</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;