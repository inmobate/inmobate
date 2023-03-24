import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const properties = createApi({
  reducerPath: "properties",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://inmovate.up.railway.app/",
  }),
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: (page = 0, size = 18) => `/property?page=${page}&size=${size}`,
    }),
    getPropertyById: builder.query({
      query: (id) => `/property/${id}`,
    }),
    getType: builder.query({
      query: () => `/type`,
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  useGetPropertyByIdQuery,
  useGetTypeQuery,
} = properties;
