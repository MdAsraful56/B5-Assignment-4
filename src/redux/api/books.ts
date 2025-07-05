// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: () => `/books`,
    }),

    getBookId: builder.query({
      query: (id: string) => {
        return `/books/${id}`;
      },
    }),

    createBook: builder.mutation({
      query: (newBook) => ({
        url: `/books`,
        method: "POST",
        body: newBook,
      }),
    }),

    updateBook: builder.mutation({
      query: ({ id, ...updatedBook }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: updatedBook,
      }),
    }),

    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllBookQuery,
  useGetBookIdQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
