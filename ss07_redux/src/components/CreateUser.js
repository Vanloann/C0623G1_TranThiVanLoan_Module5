import {Formik, Form, Field, ErrorMessage} from "formik";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {createUser} from "../redux/middleware/UserMiddleware";
import {toast} from "react-toastify";


function CreateUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValue = {
        name: "",
        email: "",
        website: "",
    };

    const addNewUser = async (values) => {
        dispatch(createUser(values));
        toast.success("Thêm mới thành công");
        navigate("/user")
    };

    return <>
        <div className="container mt-4">
            <h1>Add New User</h1>
            <Formik
                initialValues={initialValue}
                onSubmit={(values) => {
                    addNewUser(values);
                }}
                // validationSchema={Yup.object(validateObject)}
            >

                <Form>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <Field type="text" className="form-control" name="name" id="name"/>
                            {/*<ErrorMessage name="title" component="span" className="err-mess text-danger"/>*/}
                        </div>

                        <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <Field type="text" className="form-control" name="email" id="email"/>
                        {/*<ErrorMessage name="quantity" component="span" className="err-mess text-danger"/>*/}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="website" className="form-label">Website</label>
                            <Field type="text" className="form-control" name="website" id="website"/>
                            {/*<ErrorMessage name="title" component="span" className="err-mess text-danger"/>*/}
                        </div>

                        <div className="text-center">
                            <button className="btn btn-outline-dark" type="submit">Submit</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    </>
}
export default CreateUser;