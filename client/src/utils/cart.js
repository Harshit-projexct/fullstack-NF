export const getCartItems = () => {
    const cart = localStorage.getItem("nf_cart");
    return cart ? JSON.parse(cart) : [];
};

export const saveCartItems = (items) => {
    localStorage.setItem("nf_cart", JSON.stringify(items));
};

export const addToCart = (product) => {
    const cart = getCartItems();

    const existingProductIndex = cart.findIndex(
        (item) =>
            item.id === product.id &&
            item.size === product.size &&
            item.color === product.color
    );

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
        });
    }

    saveCartItems(cart);
};

export const removeFromCart = (id, size, color) => {
    const updatedCart = getCartItems().filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
    );
    saveCartItems(updatedCart);
};

export const updateCartQuantity = (id, size, color, quantity) => {
    const updatedCart = getCartItems().map((item) =>
        item.id === id && item.size === size && item.color === color
            ? { ...item, quantity }
            : item
    );

    saveCartItems(updatedCart);
};

export const clearCart = () => {
    localStorage.removeItem("nf_cart");
};