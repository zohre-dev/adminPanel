export default interface ITableItems {
  key: React.Key;
  name: string;
  status: "Approved" | "Blocked" | "Rejected";
  email: string;
  birthDate: string;
}
