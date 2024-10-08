import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICustomer, ICustomerPayload } from "../../models/customerType";

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getAllCustomers: builder.query<ICustomerPayload[], string>({
      query: (searchQuery) => {
        if (searchQuery.length > 2) return `customers?firstName=${searchQuery}`;
        return "customers";
      },
    }),
    getCustomerById: builder.query<ICustomer, string>({
      query: (id) => ({
        url: `customers/${id}`,
      }),
      transformResponse(res: ICustomerPayload) {
        const birthDateArr = (res.birthDayDate as string).split("/");
        return {
          id: res.id,
          firstName: res.firstName,
          lastName: res.lastName,
          idNumber: res.idNumber,
          day: birthDateArr[0],
          month: birthDateArr[1],
          year: birthDateArr[2],
          phoneNumber: res.phoneNumber,
          status: res.status,
          email: res.email,
        };
      },
    }),
    // 05/08/2024
    editCustomerById: builder.mutation<void, ICustomerPayload>({
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
    createCustomer: builder.mutation<void, ICustomerPayload>({
      query: (body) => ({
        url: `customers`,
        method: "POST",
        body: body,
      }),
    }),

    findCustomer: builder.query<ICustomer[], ICustomerPayload>({
      // &birthDayDate=${query.birthDayDate}
      query: (query) => {
        return `customers?email=${query.email}`;
      },
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
  useLazyFindCustomerQuery,
  useLazyGetCustomerByIdQuery,
} = customerApi;
