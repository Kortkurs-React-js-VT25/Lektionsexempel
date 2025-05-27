import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products?delay=2000",
        method: "GET",
      }),
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    createOrder: builder.mutation({
      query: (order) => ({
        url: "/products/add?delay=2000",
        method: "POST",
        body: order,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateOrderMutation,
} = apiSlice;
