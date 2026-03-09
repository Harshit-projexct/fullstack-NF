function Footer() {
    return (
        <footer style={styles.footer}>
            <h2 style={styles.logo}>NF</h2>
            <p style={styles.text}>Premium footwear and garments for modern style.</p>
            <p style={styles.copy}>© 2025 NF. All rights reserved.</p>
        </footer>
    );
}

const styles = {
    footer: {
        background: "#111",
        color: "#fff",
        textAlign: "center",
        padding: "50px 20px",
        marginTop: "40px",
    },
    logo: {
        fontSize: "28px",
        letterSpacing: "4px",
        marginBottom: "10px",
    },
    text: {
        color: "#ccc",
        marginBottom: "10px",
    },
    copy: {
        color: "#888",
        fontSize: "14px",
    },
};

export default Footer;