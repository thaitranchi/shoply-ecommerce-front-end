import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/Button"; // Assuming Button component path
import { useState } from "react";

const Checkout = () => {
  const [totalPrice, setTotalPrice] = useState(120.99); // Example price, you can dynamically calculate this

  const handleCheckout = () => {
    // Handle checkout logic here
    alert("Checkout Process Started!");
  };

  return (
    <div className="max-w-4xl mx-auto my-8">
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Checkout</h2>

          <div className="mb-6">
            <h3 className="text-lg font-medium">Billing Details</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Email Address"
                />
              </div>
            </form>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium">Order Summary</h3>
            <p className="mt-2 text-gray-700">Total Price: ${totalPrice.toFixed(2)}</p>
          </div>

          <div className="mt-6">
            <Button
              onClick={handleCheckout}
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

export default Checkout;
