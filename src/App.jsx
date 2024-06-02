import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ProductPage from "./Pages/ProductPage";
import ProductsByCategory from "./Pages/ProductsByCategory";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState(false);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn setUsers={setUsers}/>}/>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:id/products" element={<ProductsByCategory />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
