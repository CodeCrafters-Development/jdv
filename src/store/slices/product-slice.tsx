import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../lib/types";

type ProductProps = {
  loading: boolean;
  error: string | null;
  product: ProductType | null;
  productId: string | null;
};

const initialState: ProductProps = {
  loading: false,
  error: null,
  product: null,
  productId: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
