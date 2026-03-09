import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";

function Shop() {
    const products = [
        {
            id: 1,
            name: "NF Runner X",
            slug: "nf-runner-x",
            category: "Footwear",
            price: "₹1,999",
            image:
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 2,
            name: "NF Street Low",
            slug: "nf-street-low",
            category: "Footwear",
            price: "₹2,499",
            image:
                "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 3,
            name: "NF Essential Tee",
            slug: "nf-essential-tee",
            category: "Garments",
            price: "₹899",
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 4,
            name: "NF Urban Jacket",
            slug: "nf-urban-jacket",
            category: "Garments",
            price: "₹2,999",
            image:
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 5,
            name: "NF Sport Flex",
            slug: "nf-sport-flex",
            category: "Footwear",
            price: "₹2,199",
            image:
                "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 6,
            name: "NF Classic Hoodie",
            slug: "nf-classic-hoodie",
            category: "Garments",
            price: "₹1,799",
            image:
                "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
        },
    ];

    return (
        <MainLayout>
            <section style={styles.hero}>
                <p style={styles.tag}>NF COLLECTION</p>
                <h1 style={styles.title}>Shop Premium Footwear & Garments</h1>
                <p style={styles.text}>
                    Explore premium quality products designed for comfort and style.
                </p>
            </section>

            <section style={styles.section}>
                <div style={styles.topRow}>
                    <h2 style={styles.heading}>All Products</h2>
                    <p style={styles.count}>{products.length} products</p>
                </div>

                <div style={styles.grid}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </MainLayout>
    );
}

const styles = {
    hero: {
        padding: "80px 20px",
        textAlign: "center",
        background: "#f8f8f8",
    },
    tag: {
        fontSize: "12px",
        letterSpacing: "2px",
        color: "#777",
        marginBottom: "10px",
    },
    title: {
        fontSize: "42px",
        margin: "0 0 12px",
        color: "#111",
    },
    text: {
        color: "#666",
        fontSize: "17px",
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: "1.6",
    },
    section: {
        padding: "70px 40px",
    },
    topRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        flexWrap: "wrap",
        gap: "10px",
    },
    heading: {
        fontSize: "30px",
        margin: 0,
        color: "#111",
    },
    count: {
        color: "#777",
        margin: 0,
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "24px",
    },
};

export default Shop;