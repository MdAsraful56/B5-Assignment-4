// Need to use the React-specific entry point to import createApi
import type { Book } from "@/typescript/Types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getAllBook: builder.query<Book[], void>({
      query: () => `/books`,
    }),

    getBookId: builder.query({
      query: (id: string) => {
        return `/posts/${id}`;
      },
    }),

    createBook: builder.mutation({
      query: (newBook) => ({
        url: `/posts`,
        method: "POST",
        body: newBook,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBookQuery, useGetBookIdQuery, useCreateBookMutation } =
  bookApi;
