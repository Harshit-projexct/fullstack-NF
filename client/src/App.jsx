import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
// import Profile from "./pages/Profile";
// import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";

// import AdminLogin from "./pages/admin/AdminLogin";
// import Dashboard from "./pages/admin/Dashboard";
// import Categories from "./pages/admin/Categories";
// import Products from "./pages/admin/Products";
// import AdminOrders from "./pages/admin/Orders";
// import Users from "./pages/admin/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} /> */}
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Admin Routes */}
        {/* <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/users" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;