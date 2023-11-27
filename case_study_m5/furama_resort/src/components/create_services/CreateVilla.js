import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import * as services from "../../services/Service";
import {toast} from "react-toastify";

function CreateVilla() {
    const navigate = useNavigate();
    const initialValue = {
        name: "",
        image: "",
        area: 0,
        capacity: 0,
        rental: 0,
        standard: "",
        floors: 0,
        facilities: "",
        poolArea: 0,
        rentalPeriod: ""
    };

    const validateObject = {
        name: Yup.string().required("Vui lòng nhập tên dịch vụ!"),
        image: Yup.string().required("Vui lòng nhập hình ảnh!"),
        area: Yup.number()
            .required("Vui lòng nhập diện tích sử dụng!")
            .min(0, "Diện tích phải lớn hơn 0!"),
        capacity: Yup.number()
            .required("Vui lòng nhập sức chứa!")
            .min(0, "Số lượng khách tối thiểu phải lớn hơn 0!"),
        rental: Yup.number()
            .required("Vui lòng nhập chi phí thuê!")
            .min(0, "Chi phí thuê tối thiểu phải lớn hơn 0!"),
        standard: Yup.string().required("Vui lòng nhập tiêu chuẩn phòng!"),
        floors: Yup.number()
            .required("Vui lòng nhập số tầng!")
            .min(0, "Số tầng phải lớn hơn 0!"),
        facilities: Yup.string().required("Vui lòng nhập mô tả các tiện ích khác!"),
        poolArea: Yup.number()
            .required("Vui lòng nhập diên tích hồ bơi!")
            .min(0, "Diện tích hồ bơi phải lớn hơn 0!"),
        rentalPeriod: Yup.string().required("Vui lòng nhập thời gian thuê!"),
    };


    const addNewVilla = async (values) => {
        let result = await services.createVilla(values);
        if (result) {
            toast.success("Thêm mới thành công!");
            navigate("/")
        } else {
            toast.error("Có lỗi xảy ra!")
        }
    };

    return <>
        <div id="create-tour" className="container mt-3">
            <h1>THÊM MỚI DỊCH VỤ</h1>

            <div className="dropdown mb-4">
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

            <Formik
                initialValues={initialValue}
                onSubmit={(values) => {
                    addNewVilla(values);
                }}
                validationSchema={Yup.object(validateObject)}
            >

                <div id="board">
                    <Form className="mx-4" method="post" id="submit-form">

                        <div className="div-element">
                            <label htmlFor="name" className="form-label">Tên dịch vụ: </label>
                            <Field type="text" className="form-control" name="name" id="name"/>
                            <ErrorMessage name="name" component="span" className="err-mess text-danger"/>
                        </div>

                        <div id="date" className="div-element in-one-line">
                            <div className="div-element">
                                <label htmlFor="image" className="form-label">Hình ảnh: </label>
                                <Field src="" alt="image" className="form-control" name="image" id="image"/>
                                <ErrorMessage name="image" component="span" className="err-mess text-danger"/>
                            </div>
                            <div>
                                <label htmlFor="area" className="form-label">Diện tích sử dụng:</label>
                                <Field type="number" className="form-control" name="area" id="area"/>
                                <ErrorMessage name="area" component="span" className="err-mess text-danger"/>
                            </div>
                            <div>
                                <label htmlFor="capacity" className="form-label">Sức chứa :</label>
                                <Field type="number" className="form-control" name="capacity" id="capacity"/>
                                <ErrorMessage name="capacity" component="span" className="err-mess text-danger"/>
                            </div>
                        </div>
                        <div id="date" className="div-element in-one-line">
                            <div>
                                <label htmlFor="floors" className="form-label">Số tầng:</label>
                                <Field type="number" className="form-control" name="floors" id="floors"/>
                                <ErrorMessage name="floors" component="span" className="err-mess text-danger"/>
                            </div>
                            <div>
                                <label htmlFor="rental" className="form-label">Chi phí thuê:</label>
                                <Field type="number" className="form-control" name="rental" id="rental"/>
                                <ErrorMessage name="rental" component="span" className="err-mess text-danger"/>
                            </div>
                            <div>
                                <label htmlFor="rentalPeriod" className="form-label">Kiểu thuê :</label>
                                <Field type="text" className="form-control" name="rentalPeriod" id="rentalPeriod"/>
                                <ErrorMessage name="rentalPeriod" component="span" className="err-mess text-danger"/>
                            </div>
                        </div>

                        <div id="employeeInf" className="div-element in-one-line">
                            <div>
                                <label htmlFor="standard" className="form-label">Tiêu chuẩn phòng: </label>
                                <Field type="text" className="form-control extra-service" name="standard" id="standard"/>
                                <ErrorMessage name="standard" component="span" className="err-mess text-danger"/>
                            </div>

                            <div>
                                <label htmlFor="facilities" className="form-label">Tiện nghi khác:</label>
                                <Field type="text" className="form-control extra-service" name="facilities" id="facilities"/>
                                <ErrorMessage name="facilities" component="span" className="err-mess text-danger"/>
                            </div>

                            <div>
                                <label htmlFor="PoolArea" className="form-label">Diện tích hồ bơi:</label>
                                <Field type="number" className="form-control" name="poolArea" id="PoolArea"/>
                                <ErrorMessage name="poolArea" component="span" className="err-mess text-danger"/>
                            </div>
                        </div>

                        <div id="create-btn" className="text-center">
                            <button type="submit" id="btn-upload" className="btn btn-outline-dark my-3">LƯU</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    </>;
}

export default CreateVilla;