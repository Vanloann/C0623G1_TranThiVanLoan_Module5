import store from "../redux/Store";
import {useDispatch, useSelector} from "react-redux";
import {getAllUser, removeUser} from "../redux/middleware/UserMiddleware";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

function UserList() {
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();
    const [deletedUser, setDeletedUser] = useState({});

    useEffect(() => {
        dispatch(getAllUser());
    }, []);

    const deleteUser = () => {
        dispatch(removeUser(deletedUser.id));
        toast.success("Xóa người dùng thành công");
    };

    if (!users) {
        return null;
    }

    return <>
        <div className="container mt-4">
            <h1>User List</h1>
            <Link to="/create">
                <box-icon name='plus-circle'/>
            </Link>
            <div>
                <table className="table table-bordered table-hover table-striped mt-4 text-center">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Function</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.website}</td>
                            <td>
                                {/*<Link to={`/edit/${item.id}`}>*/}
                                {/*    <box-icon name='edit-alt'/>*/}
                                {/*</Link>*/}
                                <button type="button" onClick={() => setDeletedUser(item)} className="btn" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                    <box-icon name='trash'/>
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                Confirm deleting {deletedUser.name}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" onClick={deleteUser} data-bs-dismiss="modal" className="btn btn-outline-dark">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default UserList;