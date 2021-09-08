import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import registerUser from '../../assets/images/register-user-icon.jpg';
import './index.css';

export default function UserRegister() {
    const baseApiUrl = "https://localhost:5001/api";
    const userUrl = baseApiUrl + "/user";
    const [data, setData] = useState([]);
    let count = 0;

    const getListRequest = async () => {
        await axios.get(userUrl)
            .then(response => {
                setData(response.data.data);
            }).catch(error => {
                console.log(error);
            })
    };

    useEffect(() => {
        getListRequest();
    }, [count]);

    const postIncludeRequest = async () => {
        await axios.post(userUrl, selectedUser)
            .then(response => {
                setData(data.concat(response.data.data));
            }).catch(error => {
                console.log(error);
            })
    };

    const [selectedUser, setSelectedUser] = useState({
        nome: '',
        email: '',
        active: false,
    });

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setSelectedUser({
            ...selectedUser,
            [name]: value
        });
        console.log(selectedUser);
    }

    const [modalInclude, setModalInclude] = useState(false);

    const openCloseModalInclude = () => {
        setModalInclude(!modalInclude);
    }

    return (
        <div className="user-container">
            <br />
            <h3>User register</h3>
            <header>
                <img src={registerUser} alt="Register"></img>
                <button className="btn btn-success" onClick={() => openCloseModalInclude()} >Include new user</button>
            </header>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.active}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button> {" "}
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>

            <Modal isOpen={modalInclude}>
                <ModalHeader>Include User</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Nome: </label>
                        <br />
                        <input type="text" className="form-control" name="nome" onChange={handleChange}></input>
                        <br />
                        <label>Email: </label>
                        <br />
                        <input type="text" className="form-control" name="email" onChange={handleChange}></input>
                        <br />
                        <label>Active: </label>
                        <br />
                        <input type="checkbox" className="form-control" name="active" onChange={handleChange}></input>
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => postIncludeRequest()}>Include</button>{" "}
                    <button className="btn btn-danger" onClick={() => openCloseModalInclude()}>Cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}