import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { isUserLoggedIn } from "../utils/auth";
import { getCartItems } from "../utils/cart";

function Checkout() {
    const navigate = useNavigate();
    const cartItems = getCartItems();

    useEffect(() => {
        if (!isUserLoggedIn()) {
            navigate("/login", { state: { from: "/checkout" } });
            return;
        }

        if (cartItems.length === 0) {
            navigate("/cart");
        }
    }, [navigate, cartItems.length]);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <MainLayout>
            <section style={styles.wrapper}>
                <div style={styles.left}>
                    <h1 style={styles.title}>Checkout</h1>

                    <div style={styles.box}>
                        <h3>Delivery Details</h3>
                        <input type="text" placeholder="Full Name" style={styles.input} />
                        <input type="text" placeholder="Mobile Number" style={styles.input} />
                        <input type="text" placeholder="Address Line 1" style={styles.input} />
                        <input type="text" placeholder="City" style={styles.input} />
                        <input type="text" placeholder="State" style={styles.input} />
                        <input type="text" placeholder="Pincode" style={styles.input} />
                    </div>

                    <div style={styles.box}>
                        <h3>Payment Method</h3>
                        <p style={styles.cod}>Cash on Delivery</p>
                    </div>
                </div>

                <div style={styles.right}>
                    <div style={styles.summary}>
                        <h2 style={styles.summaryTitle}>Order Summary</h2>

                        {cartItems.map((item) => (
                            <div
                                key={`${item.id}-${item.size}-${item.color}`}
                                style={styles.itemRow}
                            >
                                <span>
                                    {item.name} x {item.quantity}
                                </span>
                                <span>₹{item.price * item.quantity}</span>
                            </div>
                        ))}

                        <hr style={styles.hr} />

                        <div style={styles.totalRow}>
                            <strong>Total</strong>
                            <strong>₹{totalPrice}</strong>
                        </div>

                        <button style={styles.placeOrderBtn}>Place COD Order</button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

const styles = {
    wrapper: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "30px",
        padding: "60px 40px",
    },
    left: {},
    right: {},
    title: {
        fontSize: "40px",
        marginBottom: "20px",
    },
    box: {
        border: "1px solid #eee",
        padding: "24px",
        marginBottom: "20px",
        background: "#fff",
    },
    input: {
        width: "100%",
        padding: "14px",
        marginTop: "12px",
        border: "1px solid #ddd",
        fontSize: "15px",
    },
    cod: {
        fontSize: "16px",
        color: "#111",
        fontWeight: "600",
    },
    summary: {
        border: "1px solid #eee",
        padding: "24px",
        background: "#fafafa",
    },
    summaryTitle: {
        fontSize: "26px",
        marginBottom: "20px",
    },
    itemRow: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "12px",
        gap: "10px",
    },
    hr: {
        margin: "20px 0",
        border: "none",
        borderTop: "1px solid #ddd",
    },
    totalRow: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "18px",
    },
    placeOrderBtn: {
        width: "100%",
        marginTop: "20px",
        padding: "14px",
        background: "#111",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "15px",
    },
};

export default Checkout;