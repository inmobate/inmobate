import axios from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

export const experimental = createApi({
  reducerPath: "experimental",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  tagTypes: ["characters"],
  endpoints: (builder) => ({
    getCharacters: builder.query({
      queryFn: async () => {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        return response.data;
      },
      providesTags: ["characters"],
    }),
  }),
});
