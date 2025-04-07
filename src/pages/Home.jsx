import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

const products = [
  { id: 1, name: "Product 1", price: "$19.99" },
  { id: 2, name: "Product 2", price: "$29.99" },
  { id: 3, name: "Product 3", price: "$39.99" },
];

const Home = () => {
  return (
    <div>
      {/* Navbar and Header */}
      <Navbar />
      <Header />

      {/* Main Content - Product Cards */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Cart */}
      <Cart />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
