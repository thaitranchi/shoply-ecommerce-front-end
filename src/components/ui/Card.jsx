import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`p-4 shadow-lg rounded-2xl bg-white ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ title, description, imageUrl, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export { Card, CardContent };
