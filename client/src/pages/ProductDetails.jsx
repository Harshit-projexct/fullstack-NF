import MainLayout from "../layouts/MainLayout";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { isUserLoggedIn } from "../utils/auth";
import { addToCart } from "../utils/cart";

function ProductDetails() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const products = [
        {
            id: 1,
            name: "NF Runner X",
            slug: "nf-runner-x",
            category: "Footwear",
            price: 1999,
            description:
                "Premium running shoes designed for comfort, performance, and modern style.",
            image:
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 2,
            name: "NF Street Low",
            slug: "nf-street-low",
            category: "Footwear",
            price: 2499,
            description:
                "A premium streetwear-inspired sneaker built for daily wear and standout looks.",
            image:
                "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 3,
            name: "NF Essential Tee",
            slug: "nf-essential-tee",
            category: "Garments",
            price: 899,
            description:
                "Soft premium cotton t-shirt with a clean and refined everyday fit.",
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 4,
            name: "NF Urban Jacket",
            slug: "nf-urban-jacket",
            category: "Garments",
            price: 2999,
            description:
                "Modern urban jacket combining comfort, layering style, and premium finish.",
            image:
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
        },
    ];

    const product = products.find((item) => item.slug === slug);

    const handleAddToCart = () => {
        if (!isUserLoggedIn()) {
            navigate("/login", { state: { from: location.pathname } });
            return;
        }

        if (!product) {
            alert("Product not found");
            return;
        }

        if (!selectedSize || !selectedColor) {
            alert("Please select size and color");
            return;
        }

        const cartProduct = {
            id: product.id,
            name: product.name,
            slug: product.slug,
            category: product.category,
            price: Number(product.price),
            image: product.image,
            size: selectedSize,
            color: selectedColor,
        };

        console.log("Adding to cart:", cartProduct);

        addToCart(cartProduct);

        console.log("Updated cart:", JSON.parse(localStorage.getItem("nf_cart")));

        navigate("/cart");
    };

    if (!product) {
        return (
            <MainLayout>
                <div style={{ padding: "80px 20px", textAlign: "center" }}>
                    <h2>Product not found</h2>
                    <Link to="/shop">Go to Shop</Link>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <section style={styles.wrapper}>
                <div style={styles.imageBox}>
                    <img src={product.image} alt={product.name} style={styles.image} />
                </div>

                <div style={styles.content}>
                    <p style={styles.category}>{product.category}</p>
                    <h1 style={styles.name}>{product.name}</h1>
                    <p style={styles.price}>₹{product.price}</p>
                    <p style={styles.description}>{product.description}</p>

                    <div style={styles.options}>
                        <div>
                            <label style={styles.label}>Size</label>
                            <select
                                style={styles.select}
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                            >
                                <option value="">Select size</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>

                        <div>
                            <label style={styles.label}>Color</label>
                            <select
                                style={styles.select}
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                            >
                                <option value="">Select color</option>
                                <option value="Black">Black</option>
                                <option value="White">White</option>
                                <option value="Blue">Blue</option>
                            </select>
                        </div>
                    </div>

                    <button style={styles.button} onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </section>
        </MainLayout>
    );
}

const styles = {
    wrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        padding: "70px 40px",
        alignItems: "center",
    },
    imageBox: {
        background: "#f8f8f8",
        padding: "20px",
    },
    image: {
        width: "100%",
        height: "600px",
        objectFit: "cover",
        display: "block",
    },
    content: {
        maxWidth: "520px",
    },
    category: {
        fontSize: "12px",
        color: "#777",
        letterSpacing: "2px",
        marginBottom: "12px",
    },
    name: {
        fontSize: "42px",
        margin: "0 0 14px",
        color: "#111",
    },
    price: {
        fontSize: "28px",
        fontWeight: "700",
        marginBottom: "18px",
        color: "#111",
    },
    description: {
        fontSize: "16px",
        color: "#666",
        lineHeight: "1.8",
        marginBottom: "24px",
    },
    options: {
        display: "flex",
        gap: "20px",
        marginBottom: "24px",
        flexWrap: "wrap",
    },
    label: {
        display: "block",
        marginBottom: "8px",
        fontWeight: "600",
    },
    select: {
        padding: "12px 14px",
        minWidth: "160px",
        border: "1px solid #ddd",
    },
    button: {
        padding: "14px 28px",
        background: "#111",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "15px",
    },
};

export default ProductDetails;