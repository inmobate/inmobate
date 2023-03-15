import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertiesId = createApi({
  reducerPath: "properties",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  tagTypes: ["properties"],
  endpoints: (builder) => ({
    getPropertiesId: builder.query({
      query: () => ({ url: `/character/${id}` }),
    }),
  }),
});

export const { useGetPropertiesId } = propertiesId;
