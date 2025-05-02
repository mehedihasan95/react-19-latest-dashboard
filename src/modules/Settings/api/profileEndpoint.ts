import { FetchArgs } from "@reduxjs/toolkit/query";
import api from "../../../app/api/api";
import { ApiResponse } from "../../../app/utilities/response";
import { CREATE_TAGS } from "../../../app/utilities/tags";
import { ProfileTypes } from "../types/profileTypes";

const profileEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<ApiResponse<ProfileTypes>, void>({
      query: (): FetchArgs => ({
        url: "/member/profile",
        method: "GET",
      }),
      providesTags: [CREATE_TAGS("PROFILE")],
    }),
  }),
});

export const { useGetProfileQuery } = profileEndpoint;
