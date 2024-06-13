import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, UserRegister } from "./types/user.type";

export const loginApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["services"],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    login: build.mutation<IUser, { email: string; password: string }>({
      query(data) {
        return {
          url: "/api/users/login",
          method: "POST",
          body: data,
        };
      },
    }),
    register: build.mutation<
      UserRegister,
      { name: string; email: string; phone: string; password: string }
    >({
      query(data) {
        return {
          url: "/api/users/",
          method: "POST",
          body: data,
        };
      },
    }),
    getProduct: build.query<any, void>({
      query() {
        return {
          url: "/api/products",
          method: "GET",
        };
      },
    }),
    getPosts: build.query<any, void>({
      query: () => "posts", // method không có argument
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation, useGetProductQuery } =
  loginApi;
