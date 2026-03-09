export const isUserLoggedIn = () => {
    return !!localStorage.getItem("nf_user");
};

export const loginUser = (userData) => {
    localStorage.setItem("nf_user", JSON.stringify(userData));
};

export const logoutUser = () => {
    localStorage.removeItem("nf_user");
};

export const getLoggedInUser = () => {
    const user = localStorage.getItem("nf_user");
    return user ? JSON.parse(user) : null;
};