import { useState } from "react";
import { useAuth } from "./AuthProvider";
export default function Login() {
    const [inputs, setInputs] = useState({ user: "", password: "" });
    const auth = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputs.user !== "" && inputs.password !== "") {
            auth.loginAction(inputs);
            return;
        }
        alert("Please fill in all fields");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="user">Username:</label>
            <input
                type="text"
                id="user"
                name="user"
                value={inputs.user}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
            />
            <br />
            <button type="submit">Login</button>
        </form>
    );
}