import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/Auth';
import { Link } from 'react-router-dom';

const AdminUsers = () => {

    const { authenticationToken } = useAuth();

    const [user, setUser] = useState([]);

    const getAllUsersData = async () => {
        try {

            const response = await fetch("http://localhost:4000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authenticationToken,
                },
            });

            const data = await response.json();

            console.log(`users  ${data}`);
            setUser(data);
        } catch (error) {
            console.log("Error in fetching users data to the frontend", error);
        }
    }

    const deleteUser = async(id)=>{
        try {

            const response = await fetch(`http://localhost:4000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authenticationToken,
                },
            });

            const data = await response.json();

            console.log(`users  after deleting  ${data}`);

            if(response.ok)
            {
                getAllUsersData();
            }
            // setUser(data);
        } catch (error) {
            console.log("Error in deleting users data to the frontend", error);
        }
    }

    useEffect(() => {
        getAllUsersData();
    }, [])

    return (
        <>
            <section className="admin-user-section">
                <div className="container">
                    <h1>Admin User Data</h1>

                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((currElem, index) => {
                                    return <tr key={index}>
                                        <td>{currElem.username}</td>
                                        <td>{currElem.email}</td>
                                        <td>{currElem.phone}</td>
                                        <td><Link to={`/admin/users/${currElem._id}/edit`}>Edit</Link></td>
                                        <td><button onClick={()=>deleteUser(currElem._id)}>Delete</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </section>

        </>
    )
}

export default AdminUsers
