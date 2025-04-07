import { useState } from "react";
import { Card, CardContent } from "./ui/Card";
import Button from "./ui/Button";
import React from "react";

// Dummy cart items for illustration
const initialCartItems = [
  { id: 1, name: "Product 1", price: 25.99, quantity: 2 },
  { id: 2, name: "Product 2", price: 45.50, quantity: 1 },
  { id: 3, name: "Product 3", price: 19.99, quantity: 3 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Handle removing an item from the cart
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto my-8">
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Your Cart</h2>

          {/* Cart Items Section */}
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <span className="text-lg">{item.name}</span>
                  <span className="text-sm text-gray-500">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </span>
                  <span className="text-lg font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <Button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </Button>
                </div>
              ))
            )}
          </div>

          {/* Order Summary Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium">Order Summary</h3>
            <p className="mt-2 text-gray-700">Total Price: ${totalPrice.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <div className="mt-6">
            <Button
              onClick={() => alert("Proceeding to checkout...")}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
            >
              Proceed to Checkout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;
