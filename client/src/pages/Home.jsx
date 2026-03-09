import MainLayout from "../layouts/MainLayout";

function Home() {
    const categories = [
        {
            title: "Men Footwear",
            subtitle: "Premium everyday styles",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Women Footwear",
            subtitle: "Elegant and trendy picks",
            image:
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
        },
        {
            title: "Garments",
            subtitle: "Refined fashion essentials",
            image:
                "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80",
        },
    ];

    const products = [
        {
            id: 1,
            name: "NF Runner X",
            category: "Footwear",
            price: "₹1,999",
            image:
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 2,
            name: "NF Street Low",
            category: "Footwear",
            price: "₹2,499",
            image:
                "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 3,
            name: "NF Essential Tee",
            category: "Garments",
            price: "₹899",
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 4,
            name: "NF Urban Jacket",
            category: "Garments",
            price: "₹2,999",
            image:
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
        },
    ];

    return (
        <MainLayout>
            <section style={styles.hero}>
                <div style={styles.heroOverlay}>
                    <p style={styles.heroTag}>NF PREMIUM COLLECTION</p>
                    <h1 style={styles.heroTitle}>Footwear & Garments That Define Style</h1>
                    <p style={styles.heroText}>
                        Premium looks, refined comfort, and timeless fashion for every day.
                    </p>
                    <div style={styles.heroButtons}>
                        <button style={styles.primaryBtn}>Shop Now</button>
                        <button style={styles.secondaryBtn}>Explore Collection</button>
                    </div>
                </div>
            </section>

            <section style={styles.section}>
                <div style={styles.sectionHeader}>
                    <p style={styles.sectionTag}>CATEGORIES</p>
                    <h2 style={styles.sectionTitle}>Shop by Category</h2>
                </div>

                <div style={styles.categoryGrid}>
                    {categories.map((item, index) => (
                        <div key={index} style={styles.categoryCard}>
                            <img src={item.image} alt={item.title} style={styles.categoryImage} />
                            <div style={styles.categoryContent}>
                                <h3 style={styles.cardTitle}>{item.title}</h3>
                                <p style={styles.cardText}>{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ ...styles.section, background: "#fafafa" }}>
                <div style={styles.sectionHeader}>
                    <p style={styles.sectionTag}>FEATURED PRODUCTS</p>
                    <h2 style={styles.sectionTitle}>Best of NF</h2>
                </div>

                <div style={styles.productGrid}>
                    {products.map((product) => (
                        <div key={product.id} style={styles.productCard}>
                            <img src={product.image} alt={product.name} style={styles.productImage} />
                            <div style={styles.productContent}>
                                <p style={styles.productCategory}>{product.category}</p>
                                <h3 style={styles.productName}>{product.name}</h3>
                                <p style={styles.productPrice}>{product.price}</p>
                                <button style={styles.productBtn}>View Product</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section style={styles.whySection}>
                <div style={styles.sectionHeader}>
                    <p style={styles.sectionTag}>WHY NF</p>
                    <h2 style={styles.sectionTitle}>Premium Experience, Everyday Wear</h2>
                </div>

                <div style={styles.whyGrid}>
                    <div style={styles.whyCard}>
                        <h3 style={styles.whyTitle}>Premium Quality</h3>
                        <p style={styles.whyText}>
                            Carefully designed products with comfort, durability, and style in mind.
                        </p>
                    </div>

                    <div style={styles.whyCard}>
                        <h3 style={styles.whyTitle}>Modern Fashion</h3>
                        <p style={styles.whyText}>
                            Trend-forward collections for footwear and garments under one brand.
                        </p>
                    </div>

                    <div style={styles.whyCard}>
                        <h3 style={styles.whyTitle}>Cash on Delivery</h3>
                        <p style={styles.whyText}>
                            Easy and trusted ordering experience with COD support from the start.
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

const styles = {
    hero: {
        height: "85vh",
        backgroundImage:
            "url('https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    heroOverlay: {
        background: "rgba(0,0,0,0.45)",
        color: "#fff",
        padding: "60px 30px",
        textAlign: "center",
        width: "100%",
    },
    heroTag: {
        letterSpacing: "3px",
        fontSize: "13px",
        marginBottom: "16px",
    },
    heroTitle: {
        fontSize: "52px",
        maxWidth: "850px",
        margin: "0 auto 20px",
        lineHeight: "1.1",
        fontWeight: "700",
    },
    heroText: {
        fontSize: "18px",
        maxWidth: "700px",
        margin: "0 auto 30px",
        lineHeight: "1.6",
    },
    heroButtons: {
        display: "flex",
        gap: "16px",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    primaryBtn: {
        padding: "14px 28px",
        background: "#111",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "15px",
    },
    secondaryBtn: {
        padding: "14px 28px",
        background: "transparent",
        color: "#fff",
        border: "1px solid #fff",
        cursor: "pointer",
        fontSize: "15px",
    },
    section: {
        padding: "80px 40px",
    },
    sectionHeader: {
        textAlign: "center",
        marginBottom: "40px",
    },
    sectionTag: {
        letterSpacing: "2px",
        fontSize: "12px",
        color: "#777",
        marginBottom: "10px",
    },
    sectionTitle: {
        fontSize: "36px",
        color: "#111",
        margin: 0,
    },
    categoryGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
    },
    categoryCard: {
        background: "#fff",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    },
    categoryImage: {
        width: "100%",
        height: "350px",
        objectFit: "cover",
        display: "block",
    },
    categoryContent: {
        padding: "20px",
    },
    cardTitle: {
        fontSize: "22px",
        margin: "0 0 8px",
        color: "#111",
    },
    cardText: {
        margin: 0,
        color: "#666",
        lineHeight: "1.5",
    },
    productGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "24px",
    },
    productCard: {
        background: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        overflow: "hidden",
    },
    productImage: {
        width: "100%",
        height: "320px",
        objectFit: "cover",
        display: "block",
    },
    productContent: {
        padding: "18px",
    },
    productCategory: {
        fontSize: "12px",
        color: "#888",
        letterSpacing: "1px",
        marginBottom: "8px",
    },
    productName: {
        fontSize: "20px",
        color: "#111",
        margin: "0 0 10px",
    },
    productPrice: {
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "14px",
        color: "#111",
    },
    productBtn: {
        padding: "10px 18px",
        border: "none",
        background: "#111",
        color: "#fff",
        cursor: "pointer",
    },
    whySection: {
        padding: "80px 40px",
        background: "#fff",
    },
    whyGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "24px",
        marginTop: "10px",
    },
    whyCard: {
        padding: "30px",
        border: "1px solid #eee",
        background: "#fafafa",
    },
    whyTitle: {
        fontSize: "22px",
        marginBottom: "14px",
        color: "#111",
    },
    whyText: {
        color: "#666",
        lineHeight: "1.7",
        margin: 0,
    },
};

export default Home;