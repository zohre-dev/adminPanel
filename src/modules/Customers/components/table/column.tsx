import {
  DeleteOutlined,
  EditOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { Button, Flex, TableColumnsType, Modal, App } from "antd";
import ITableItems from "./items";
import { useState } from "react";
import { useDeleteCustomerMutation } from "../../../../services/customerApi/customerApi";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../routes/routesUrls";

export const TableColumns = () => {
  const [open, setOpen] = useState(false);
  const [trigger] = useDeleteCustomerMutation();

  const { message } = App.useApp();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async (id: string) => {
    await trigger(id).then((result) => {
      if (result.data) {
        handleClose();
        message.success("Deleted Successfuly");
      }
    });
  };

  const columns: TableColumnsType<ITableItems> = [
    {
      title: "#",
      dataIndex: "rowNum",
      key: "rowNum",
      rowScope: "row",
      width: 64,
      fixed: "left",
      className: "!text-center",

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
      render: (text) => {
        return (
          <Flex align="center" gap={6}>
            <div
              className={`w-3 h-3 rounded-full border border-[#DEE2E6] ${
                text === 1
                  ? "bg-[#56BA28]"
                  : text === 2
                  ? "bg-[#FF1F25]"
                  : "bg-[#495057]"
              }`}
            ></div>
            {text === 1 ? "Approved" : text === 2 ? "Rejected" : "Blocked"}
          </Flex>
        );
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
      render: (text, record, rowIndex) => {
        return (
          <Flex align="center" justify="center" gap="small">
            <Button
              className="tableActionButton"
              icon={<ExportOutlined />}
              onClick={() =>
                navigate(ROUTES.showCustomer.replace(":id", `${record.id}`))
              }
            />
            <Button
              className="tableActionButton"
              icon={<EditOutlined />}
              onClick={() => navigate(`/customers/editCustomer/${record.id}`)}
            />
            <Button
              className="tableActionButton"
              icon={<DeleteOutlined />}
              onClick={() => {
                Modal.confirm({
                  title: "Are you sure?",
                  open,
                  footer: (_, { CancelBtn }) => (
                    <>
                      <Button onClick={() => handleDelete(record.id)}>
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
