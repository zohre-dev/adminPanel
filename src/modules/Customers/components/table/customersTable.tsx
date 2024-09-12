/** @format */

import React from "react";
import { Flex, type TableColumnsType } from "antd";
import Table from "antd/es/table";
import { omit } from "lodash";
import ITableItems from "./items";
import { TableColumns } from "./column";
import { useGetAllCustomersQuery } from "../../../../services/customerApi/customerApi";

const CustomersTable: React.FC = () => {
  const { data } = useGetAllCustomersQuery();
  const TableDataSource: ITableItems[] = [];

  if (data) {
    let tabelRowNum = 0;
    data.map((record: any) => {
      tabelRowNum += 1;
      TableDataSource.push({
        rowNum: tabelRowNum,
        fullname: record.firstName + " " + record.lastName,
        status: record.status,
        email: record.email,
        birthDate: record.birthDayDate,
        id: record.id,
      });
    });
  }

  const columns = TableColumns();
  const newColumns: TableColumnsType<ITableItems> = columns
    ? columns.map((column) => {
        return {
          ...column,
          onCell: (record, rowIndex) => {
            const defaultOnCell = column.onCell
              ? column.onCell(record, rowIndex)
              : {};
            const defaultClassName = `${column.className} ${
              defaultOnCell.className || ""
            }`;
            return {
              ...omit(defaultOnCell, "className"),
              className:
                (rowIndex || 0) % 2 !== 0
                  ? `${defaultClassName} !bg-[#F8F9FA] !px-8 `
                  : `${defaultClassName} !px-8`,
            };
          },
        };
      })
    : [];
  return (
    <Flex align="center" className="p-4 bg-white rounded-lg">
      <Table
        rowKey={(record) => record.id}
        size="small"
        className="w-full"
        columns={newColumns}
        dataSource={TableDataSource}
        pagination={{
          pageSize: 10,
          position: ["bottomLeft"],
        }}
        bordered
      />
    </Flex>
  );
};

export default CustomersTable;
