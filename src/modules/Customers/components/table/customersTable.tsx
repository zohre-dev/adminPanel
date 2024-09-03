/** @format */

import React from "react";
import { Flex, type TableColumnsType } from "antd";
import Table from "antd/es/table";
import { omit } from "lodash";
import ITableItems from "./items";
import { createDataSource } from "./dataSource";
import { TableColumns } from "./column";

const dataSource = createDataSource();

const CustomersTable: React.FC = () => {
  const columns = TableColumns();
  const newColumns: TableColumnsType<ITableItems> = columns
    ? columns.map((column) => {
        console.log("show column", column);
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
                  ? `${defaultClassName} !bg-[#F8F9FA] `
                  : `${defaultClassName} `,
            };
          },
        };
      })
    : [];
  return (
    <Flex align="center" className="p-4 bg-white rounded-lg">
      <Table
        size="small"
        className="w-full"
        columns={newColumns}
        dataSource={dataSource}
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
