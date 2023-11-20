import {ErrorMessage, Field, Formik, useFormik} from "formik";
import * as Yup from "yup";

function HealthDeclaration() {

    return <>
        <div className="container justify-content-center p-5">
            <h2>Health Declaration Form</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Họ và Tên</label>
                        <Field type="text" className="form-control" name="name" id="name"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="idCard" className="form-label">CMND</label>
                        <Field type="text" className="form-control" name="idCard" id="idCard" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="birthday" className="form-label">Ngày sinh</label>
                        <Field type="text" className="form-control" name="birthday" id="birthday" />
                    </div>

                    <div className="mb-3">
                        <input className="form-check-input" type=/>
                        <label htmlFor="birthday" className="form-label">Ngày sinh</label>
                        <Field type="text" className="form-control" name="birthday" id="birthday" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <Field type="email" className="form-control" name="email" id="email"/>
                        <ErrorMessage name="email" component="span" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <Field type="text" className="form-control" name="phone" id="phone"/>
                        <ErrorMessage name="phone" component="span" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" name="message" id="message"/>
                        <ErrorMessage name="message" component="span" className="text-danger"/>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-outline-dark" onClick={notify}>Submit</button>
                    </div>
                </form>

        </div>
    </>
}