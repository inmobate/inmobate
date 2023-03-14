import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const experimental = createApi({
  reducerPath: "experimental",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  tagTypes: ["characters"],
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => ({ url: "/character" }),
      providesTags: ["characters"],
    }),
  }),
});

export const { useGetCharactersQuery } = experimental;
