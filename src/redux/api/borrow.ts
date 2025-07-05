// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getAllBorrow: builder.query({
      query: () => `/borrow`,
    }),

    createBorrow: builder.mutation({
      query: (newBook) => ({
        url: `/borrow`,
        method: "POST",
        body: newBook,
      }),
    }),
  }),
});

export const { useCreateBorrowMutation, useGetAllBorrowQuery } = borrowApi;
