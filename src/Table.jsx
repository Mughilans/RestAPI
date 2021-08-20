import { useEffect, useState } from "react";
import React from 'react'
import axios from 'axios'
import MaterialTable from "material-table";
import './App.css'

const Table = (props) => {
    const [tabledata, setTableData] = useState({})
    const handleCity = (cityData) => {
        console.log("1", cityData)
        props.history.push({ pathname: "/city", cityData })
    }

    const cols = [
        { title: "ID", field: "id" },
        { title: "OBDB_ID", field: "obdb_id" },
        { title: "Name", field: "name" },
        { title: "Brewery_Type", field: "brewery_type" },
        { title: "City", field: "city", render: rowData => <a className='link' onClick={() => handleCity(rowData)}> {rowData.city}</a> },
        { title: "State", field: "state" },
        { title: "Postal_Code", field: "postal_code" },
        { title: "Country", field: "country" },
        { title: "Phone", field: "phone" },
        { title: "Updated_At", field: "updated_at" },
        { title: "Created_At", field: "created_at" },
    ]

    const fetchData = () => {
        axios
            .get('https://api.openbrewerydb.org/breweries')
            .then((res) => {
                setTableData(res)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);
    const data = tabledata.data
    return (
        <div>
            <div className="Table-Container">
                <h1 className="title">Show all Brewery Details</h1>
                <MaterialTable
                    title="Brewery Details"
                    data={data}
                    columns={cols}
                />
            </div>
        </div>
    )
}
export default Table