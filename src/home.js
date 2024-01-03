import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {

    //  State variable to hold the fetched data and columns 
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);

 // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        axios.get('http://localhost:3030/users')
            .then(res => {
                setColumns(Object.keys(res.data[0]))     // update the state with fetched columns for that extract column names from keys
                setRecords(res.data)  // Update the state with the fetched data
            }).catch(err => console.log(err));
    }, [])

    function handleDelete(id) {
        const confirm = window.confirm("do you want to delete");
        if (confirm) {
            axios.delete('http://localhost:3030/users/' + id)
                .then(res => {
                    alert('deleted successfully');
                    window.location.reload();
                }).catch(err => console.log(err))
        }
    }

    return (
        <div className="container mt-5 bg-light">
            <h1>Users</h1>
            <div className="text-end">
                <Link to="/add" className="btn btn-primary">Add New</Link>
            </div>
            <br/>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {columns.map((column, key) => (
                            <th key={key}>{column}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item, key) => (
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link className="btn btn-success btn-sm" to={`/update/${item.id}`}>Update</Link>
                                <button onClick={(e) => handleDelete(item.id)} className="btn btn-danger btn-sm ms-1" >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}