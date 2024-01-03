import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
    const [inputData, setInputData] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()

        axios.post('http://localhost:3030/users', inputData)
            .then(res => {
                alert("successfully inserted");
                navigate('/');
            }).catch(err => console.log(err));
    }
    return (
        <div className="d-flex w-100 mt-5 justify-content-center align-items-center">
            <div className=" w-50 bg-light p-5 border">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control"
                            onChange={(e) => setInputData({ ...inputData, name: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control"
                            onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />
                    </div>
                    <br />
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}