import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/Auth";
import {toast} from "react-toastify";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const {storeTokenInLS, isLoggedIn} = useAuth();

    const handleChange = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:4000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                toast.success("Login successfull")
                const res_data = await response.json();
                console.log("Response data: ", res_data);
                storeTokenInLS(res_data.token);
                setUser({ email: "", password: "" })
                console.log("isLoggedin ", isLoggedIn);
                navigate("/")
            }
        } catch (error) {
            toast.error("Error in login")
            console.log("Error in login", error);
        }

    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="images/login.png" alt="login image" width="500" height="500" />
                            </div>

                            <div className="registration-form">
                                <h1 className="registration-heading mb-3">Login</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="email" name="email" placeholder="Enter email" id="email" required
                                            value={user.email} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input type="password" name="password" placeholder="Enter password" id="password" required
                                            value={user.password} onChange={handleChange} />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Login</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Login