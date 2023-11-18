function EditService() {
    return <>
        <div id="create-tour" className="container mt-3">
            <h1>CHỈNH SỬA DỊCH VỤ</h1>
            <div id="board">
                <form className="mx-4" method="post" id="submit-form">
                    <div className="mb-3">
                    </div>

                    <div className="div-element">
                        <label htmlFor="name" className="form-label">Tên dịch vụ: </label>
                        <input type="text" className="form-control" id="name"/>
                    </div>

                    <div className="div-element">
                        <label htmlFor="img" className="form-label">Hình ảnh: </label>
                        <input src="" alt="image" className="form-control" id="img"/>
                    </div>

                    <div id="date" className="div-element in-one-line">
                        <div>
                            <label htmlFor="area" className="form-label">Diện tích sử dụng:</label>
                            <input type="number" className="form-control" id="area"/>
                        </div>
                        <div>
                            <label htmlFor="rental" className="form-label">Chi phí thuê:</label>
                            <input type="number" className="form-control" id="rental"/>
                        </div>
                        <div>
                            <label htmlFor="capability" className="form-label">Số lượng người tối đa :</label>
                            <input type="number" className="form-control" readOnly id="capability"/>
                        </div>
                        <div>
                            <label htmlFor="rental-type" className="form-label">Kiểu thuê :</label>
                            <input type="text" className="form-control" readOnly id="rental-type"/>
                        </div>
                    </div>

                    <div id="employeeInf" className="div-element in-one-line">

                        <div>
                            <label htmlFor="extra-service" className="form-label"/>
                            <select className="form-select" id="extra-service" aria-label="Default select example">
                                <option selected>Dịch vụ đi kèm</option>
                                <option value="1">Message</option>
                                <option value="2">Karaoke</option>
                                <option value="3">Thức ăn</option>
                                <option value="4">Nước uống</option>
                                <option value="5">Thuê xe di chuyển</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="unit" className="form-label">Đơn vị :</label>
                            <input type="number" className="form-control extra-service" readOnly id="unit"/>
                        </div>
                        <div>
                            <label htmlFor="price" className="form-label">Giá tiền:</label>
                            <input type="number" className="form-control extra-service" readOnly id="price"/>
                        </div>
                    </div>

                    <div id="create-btn" className="text-center">
                        <button type="submit" id="btn-upload" className="btn btn-outline-dark my-3">LƯU THAY ĐỔI</button>
                    </div>
                </form>
            </div>
        </div>
    </>;
}

export default EditService;