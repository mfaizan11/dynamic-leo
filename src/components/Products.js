import React from "react";

const Products = () => {
  const products = [
    { id: 1, name: "Product 1", price: "RS 9000" },
    { id: 2, name: "Product 2", price: "RS 5000" },
    { id: 3, name: "Product 3", price: "RS 3000" },
    { id: 4, name: "Product 4", price: "RS 3000" },
    { id: 5, name: "Product 5", price: "RS 3000" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-blue-950 shadow rounded p-4 text-center"
        >
          <h3 className="text-lg text-white font-bold">{product.name}</h3>
          <p className="text-white">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
