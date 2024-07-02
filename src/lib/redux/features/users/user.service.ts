import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, UserRegister } from "./types/user.type";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["services"],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.BASE_API_URL}/api/v1`,
  }),
  endpoints: (build) => ({
    login: build.mutation<IUser, { email: string; password: string }>({
      query(data) {
        return {
          url: "/users/login",
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
          url: "/users/",
          method: "POST",
          body: data,
        };
      },
    }),
    getPosts: build.query<any, void>({
      query: () => "posts", // method không có argument
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation } = userApi;
