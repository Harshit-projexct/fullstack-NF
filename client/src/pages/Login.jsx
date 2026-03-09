import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { loginUser } from "../utils/auth";

function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({
        mobile: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.mobile || !form.password) {
            alert("Please fill all fields");
            return;
        }

        loginUser({
            name: "NF User",
            mobile: form.mobile,
            role: "user",
        });

        const redirectPath = location.state?.from || "/";
        navigate(redirectPath);
    };

    return (
        <MainLayout>
            <div style={styles.wrapper}>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <h2 style={styles.title}>Login</h2>

                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={form.mobile}
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <button type="submit" style={styles.button}>
                        Login
                    </button>

                    <p style={styles.text}>
                        Don’t have an account? <Link to="/signup">Signup</Link>
                    </p>
                </form>
            </div>
        </MainLayout>
    );
}

const styles = {
    wrapper: {
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
    },
    form: {
        width: "100%",
        maxWidth: "420px",
        padding: "30px",
        border: "1px solid #eee",
        background: "#fff",
    },
    title: {
        marginBottom: "20px",
        fontSize: "30px",
    },
    input: {
        width: "100%",
        padding: "14px",
        marginBottom: "14px",
        border: "1px solid #ddd",
        fontSize: "15px",
    },
    button: {
        width: "100%",
        padding: "14px",
        background: "#111",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "15px",
    },
    text: {
        marginTop: "16px",
        fontSize: "14px",
    },
};

export default Login;