import {Link} from "react-router-dom";

function HomePage() {

    return <>
        <div id="introduction">
            <div className="background-img">
            </div>
            <div className="introduction-content">
                <h2>KHU NGHỈ DƯỠNG
                    <br/>
                        FURAMA</h2>

                <p>Khu nghỉ dưỡng ẩm thực tọa lạc tại bãi biển Đà Nẵng
                    <br/>
                        Một trong 6 bãi biển đẹp nhất thế giới</p>
            </div>
        </div>

        <div id="home">
            <div id="service">
                <div className="brief">
                    <h3>CÁC LOẠI PHÒNG</h3>
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="service-body">
                        <div className="card" style={{width: '25rem', height: '25rem'}}>
                            <a href="">
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-M.jpg"
                                    className="card-img-top" alt="..."/>
                            </a>
                            <div className="card-body">
                                <div>
                                    <h4 className="card-text">Phòng Superior Hướng Hồ</h4>
                                    <p>Diện tích phòng: <span>40.1 m2</span></p>
                                    <p>Sức chứa: <span>2 Khách</span></p>
                                </div>
                                <div className="admin-func d-flex me-0">
                                    <Link to="/service-editing"><box-icon name='edit-alt' ></box-icon></Link>
                                    <a href=""><box-icon name='trash' type='solid' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-body">
                        <div className="card" style={{width: '25rem', height: '25rem'}}>
                            <a href="">
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5-1024x661.jpg"
                                    className="card-img-top" alt="..."/>
                            </a>
                            <div className="card-body">
                                <div>
                                    <h4 className="card-text">Phòng Deluxe Hướng Vườn</h4>
                                    <p>Diện tích phòng: <span>43.7 m2</span></p>
                                    <p>Sức chứa: <span>2 Khách</span></p>
                                </div>
                                <div className="admin-func d-flex me-0">
                                    <a href=""><box-icon name='edit-alt' ></box-icon></a>
                                    <a href=""><box-icon name='trash' type='solid' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-body">
                        <div className="card" style={{width: '25rem', height: '25rem'}}>
                            <a href="">
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr.jpg"
                                    className="card-img-top" alt="..."/>
                            </a>
                            <div className="card-body">
                                <div>
                                    <h4 className="card-text">Phòng Superior Hướng Biển</h4>
                                    <p>Diện tích phòng: <span>85.8 m2</span></p>
                                    <p>Sức chứa: <span>2 Khách</span></p>
                                </div>
                                <div className="admin-func d-flex me-0">
                                    <a href=""><box-icon name='edit-alt' ></box-icon></a>
                                    <a href=""><box-icon name='trash' type='solid' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-body">
                        <div className="card" style={{width: '25rem', height: '25rem'}}>
                            <a href="">
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-M.jpg"
                                    className="card-img-top" alt="..."/>
                            </a>
                            <div className="card-body">
                                <div>
                                    <h4 className="card-text">Phòng Superior Hướng Hồ</h4>
                                    <p>Diện tích phòng: <span>40.1 m2</span></p>
                                    <p>Sức chứa: <span>2 Khách</span></p>
                                </div>
                                <div className="admin-func d-flex me-0">
                                    <a href=""><box-icon name='edit-alt' ></box-icon></a>
                                    <a href=""><box-icon name='trash' type='solid' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-body">
                        <div className="card" style={{width: '25rem', height: '25rem'}}>
                            <a href="">
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5-1024x661.jpg"
                                    className="card-img-top" alt="..."/>
                            </a>
                            <div className="card-body">
                                <div>
                                    <h4 className="card-text">Phòng Deluxe Hướng Vườn</h4>
                                    <p>Diện tích phòng: <span>43.7 m2</span></p>
                                    <p>Sức chứa: <span>2 Khách</span></p>
                                </div>
                                <div className="admin-func d-flex me-0">
                                    <a href=""><box-icon name='edit-alt' ></box-icon></a>
                                    <a href=""><box-icon name='trash' type='solid' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-body">
                        <div className="card" style={{width: '25rem', height: '25rem'}}>
                            <a href="">
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr.jpg"
                                    className="card-img-top" alt="..."/>
                            </a>
                            <div className="card-body">
                                <div>
                                    <h4 className="card-text">Phòng Superior Hướng Biển</h4>
                                    <p>Diện tích phòng: <span>85.8 m2</span></p>
                                    <p>Sức chứa: <span>2 Khách</span></p>
                                </div>
                                <div className="admin-func d-flex me-0">
                                    <a href=""><box-icon name='edit-alt' ></box-icon></a>
                                    <a href=""><box-icon name='trash' type='solid' ></box-icon></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </>;
}
export default HomePage;

