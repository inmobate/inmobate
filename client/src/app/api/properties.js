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
    getPropertyById: builder.query({
      query: (id) => `/properties/${id}`,
    }),
    getServices: builder.query({
      query: () => "/services",
    }),
    getTypes: builder.query({
      query: () => "/types",
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  useGetPropertyByIdQuery,
  useGetServicesQuery,
  useGetTypesQuery,
} = properties;
