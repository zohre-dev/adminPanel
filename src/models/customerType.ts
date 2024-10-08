import { Dayjs } from "dayjs";

export interface ICustomerPayload {
  id?: string;
  firstName: string;
  lastName: string;
  idNumber: string;
  birthDayDate: string | Date;
  phoneNumber: string;
  status: number;
  email: string;
}
export interface ICustomer {
  id?: string;
  firstName: string;
  lastName: string;
  idNumber: string;
  day: string;
  month: string;
  year: string | Dayjs;
  phoneNumber: string;
  status: number;
  email: string;
}
