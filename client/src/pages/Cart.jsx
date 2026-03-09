import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
    getCartItems,
    removeFromCart,
    updateCartQuantity,
} from "../utils/cart";
import { isUserLoggedIn } from "../utils/auth";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = isUserLoggedIn();

        if (!loggedIn) {
            navigate("/login", { state: { from: "/cart" } });
            return;
        }

        const items = getCartItems();
        console.log("Cart items from localStorage:", items);
        setCartItems(items);
    }, [navigate]);

    const handleRemove = (id, size, color) => {
        removeFromCart(id, size, color);
        setCartItems(getCartItems());
    };

    const handleQuantityChange = (id, size, color, quantity) => {
        if (quantity < 1) return;
        updateCartQuantity(id, size, color, quantity);
        setCartItems(getCartItems());
    };

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <MainLayout>
            <section style={styles.wrapper}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Your Cart</h1>
                    <p style={styles.subtitle}>{cartItems.length} items in cart</p>
                </div>

                {cartItems.length === 0 ? (
                    <div style={styles.emptyBox}>
                        <h2>Your cart is empty</h2>
                        <Link to="/shop" style={styles.shopBtn}>
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div style={styles.grid}>
                        <div>
                            {cartItems.map((item) => (
                                <div
                                    key={`${item.id}-${item.size}-${item.color}`}
                                    style={styles.card}
                                >
                                    <img src={item.image} alt={item.name} style={styles.image} />

                                    <div style={styles.info}>
                                        <p style={styles.category}>{item.category}</p>
                                        <h3 style={styles.name}>{item.name}</h3>
                                        <p style={styles.meta}>Size: {item.size}</p>
                                        <p style={styles.meta}>Color: {item.color}</p>
                                        <p style={styles.price}>₹{item.price}</p>

                                        <div style={styles.actions}>
                                            <div style={styles.qtyBox}>
                                                <button
                                                    style={styles.qtyBtn}
                                                    onClick={() =>
                                                        handleQuantityChange(
                                                            item.id,
                                                            item.size,
                                                            item.color,
                                                            item.quantity - 1
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>

                                                <span style={styles.qtyText}>{item.quantity}</span>

                                                <button
                                                    style={styles.qtyBtn}
                                                    onClick={() =>
                                                        handleQuantityChange(
                                                            item.id,
                                                            item.size,
                                                            item.color,
                                                            item.quantity + 1
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                style={styles.removeBtn}
                                                onClick={() =>
                                                    handleRemove(item.id, item.size, item.color)
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={styles.summary}>
                            <h2 style={styles.summaryTitle}>Order Summary</h2>

                            <div style={styles.summaryRow}>
                                <span>Total Items</span>
                                <span>{cartItems.length}</span>
                            </div>

                            <div style={styles.summaryRow}>
                                <span>Total Amount</span>
                                <span>₹{totalPrice}</span>
                            </div>

                            <button
                                style={styles.checkoutBtn}
                                onClick={() => navigate("/checkout")}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </MainLayout>
    );
}

const styles = {
    wrapper: {
        padding: "60px 40px",
    },
    header: {
        marginBottom: "30px",
    },
    title: {
        fontSize: "40px",
        marginBottom: "8px",
    },
    subtitle: {
        color: "#666",
    },
    emptyBox: {
        textAlign: "center",
        padding: "80px 20px",
        border: "1px solid #eee",
    },
    shopBtn: {
        display: "inline-block",
        marginTop: "20px",
        padding: "12px 20px",
        background: "#111",
        color: "#fff",
        textDecoration: "none",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "30px",
    },
    card: {
        display: "flex",
        gap: "20px",
        padding: "20px",
        border: "1px solid #eee",
        marginBottom: "20px",
        background: "#fff",
    },
    image: {
        width: "140px",
        height: "140px",
        objectFit: "cover",
    },
    info: {
        flex: 1,
    },
    category: {
        fontSize: "12px",
        color: "#777",
        letterSpacing: "1px",
        marginBottom: "6px",
    },
    name: {
        fontSize: "24px",
        margin: "0 0 8px",
    },
    meta: {
        color: "#666",
        margin: "4px 0",
    },
    price: {
        fontSize: "20px",
        fontWeight: "700",
        margin: "10px 0",
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
        marginTop: "14px",
    },
    qtyBox: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },
    qtyBtn: {
        width: "34px",
        height: "34px",
        border: "1px solid #ddd",
        background: "#fff",
        cursor: "pointer",
        fontSize: "18px",
    },
    qtyText: {
        minWidth: "20px",
        textAlign: "center",
        fontWeight: "600",
    },
    removeBtn: {
        border: "none",
        background: "transparent",
        color: "#c00",
        cursor: "pointer",
        fontWeight: "600",
    },
    summary: {
        border: "1px solid #eee",
        padding: "24px",
        height: "fit-content",
        background: "#fafafa",
    },
    summaryTitle: {
        marginBottom: "20px",
        fontSize: "26px",
    },
    summaryRow: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "14px",
        color: "#333",
    },
    checkoutBtn: {
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

export default Cart;