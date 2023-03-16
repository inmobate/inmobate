import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const experimental = createApi({
  reducerPath: "experimental",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["characters"],
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => ({ url: "/properties" }),
      providesTags: ["characters"],
    }),
  }),
});

export const { useGetCharactersQuery } = experimental;
