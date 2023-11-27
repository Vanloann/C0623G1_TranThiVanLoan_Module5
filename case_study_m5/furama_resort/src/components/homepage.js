import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllHouse, getAllRoom, getAllVilla} from "../services/Service";

function HomePage() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const ser = [];
        getAllVilla().then((res) => {
            ser.push(...res)
        }).then(() => {
            getAllHouse().then((res) => {
                ser.push(...res)
            });
        }).then(() => {
            getAllRoom().then((res) => {
                ser.push(...res);
                setServices(ser);
            });
        });
    },[]);

    console.log(services)
    if (!services) return null

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
                    {services.map((item) =>
                    <div className="service-body">
                        <div className="card" style={{width: '25rem', height: '26rem'}}>
                            <a href="">
                                <img
                                    src={item.image}
                                    className="card-img-top" alt="..."/>
                            </a>
                            <div className="card-body">

                                <div>
                                    <h4 className="card-text">{item.name}</h4>
                                    <p>Diện tích phòng: <span>{item.area} m2</span></p>
                                    <p>Sức chứa: <span>{item.capacity} Khách</span></p>
                                </div>

                                <div className="admin-func d-flex me-0">
                                    <Link to="/service-editing">
                                        <box-icon name='edit-alt'/>
                                    </Link>
                                    <button type="button" className="btn" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                        <box-icon name='trash' type='solid'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}

                    {/*<div className="service-body">*/}
                    {/*    <div className="card" style={{width: '25rem', height: '26rem'}}>*/}
                    {/*        <a href="">*/}
                    {/*            <img*/}
                    {/*                src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5-1024x661.jpg"*/}
                    {/*                className="card-img-top" alt="..."/>*/}
                    {/*        </a>*/}
                    {/*        <div className="card-body">*/}
                    {/*            <div>*/}
                    {/*                <h4 className="card-text">Phòng Deluxe Hướng Vườn</h4>*/}
                    {/*                <p>Diện tích phòng: <span>43.7 m2</span></p>*/}
                    {/*                <p>Sức chứa: <span>2 Khách</span></p>*/}
                    {/*            </div>*/}
                    {/*            <div className="admin-func d-flex me-0">*/}
                    {/*                <a href="">*/}
                    {/*                    <box-icon name='edit-alt'></box-icon>*/}
                    {/*                </a>*/}
                    {/*                <button type="button" className="btn" data-bs-toggle="modal"*/}
                    {/*                        data-bs-target="#exampleModal">*/}
                    {/*                    <box-icon name='trash' type='solid'/>*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="service-body">*/}
                    {/*    <div className="card" style={{width: '25rem', height: '26rem'}}>*/}
                    {/*        <a href="">*/}
                    {/*            <img*/}
                    {/*                src="https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr.jpg"*/}
                    {/*                className="card-img-top" alt="..."/>*/}
                    {/*        </a>*/}
                    {/*        <div className="card-body">*/}
                    {/*            <div>*/}
                    {/*                <h4 className="card-text">Phòng Superior Hướng Biển</h4>*/}
                    {/*                <p>Diện tích phòng: <span>85.8 m2</span></p>*/}
                    {/*                <p>Sức chứa: <span>2 Khách</span></p>*/}
                    {/*            </div>*/}
                    {/*            <div className="admin-func d-flex me-0">*/}
                    {/*                <a href="">*/}
                    {/*                    <box-icon name='edit-alt'></box-icon>*/}
                    {/*                </a>*/}
                    {/*                <button type="button" className="btn" data-bs-toggle="modal"*/}
                    {/*                        data-bs-target="#exampleModal">*/}
                    {/*                    <box-icon name='trash' type='solid'/>*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="service-body">*/}
                    {/*    <div className="card" style={{width: '25rem', height: '26rem'}}>*/}
                    {/*        <a href="">*/}
                    {/*            <img*/}
                    {/*                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-M.jpg"*/}
                    {/*                className="card-img-top" alt="..."/>*/}
                    {/*        </a>*/}
                    {/*        <div className="card-body">*/}
                    {/*            <div>*/}
                    {/*                <h4 className="card-text">Phòng Superior Hướng Hồ</h4>*/}
                    {/*                <p>Diện tích phòng: <span>40.1 m2</span></p>*/}
                    {/*                <p>Sức chứa: <span>2 Khách</span></p>*/}
                    {/*            </div>*/}
                    {/*            <div className="admin-func d-flex me-0">*/}
                    {/*                <a href="">*/}
                    {/*                    <box-icon name='edit-alt'></box-icon>*/}
                    {/*                </a>*/}
                    {/*                <button type="button" className="btn" data-bs-toggle="modal"*/}
                    {/*                        data-bs-target="#exampleModal">*/}
                    {/*                    <box-icon name='trash' type='solid'/>*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="service-body">*/}
                    {/*    <div className="card" style={{width: '25rem', height: '26rem'}}>*/}
                    {/*        <a href="">*/}
                    {/*            <img*/}
                    {/*                src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5-1024x661.jpg"*/}
                    {/*                className="card-img-top" alt="..."/>*/}
                    {/*        </a>*/}
                    {/*        <div className="card-body">*/}
                    {/*            <div>*/}
                    {/*                <h4 className="card-text">Phòng Deluxe Hướng Vườn</h4>*/}
                    {/*                <p>Diện tích phòng: <span>43.7 m2</span></p>*/}
                    {/*                <p>Sức chứa: <span>2 Khách</span></p>*/}
                    {/*            </div>*/}
                    {/*            <div className="admin-func d-flex me-0">*/}
                    {/*                <a href="">*/}
                    {/*                    <box-icon name='edit-alt'></box-icon>*/}
                    {/*                </a>*/}
                    {/*                <button type="button" className="btn" data-bs-toggle="modal"*/}
                    {/*                        data-bs-target="#exampleModal">*/}
                    {/*                    <box-icon name='trash' type='solid'/>*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="service-body">*/}
                    {/*    <div className="card" style={{width: '25rem', height: '26rem'}}>*/}
                    {/*        <a href="">*/}
                    {/*            <img*/}
                    {/*                src="https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr.jpg"*/}
                    {/*                className="card-img-top" alt="..."/>*/}
                    {/*        </a>*/}
                    {/*        <div className="card-body">*/}
                    {/*            <div>*/}
                    {/*                <h4 className="card-text">Phòng Superior Hướng Biển</h4>*/}
                    {/*                <p>Diện tích phòng: <span>85.8 m2</span></p>*/}
                    {/*                <p>Sức chứa: <span>2 Khách</span></p>*/}
                    {/*            </div>*/}
                    {/*            <div className="admin-func d-flex me-0">*/}
                    {/*                <a href="">*/}
                    {/*                    <box-icon name='edit-alt'></box-icon>*/}
                    {/*                </a>*/}
                    {/*                <button type="button" className="btn" data-bs-toggle="modal"*/}
                    {/*                        data-bs-target="#exampleModal">*/}
                    {/*                    <box-icon name='trash' type='solid'/>*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xóa dịch vụ</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc muốn xóa
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" className="btn btn-outline-dark">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default HomePage;

