import { Product } from "./types";

const fetchAPI = async <T>(
  url: string,
  method: string,
  body?: any
): Promise<T> => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);
  const json = await response.json();

  return json;
};

export const fetchProducts = async (): Promise<Product[]> => {
  const url = "https://fakestoreapi.com/products";

  const method = "GET";

  const products = await fetchAPI<Product[]>(url, method);
  return products;
};

export const fetchProduct = async (id: number): Promise<Product> => {
  const url = `https://fakestoreapi.com/products/${id}`;

  const method = "GET";

  const product = await fetchAPI<Product>(url, method);
  return product;
};
