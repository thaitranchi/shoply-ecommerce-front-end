import { Card, CardContent } from "./ui/Card";
import Button from "./ui/Button";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Card className="w-64 shadow-lg rounded-lg overflow-hidden">
      <CardContent className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
        <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
        <Button className="mt-3 w-full">Add to Cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
