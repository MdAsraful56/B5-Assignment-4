// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: () => `/books`,
    }),

    // getBookId: builder.query({
    //   query: (id: string) => {
    //     return `/posts/${id}`;
    //   },
    // }),

    createBook: builder.mutation({
      query: (newBook) => ({
        url: `/books`,
        method: "POST",
        body: newBook,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBookQuery, useCreateBookMutation } = bookApi;
