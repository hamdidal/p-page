import { useState, useEffect } from "react";
import { Product } from "../../services/types";
import { fetchProducts } from "../../services/products";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/Dashboard";
import Card from "../styled-components/Card";
import Fuse from "fuse.js";
import useFilterStore from "../../context/filter-store";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { filterText } = useFilterStore();

  const navigate = useNavigate();

  useEffect(() => {
    const productsFromLocalStorage = localStorage.getItem("products");
    if (!productsFromLocalStorage) {
      fetchProducts().then((res) => {
        setProducts(res);
        localStorage.setItem("products", JSON.stringify(res));
      });
    } else {
      setProducts(JSON.parse(productsFromLocalStorage));
    }
  }, [filterText]);

  const filterData = () => {
    if (products.length === 0 || !filterText) {
      return products;
    }

    const fuse = new Fuse(products, {
      keys: Object.keys(products[0]),
    });

    const results = fuse.search(filterText);

    return setProducts(results.map((result) => result.item));
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText]);

  const handleTo = (id: number) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <DashboardLayout>
      <Card details={products} onClick={(id) => handleTo(id)} />
    </DashboardLayout>
  );
};
