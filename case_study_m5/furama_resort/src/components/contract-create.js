function CreateContract() {
    return <>
        <div id="create-tour" className="container mt-3">
            <h1>TẠO HỢP ĐỒNG</h1>
            <div id="board">
                <form className="mx-4" method="post" id="submit-form">
                    <div className="mb-3">
                        <input type="hidden" className="form-control" placeholder="Enter ID" id="id" value="1"/>
                    </div>

                    <div className="div-element">
                        <label htmlFor="name" className="form-label">Tên khách hàng: </label>
                        <input type="text" className="form-control" id="name"/>
                    </div>

                    <div className="div-element">
                        <label htmlFor="address" className="form-label">Địa chỉ: </label>
                        <input type="text" className="form-control" id="address"/>
                    </div>


                    <div id="date" className="div-element in-one-line">
                        <div>
                            <label htmlFor="startDate" className="form-label">Ngày làm hợp đồng:</label>
                            <input type="date" className="form-control" id="startDate"/>
                        </div>
                        <div>
                            <label htmlFor="endDate" className="form-label">Ngày kết thúc:</label>
                            <input type="date" className="form-control" id="endDate"/>
                        </div>
                        <div>
                            <label htmlFor="price" className="form-label"> Tiền đặt cọc: </label>
                            <input type="number" className="form-control" id="price"/>
                        </div>
                    </div>

                    <div id="employeeInf" className="div-element in-one-line">
                        <div>
                            <label htmlFor="employeeId" className="form-label">Mã nhân viên :</label>
                            <input type="number" className="form-control" readOnly id="employeeId"/>
                        </div>
                        <div>
                            <label htmlFor="customerId" className="form-label">Mã khách hàng :</label>
                            <input type="number" className="form-control" readOnly id="customerId"/>
                        </div>
                        <div>
                            <label htmlFor="serviceId" className="form-label">Mã dịch vụ :</label>
                            <input type="number" className="form-control" readOnly id="serviceId"/>
                        </div>
                    </div>


                    <div id="create-btn" className="text-center">
                        <button type="submit" id="btn-upload" className="btn btn-outline-dark my-3">LƯU</button>
                    </div>
                </form>
            </div>
        </div>

    </>
}

export default CreateContract;