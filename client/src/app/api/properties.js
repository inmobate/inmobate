import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const properties = createApi({
  reducerPath: "properties",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://inmovate.up.railway.app/",
  }),

  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => `/property`,
    }),

    postProperties: builder.mutation({
      query: (newProperty) => {
        return {
          url: "property",
          method: "post",
          body: newProperty,
        };
      },
    }),

    getPropertyById: builder.query({
      query: (id) => `/property/${id}`,
    }),

    getPropertiesByCity: builder.query({
      query: (city) => `/property?city=${city}`,
    }),

    getType: builder.query({
      query: () => `/type`,
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  useGetPropertyByIdQuery,
  useGetPropertiesByCityQuery,
  useGetTypeQuery,
} = properties;
