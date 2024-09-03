import ITableItems from "./items";

const TableDataSource: ITableItems[] = [];
export const createDataSource = () => {
  for (let i = 0; i < 100; i++) {
    TableDataSource.push({
      rowNum: i,
      fullname: `Edward ${i}`,
      status: "Approved",
      email: `user ${i}@yahoo.com`,
      birthDate: `1996-5-${i}`,
    });
  }
  return TableDataSource;
};
