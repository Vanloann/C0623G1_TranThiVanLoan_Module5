import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getAllCustomer} from "../services/Customer";

function CustomerList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getAllCustomer().then((res) => {
            setCustomers(res);
        })
    }, []);


    return <>
        <div id="create-tour" className="container mt-3">
            <div className="d-flex justify-content-between">
                <h1>THÔNG TIN KHÁCH HÀNG</h1>
                <Link to="/customer-creating" className="mt-4 me-2">
                    <box-icon name='plus-circle'></box-icon>
                </Link>
            </div>
            <div id="board">
                <table className="table table-bordered table-hover text-center">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>CCCD</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Hạng</th>
                        <th>Địa chỉ</th>
                        <th>Chức năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((item, index) =>
                    <tr key={item.id}>
                        <td id="id">{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.birthday}</td>
                        <td>{item.gender}</td>
                        <td>{item.idCard}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.email}</td>
                        <td>{item.memberType.level}</td>
                        <td>{item.address}</td>
                        <td>
                            <Link to={`/customer-editing/${item.id}`}>
                                <box-icon name='edit-alt'></box-icon>
                            </Link>
                            <br/>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <box-icon name='trash'></box-icon>
                            </button>
                        </td>
                    </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>

        {/*Modal*/}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <input type="hidden" name="idDel" id="idDel"/>
                            Confirm deleting <span id="nameDel" className="text-danger"/> ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-dark">Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>;
}

export default CustomerList;