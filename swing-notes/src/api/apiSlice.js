import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com",
  }),
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: (username) => ({
        url: `/api/notes/${username}`,
        method: "GET",
      }),
    }),
    createNote: builder.mutation({
      query: (note) => ({
        url: "/api/notes",
        method: "POST",
        body: note,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    deleteNote: builder.query({
      query: (id) => ({
        url: `/api/notes/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetNotesQuery, useCreateNoteMutation, useDeleteNoteQuery } =
  apiSlice;
