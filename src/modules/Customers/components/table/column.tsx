import {
  DeleteOutlined,
  EditOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { Badge, Button, Flex, TableColumnsType, Modal } from "antd";
import ITableItems from "./items";
import { useState } from "react";

// ant-table-container  , ant-table-cell ,thead/tr/th/ant-table-cell

export const TableColumns = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const columns: TableColumnsType<ITableItems> = [
    {
      title: "#",
      dataIndex: "rowNum",
      key: "rowNum",
      rowScope: "row",
      width: 64,
      fixed: "left",
      //   onCell: (record, rowIndex) => {
      //     return {
      //       onClick: () => {
      //         console.log("cell clicked", record.fullname);
      //         console.log("rowIndex ", rowIndex);
      //       },
      //       style: { backgroundColor: "#f00" },
      //     };
      //   },
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: () => {
        return <Badge size="default" status="success" />;
      },
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Date of Birth",
      dataIndex: "birthDate",
      key: "birthDate",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <Flex align="center" justify="center" gap="small">
            <Button className="tableActionButton" icon={<ExportOutlined />} />
            <Button className="tableActionButton" icon={<EditOutlined />} />
            <Button
              className="tableActionButton"
              icon={<DeleteOutlined />}
              onClick={() => {
                Modal.confirm({
                  title: "Are you sure?",

                  footer: (_, { CancelBtn }) => (
                    <>
                      <Button>
                        <DeleteOutlined />
                        Delete
                      </Button>
                      <CancelBtn />
                    </>
                  ),
                });
              }}
            />
          </Flex>
        );
      },
    },
  ];

  return columns;
};
