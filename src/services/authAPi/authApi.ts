import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILoginPayload, ILoginResponse } from "./authApiType";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.mv-team.ir/api/" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<ILoginResponse, ILoginPayload>({
      query: (body) => {
        console.log("body", body);
        return {
          url: "users/login",
          method: "POST",
          body,
        };
      },
      transformResponse(res: ILoginResponse) {
        console.log("res", res);
        return res;
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
