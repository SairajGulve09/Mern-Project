import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import {toast} from "react-toastify";


const Register = () =>{

    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });

    const navigate = useNavigate();

    const {storeTokenInLS} = useAuth();

    const handleInput = (e) =>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
            ...user,
            [name]:value,
        });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch(`https://polyverse-oo8c7ej1x-sairajgulve09s-projects.vercel.app/register`,{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
        });

        if(response.ok)
        {
            const res_data = await response.json();
            toast.success("User registered successfully...")
            console.log("Response data: ", res_data);
            storeTokenInLS(res_data.token);
            setUser({username:"",email:"",phone:"",password:""})
            navigate("/")
        }

        console.log(response);

        } catch (error) {
            toast.error("Error in registration")
            console.log("Error in registration",error);
        }
        
    };

    return(
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/register.png" alt="Registration image" width="500" height="500"/>
                            </div>

                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Registration</h1>
                                <br/>

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username" >username</label>
                                        <input type="text" name="username" placeholder="Enter username" id="username" required 
                                        value={user.username} onChange={handleInput}/>
                                    </div>

                                    <div>
                                        <label htmlFor="email" >email</label>
                                        <input type="email" name="email" placeholder="Enter email" id="email" required 
                                        value={user.email} onChange={handleInput}/>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" >phone no</label>
                                        <input type="number" name="phone" placeholder="Enter phone number" id="phone" required 
                                        value={user.phone} onChange={handleInput}/>
                                    </div>

                                    <div>
                                        <label htmlFor="password" >password</label>
                                        <input type="password" name="password" placeholder="Enter password" id="password" required 
                                        value={user.password} onChange={handleInput}/>
                                    </div>

                                    <br/>

                                    <button type="submit" className="btn btn-submit">Register</button>
                                    
                                </form>
                            </div>
                        </div> 
                    </div>
                </main>
            </section>
        </>
    )
}

export default Register
