import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="hero min-h-screen bg-blue-600">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-white">
            Let's make it happen
          </h1>
          <p className="py-6 text-gray-300">
            Welcome back! this is a simple example for a full stack developer
            test to showcase products!
          </p>
          <Link to="products" className="btn btn-success text-white text-md">
            See Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
