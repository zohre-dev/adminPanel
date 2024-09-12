export default interface ITableItems {
  rowNum: number;
  fullname: string;
  status: "Approved" | "Blocked" | "Rejected";
  email: string;
  birthDate: string;
  id: string;
}
