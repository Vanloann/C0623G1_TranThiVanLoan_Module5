import {Link} from "react-router-dom";

function CreateService() {
    return <>
        <div id="create-tour" className="container mt-3">
            <h1>THÊM MỚI DỊCH VỤ</h1>

            <div className="dropdown mt-0">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    Chọn dịch vụ
                </button>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/create-villa">Villa</Link></li>
                    <li><Link className="dropdown-item" to="/create-house">House</Link></li>
                    <li><Link className="dropdown-item" to="/create-room">Room</Link></li>
                </ul>
            </div>
        </div>
    </>;
}

export default CreateService;