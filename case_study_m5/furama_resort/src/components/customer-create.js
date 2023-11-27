import React, {useEffect, useState} from "react";
import {createCustomer, getAllMemberType, getMemberTypeById} from "../services/Customer";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";

function CreateCustomer() {
    const navigate = useNavigate();
    const [customerType,setCustomerType] = useState();

    const initialValue = {
        name: "",
        birthday: "",
        gender: "",
        idCard: "",
        phoneNumber: "",
        email: "",
        address: "",
        memberType: ""
    };

    const validateObject = {
        name: Yup.string().required("Vui lòng nhập tên khách hàng!"),
            // .matches("^[a-zA-Z]+$", "Tên khách hàng không được chứa số"),
        birthday: Yup.string().required("Vui lòng nhập ngày sinh!"),
        gender: Yup.string().required("Vui lòng nhập giới tính!"),
        idCard: Yup.string().required("Vui lòng nhập CCCD!")
            .min(9, "Không được ít hơn 5 kí tự")
            .max(12, "Không được lớn hơn 12 kí tự"),
        phoneNumber: Yup.string().required("Vui lòng nhập số điện thoại!")
            .matches("(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})", "Số điện thoại không đúng định dạng"),
        email: Yup.string().required("Vui lòng nhập email!")
            .matches("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", "Email không hợp lệ"),
        address: Yup.string().required("Vui lòng nhập địa chỉ!"),
        // memberType: Yup.string().required("Vui lòng chọn loại khách hàng!")
    };

    const handleChangeCustomerType = (e) => {
        // console.log(e.target.value);
       getMemberTypeById(e.target.value).then(res => setCustomerType(res));
    };

    const [memberType, setMemberType] = useState([]);
    useEffect(() => {
        getAllMemberType().then((res) => {
            setMemberType(res);
        });
    }, []);

    const addNewCustomer = async (values) => {
        values.memberType = customerType;
        let result = await createCustomer(values);
        if (result) {
            toast.success("Thêm mới thành công!");
            navigate("/customer");
        } else {
            toast.error("Có lỗi xảy ra");
        }
    };

    return <>
        <div id="create-tour" className="container mt-3">
            <h1>THÊM MỚI KHÁCH HÀNG</h1>
            <Formik initialValues={initialValue}
                    onSubmit={(values) => {
                       addNewCustomer(values)
                    }}
                    validationSchema={Yup.object(validateObject)}
            >
            <div id="board">
                <Form className="mx-4" method="post" id="submit-form">

                    <div id="date" className="div-element in-one-line">
                        <div className="div-element">
                            <label htmlFor="name" className="form-label">Họ và Tên: </label>
                            <Field type="text" className="form-control name-level" name="name" id="name"/>
                            <ErrorMessage name="name" component="span" className="err-mess text-danger"/>
                        </div>

                        <div className="div-element">
                            <label htmlFor="birthday" className="form-label">Ngày sinh: </label>
                            <Field type="date" className="form-control" name="birthday" id="birthday"/>
                            <ErrorMessage name="birthday" component="span" className="err-mess text-danger"/>
                        </div>

                    </div>

                    <div id="date" className="div-element in-one-line">
                        <div className="div-element">
                            <label htmlFor="gender" className="form-label">Giới tính: </label>
                            <Field type="text" className="form-control" name="gender" id="gender"/>
                            <ErrorMessage name="gender" component="span" className="err-mess text-danger"/>
                        </div>

                        <div className="div-element">
                            <label htmlFor="idcard" className="form-label">CCCD: </label>
                            <Field type="text" className="form-control" name="idCard" id="idcard"/>
                            <ErrorMessage name="idCard" component="span" className="err-mess text-danger"/>
                        </div>

                        <div className="div-element">
                            <label htmlFor="phoneNumber" className="form-label">Số điện thoại: </label>
                            <Field type="text" className="form-control" name="phoneNumber" id="phoneNumber"/>
                            <ErrorMessage name="phoneNumber" component="span" className="err-mess text-danger"/>
                        </div>
                    </div>

                    <div id="date" className="div-element in-one-line">
                        <div className="div-element">
                            <label htmlFor="address" className="form-label">Địa chỉ: </label>
                            <Field type="text" className="form-control customer-props" name="address" id="address"/>
                            <ErrorMessage name="address" component="span" className="err-mess text-danger"/>
                        </div>

                        <div className="div-element">
                            <label htmlFor="email" className="form-label">Email: </label>
                            <Field type="text" className="form-control customer-props" name="email" id="email"/>
                            <ErrorMessage name="email" component="span" className="err-mess text-danger"/>
                        </div>

                        <div className="div-element">
                            <label htmlFor="memberType" className="form-label">Hạng thành viên: </label>
                            <select className="form-select customer-props" onChange={handleChangeCustomerType} aria-label="Default select example" name="memberType" id="memberType">
                                {/*<option selected>Hạng thành viên:</option>*/}
                                {memberType.map( (item, index) =>
                                    <option name="level" value={item.id} key={item.id}>{item.level}</option>
                                )}
                            </select>
                            {/*<ErrorMessage name="memberType" component="span" className="err-mess text-danger"/>*/}
                        </div>
                    </div>

                    <div id="create-btn" className="text-center">
                        <button type="submit" id="btn-upload" className="btn btn-outline-dark my-3">LƯU</button>
                    </div>
                </Form>
            </div>
            </Formik>
        </div>
    </>
}

export default CreateCustomer;