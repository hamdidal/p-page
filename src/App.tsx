import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./components/products";
import ProductDetails from "./components/product-details";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Products} />
          <Route path="/product-details/:id" Component={ProductDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
