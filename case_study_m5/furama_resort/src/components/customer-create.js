import React from "react";

function CreateCustomer() {

    return <>
        <div id="create-tour" className="container mt-3">
            <h1>THÊM MỚI KHÁCH HÀNG</h1>
            <div id="board">
                <form className="mx-4" method="post" id="submit-form">
                    <div className="mb-3">
                        <input type="hidden" className="form-control" placeholder="Enter ID" id="id" value="1"/>
                    </div>

                    <div id="date" className="div-element in-one-line">
                        <div className="div-element">
                            <label htmlFor="name" className="form-label">Họ và Tên: </label>
                            <input type="text" className="form-control name-level" id="name"/>
                        </div>

                        <div className="div-element">
                            <label htmlFor="level" className="form-label">Hạng: </label>
                            <input type="text" className="form-control name-level" id="level"/>
                        </div>
                    </div>

                    <div id="date" className="div-element in-one-line">
                        <div className="div-element">
                            <label htmlFor="gender" className="form-label">Giới tính: </label>
                            <input type="text" className="form-control" id="gender"/>
                        </div>

                        <div className="div-element">
                            <label htmlFor="birthday" className="form-label">Ngày sinh: </label>
                            <input type="text" className="form-control" id="birthday"/>
                        </div>

                        <div className="div-element">
                            <label htmlFor="address" className="form-label">Địa chỉ: </label>
                            <input type="text" className="form-control" id="address"/>
                        </div>
                    </div>

                    <div id="date" className="div-element in-one-line">
                        <div className="div-element">
                            <label htmlFor="idcard" className="form-label">CCCD: </label>
                            <input type="text" className="form-control" id="idcard"/>
                        </div>

                        <div className="div-element">
                            <label htmlFor="phone" className="form-label">Số điện thoại: </label>
                            <input type="text" className="form-control" id="phone"/>
                        </div>

                        <div className="div-element">
                            <label htmlFor="email" className="form-label">Email: </label>
                            <input type="text" className="form-control" id="email"/>
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

export default CreateCustomer;