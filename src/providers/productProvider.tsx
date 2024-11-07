import React, { createContext, useContext, ReactNode } from "react";
import { ProductType } from "../lib/types"; // Adjust this path as needed
import { allProducts } from "../lib/data";

// Define the context type
type ProductsContextType = ProductType[];

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProductsContext.Provider value={allProducts}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (!context) throw new Error("useProducts must be used within ProductsProvider");
  return context;
};