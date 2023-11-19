function CustomerList() {
    return <>
        <div id="create-tour" className="container mt-3">
            <h1>THÔNG TIN KHÁCH HÀNG</h1>
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
                    <tr>
                        <td id="id">1</td>
                        <td>Nguyễn Văn A</td>
                        <td>1970-11-07</td>
                        <td>Nam</td>
                        <td>643431213</td>
                        <td>0945423362</td>
                        <td>thihao07@gmail.com</td>
                        <td>Vàng</td>
                        <td>Đà Nẵng</td>
                        <td>
                            <box-icon name='edit-alt'></box-icon>
                            <br/>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <box-icon name='trash'></box-icon>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Nguyễn Văn B</td>
                        <td>1970-11-07</td>
                        <td>Nam</td>
                        <td>643431213</td>
                        <td>0945423362</td>
                        <td>thihao07@gmail.com</td>
                        <td>Vàng</td>
                        <td>Đà Nẵng</td>
                        <td>
                            <box-icon name='edit-alt'></box-icon>
                            <br/>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <box-icon name='trash'></box-icon>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Nguyễn Văn C</td>
                        <td>1970-11-07</td>
                        <td>Nam</td>
                        <td>643431213</td>
                        <td>0945423362</td>
                        <td>thihao07@gmail.com</td>
                        <td>Vàng</td>
                        <td>Đà Nẵng</td>
                        <td>
                            <box-icon name='edit-alt'></box-icon>
                            <br/>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <box-icon name='trash'></box-icon>
                            </button>
                        </td>
                    </tr>
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