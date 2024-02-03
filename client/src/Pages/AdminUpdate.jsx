import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import { useAuth } from '../store/Auth';
import { toast } from 'react-toastify';

const AdminUpdate = () => {
    const [data,setData]  = useState({
        username:"",
        email:"",
        phone:""
    });

    const params = useParams();
    const {authenticationToken} = useAuth();

    useEffect(()=>{
        getSingleUserData();
    },[]);

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {

            const response = await fetch(`http://localhost:4000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authenticationToken,
                },
                body: JSON.stringify(data)
            });

            if(response.ok){
                toast.success("User updated!!")
            }
            else{
                toast.error("User updation fail!!")
            }

        
        } catch (error) {
            console.log("Error in updating users data to the frontend", error);
        }
    }

    const getSingleUserData = async() =>{
        try {

            const response = await fetch(`http://localhost:4000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authenticationToken,
                },
            });

            const data = await response.json();

            console.log(`users  after deleting  ${data}`);

            // if(response.ok)
            // {
            //     getAllUsersData();
            // }
            setData(data);
        } catch (error) {
            console.log("Error in deleting users data to the frontend", error);
        }
    }

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

       setData({
        ...data,
        [name]:value
       })
    }
  return (
    <>
      <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Update </h1>
                </div>
                {/* contact page main  */}
                <div className="container grid  grid-two-cols">
                    
                    {/* contact form content actual  */}
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={data.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={data.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone">phone</label>
                                <input
                                    type="phone"
                                    name="phone"
                                    id="phone"
                                    autoComplete="off"
                                    value={data.phone}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <button type="submit">update</button>
                            </div>
                        </form>
                    </section>
                </div>

                
            </section>
    </>
  )
}

export default AdminUpdate
