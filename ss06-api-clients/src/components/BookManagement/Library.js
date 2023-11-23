import 'boxicons';
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Modal from 'react-modal';
import * as bookService from "../../services/BookService"

function Library() {
    const [books, setBooks] = useState();

    useEffect(() => {
        getAllBook();
    }, []);
    const getAllBook = async () => {
        let data = await bookService.getAll();
        setBooks(data);
    };

    return <>

        <div className="container mt-4">
            <h1>Library</h1>
            <Link to="/create"><box-icon name='plus-circle'/></Link>
            <div>
                <table className=" table mt-4">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Function</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Link to={"/edit/${item.id}"}><box-icon name='edit-alt'/></Link>
                                <p><box-icon name='trash' /></p>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    </>


}
export default Library;