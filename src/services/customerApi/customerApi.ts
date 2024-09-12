import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICustomer } from "../../models/customerType";

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getAllCustomers: builder.query<ICustomer[], void>({
      query: (arg) => "customers",
    }),
    getCustomerById: builder.query<ICustomer, string>({
      query: (id) => `customers/${id}`,
    }),
    editCustomerById: builder.mutation<void, ICustomer>({
      query: ({ id, ...rest }) => ({
        method: "PUT",
        url: `customers/${id}`,
        body: rest,
      }),
    }),
    deleteCustomer: builder.mutation<void, string>({
      query: (id) => ({
        url: `customers/${id}`,
        method: "DELETE",
      }),
    }),
    createCustomer: builder.mutation({
      query: (body) => ({
        url: `customers`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useLazyGetAllCustomersQuery,
  useEditCustomerByIdMutation,
  useDeleteCustomerMutation,
  useGetCustomerByIdQuery,
  useCreateCustomerMutation,
} = customerApi;
