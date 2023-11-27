import {Link} from "react-router-dom";

function ContractList() {

    return <>
        <div id="create-tour" className="container mt-3">
            <div className="d-flex justify-content-between">
                <h1>DANH SÁCH HỢP ĐỒNG</h1>
                <Link to="/contract-creating"><box-icon name='plus-circle'></box-icon></Link>
            </div>

            <div id="board">
                <table className="table table-bordered table-hover text-center">
                    <thead>
                    <tr>
                        <th>Mã hợp đồng</th>
                        <th>Ngày làm hợp đồng</th>
                        <th>Ngày kết thúc</th>
                        <th>Tiền đặt cọc</th>
                        <th>Mã nhân viên</th>
                        <th>Mã khách hàng</th>
                        <th>Mã dịch vụ</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>17-11-2023</td>
                        <td>25-11-2023</td>
                        <td>1.000.000</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>17-11-2023</td>
                        <td>25-11-2023</td>
                        <td>1.000.000</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>17-11-2023</td>
                        <td>25-11-2023</td>
                        <td>1.000.000</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </>
}

export default ContractList;