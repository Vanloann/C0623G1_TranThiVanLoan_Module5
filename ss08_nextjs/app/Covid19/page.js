'use client';
import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import * as covidService from "../../services/CovidService"
import {getAll} from "../../services/CovidService";

function CovidInformation() {
    const [information, setInformtion] = useState();

    useEffect(() => {
        getAll().then((res) => {
            console.log(res)
            setInformtion(res);
        });
    }, []);

    if (!information) return null

    return (
        <>
            <h2 className="container mt-4">Vietnam's COVID 19 Information</h2>
            {/*<Button variant="primary">This is a Button</Button>*/}
            {/*<button className="btn btn-success">Button</button>*/}
            <table className=" table mt-4 container">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {information.map((item, index) =>
                    <tr key={item.id}>
                        {/*<td>{index + 1}</td>*/}
                        <td>{new Date(item.Date).toLocaleDateString()}</td>
                        <td>{item.Confirmed}</td>
                        <td>{item.Active}</td>
                        <td>{item.Recovered}</td>
                        <td>{item.Deaths}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
}

export default CovidInformation;