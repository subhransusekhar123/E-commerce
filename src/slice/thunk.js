import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProduct = createAsyncThunk("getProduct", async () => {
  const products = await axios.get("https://fakestoreapi.com/products");
  return products.data;
});

export default getProduct;
