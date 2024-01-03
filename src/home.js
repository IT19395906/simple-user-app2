import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {

    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3030/users')
            .then(res => {
                setColumns(Object.keys(res.data[0]))
                setRecords(res.data)

            })
    }, [])

    function handleDelete(id) {
        const confirm = window.confirm("do you want to delete");
        if (confirm) {
            axios.delete('http://localhost:3030/users/' + id)
                .then(res => {
                    alert('deleted successfully');
                }).catch(err => console.log(err))
        }
    }

    return (
        <div className="container mt-5">
            <div className="text-end">
                <Link to="/add" className="btn btn-primary">Add New</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((c, i) => (
                            <th key={i}>{c}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>
                                <Link className="btn btn-success btn-sm" to={`/update/${d.id}`}>Update</Link>
                                <button onClick={(e) => handleDelete(d.id)} className="btn btn-danger btn-sm ms-1" >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}