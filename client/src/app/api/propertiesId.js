import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertiesId = createApi({
  reducerPath: "propertiesId",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getPropertiesId: builder.query({
      query: (id) => `/properties/${id}`,
    }),
  }),
});

export const { useGetPropertiesIdQuery } = propertiesId;
