import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { errorStatus } from "../utilities/response";
import { clearAuth } from "../slice/authSlice";
import { TagTypes } from "../utilities/tags";

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
  fetchBaseQuery({
    baseUrl: import.meta.env.PROD
      ? import.meta.env.VITE_DEV_API
      : import.meta.env.VITE_PROD_API,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

export const api = createApi({
  reducerPath: "hotel-resetvation-root",
  baseQuery: async (args, api, extraOptions) => {
    const response = await baseQuery(args, api, extraOptions);
    if (response.error && errorStatus.includes(response.error.status)) {
      api.dispatch(clearAuth());
      localStorage.clear();
    }
    return response;
  },
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: false,
  refetchOnReconnect: true,
  tagTypes: Object.values(TagTypes),
  endpoints: () => ({}),
});

export type ApiEndpoint = typeof api.endpoints;
export default api;
