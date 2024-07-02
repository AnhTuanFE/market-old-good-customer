import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "./types/product.type";

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["services"],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/v1/`,
  }),
  endpoints: (build) => ({
    getAllProduct: build.query<IProduct[], void>({
      query() {
        return {
          url: "/products/all",
          method: "GET",
        };
      },
    }),
    getProduct: build.query<IProduct, { id: string }>({
      query(id) {
        return {
          url: "/products",
          method: "GET",
          params: id,
        };
      },
    }),
    getPosts: build.query<any, void>({
      query: () => "posts",
    }),
  }),
});
export const { useGetAllProductQuery } = productApi;
