import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Update() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();;

    useEffect(() => {
        axios.get('http://localhost:3030/users/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        axios.put('http://localhost:3030/users/' + id, data)
            .then(res => {
                alert('updated successfully');
                navigate('/');
            })
    }

    return (
        <div className="d-flex w-100 mt-5 justify-content-center align-items-center">
            <div className=" w-50 bg-light p-5 border">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="id">ID</label>
                        <input value={data.id} disabled type="text" name="id" className="form-control"
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input value={data.name} type="text" name="name" className="form-control"
                            onChange={(e) => setData({ ...data, name: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input value={data.email} type="email" name="email" className="form-control"
                            onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </div>
                    <br />
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}