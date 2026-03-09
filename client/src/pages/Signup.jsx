import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { loginUser } from "../utils/auth";

function Signup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.mobile || !form.password) {
            alert("Please fill all fields");
            return;
        }

        loginUser({
            name: form.name,
            mobile: form.mobile,
            role: "user",
        });

        navigate("/");
    };

    return (
        <MainLayout>
            <div style={styles.wrapper}>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <h2 style={styles.title}>Create Account</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        style={styles.input}
                    />

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
                        Signup
                    </button>

                    <p style={styles.text}>
                        Already have an account? <Link to="/login">Login</Link>
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

export default Signup;