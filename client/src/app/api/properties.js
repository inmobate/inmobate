import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const properties = createApi({
  reducerPath: "properties",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => "/properties",
    }),
  }),
});

export const { useGetPropertiesQuery } = properties;
