import { Link, useNavigate } from "react-router-dom";
import { getLoggedInUser, logoutUser } from "../utils/auth";

function Navbar() {
    const navigate = useNavigate();
    const user = getLoggedInUser();

    const handleLogout = () => {
        logoutUser();
        navigate("/");
        window.location.reload();
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>NF</div>

            <div style={styles.centerLinks}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/shop" style={styles.link}>Shop</Link>
                <Link to="/cart" style={styles.link}>Cart</Link>

                {!user ? (
                    <>
                        <Link to="/login" style={styles.link}>Login</Link>
                        <Link to="/signup" style={styles.link}>Signup</Link>
                    </>
                ) : (
                    <>
                        <Link to="/profile" style={styles.link}>Profile</Link>
                        <button style={styles.logoutBtn} onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        borderBottom: "1px solid #eee",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },
    logo: {
        fontSize: "30px",
        fontWeight: "800",
        letterSpacing: "4px",
        color: "#111",
    },
    centerLinks: {
        display: "flex",
        gap: "24px",
        alignItems: "center",
    },
    link: {
        textDecoration: "none",
        color: "#111",
        fontWeight: "500",
        fontSize: "15px",
    },
    logoutBtn: {
        background: "#111",
        color: "#fff",
        border: "none",
        padding: "10px 14px",
        cursor: "pointer",
    },
};

export default Navbar;