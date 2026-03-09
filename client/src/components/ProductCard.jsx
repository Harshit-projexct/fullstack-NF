import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />

            <div style={styles.content}>
                <p style={styles.category}>{product.category}</p>
                <h3 style={styles.name}>{product.name}</h3>
                <p style={styles.price}>{product.price}</p>

                <Link to={`/product/${product.slug}`} style={styles.link}>
                    View Product
                </Link>
            </div>
        </div>
    );
}

const styles = {
    card: {
        background: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "320px",
        objectFit: "cover",
        display: "block",
    },
    content: {
        padding: "18px",
    },
    category: {
        fontSize: "12px",
        color: "#888",
        letterSpacing: "1px",
        marginBottom: "8px",
    },
    name: {
        fontSize: "20px",
        color: "#111",
        margin: "0 0 10px",
    },
    price: {
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "14px",
        color: "#111",
    },
    link: {
        display: "inline-block",
        padding: "10px 18px",
        background: "#111",
        color: "#fff",
        textDecoration: "none",
    },
};

export default ProductCard;