import React from "react";
import Button from "./Button";
import Card from "./Card";

const ProductDetail = ({ product }) => {
  if (!product) return <p>Product not found.</p>;

  return (
    <Card className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-lg text-gray-500 mb-4">{product.description}</p>
      <span className="text-xl font-semibold text-blue-600">${product.price.toFixed(2)}</span>
      <Button className="w-full mt-4">Add to Cart</Button>
    </Card>
  );
};

export default ProductDetail;
