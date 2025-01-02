import React, { useState, useEffect } from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Checkbox,
  Button,
  Flex,
  Upload,
  Table,
  DatePicker,
} from "antd";
import { UploadOutlined, CloseOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

let uniqueId = 0; // A global counter to generate unique keys

const StudyPermitExtension = () => {
  const [form] = Form.useForm();

  //For Education Details Table
  const [data, setData] = useState([]);

  const addTableRow = () => {
    const newRow = {
      key: uniqueId++,
      class: "",
      college_name: "",
      board_or_university: "",
      year: null,
      marks: null,
    };
    setData((prevData) => {
      const updatedData = [...prevData, newRow];
      form.setFieldsValue({ Education_Details: updatedData });

      // Trigger form validation after adding a row
      form.validateFields(["Education_Details"]).catch((errorInfo) => {
        console.log("Validation Error:", errorInfo);
      });

      return updatedData;
    });
  };

  const handleInputChange = (key, field, value) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.key === key ? { ...row, [field]: value } : row
      )
    );
  };

  const handleDeleteRow = (key) => {
    setData((prevData) => {
      const updatedData = prevData.filter((row) => row.key !== key);
      form.setFieldsValue({ Education_Details: updatedData });
      return updatedData;
    });
  };

  useEffect(() => {
    form.setFieldsValue({ Education_Details: data });
  }, [data, form]);

  const columns = [
    {
      dataIndex: "delete",
      key: "delete",
      width: 60,
      fixed: "left",
      render: (_, record) => (
        <Button
          type="link"
          icon={<CloseOutlined />}
          danger
          onClick={() => handleDeleteRow(record.key)}
        />
      ),
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
      width: 200,
      fixed: "left",
      render: (_, record) => (
        <Input
          className="w-[178px]"
          value={record.class}
          onChange={(e) =>
            handleInputChange(record.key, "class", e.target.value)
          }
        />
      ),
    },
    {
      title: "College Name",
      dataIndex: "college_name",
      key: "college_name",
      width: 200,
      render: (_, record) => (
        <Input
          className="w-[178px]"
          value={record.college_name}
          onChange={(e) =>
            handleInputChange(record.key, "college_name", e.target.value)
          }
        />
      ),
    },
    {
      title: "Board/University",
      dataIndex: "board_or_university",
      key: "board/university",
      width: 200,
      render: (_, record) => (
        <Input
          className="w-[178px]"
          value={record.board_or_university}
          onChange={(e) =>
            handleInputChange(record.key, "board_or_university", e.target.value)
          }
        />
      ),
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      width: 200,
      render: (_, record) => (
        <DatePicker
          picker="year"
          format="YYYY"
          className="w-[178px]"
          value={record.year ? dayjs(record.year.toString(), "YYYY") : null}
          onChange={(date) => {
            const formattedYear = date ? date.year() : null;
            handleInputChange(record.key, "year", formattedYear);
          }}
        />
      ),
    },
    {
      title: "Marks %",
      key: "marks",
      dataIndex: "marks",
      width: 200,
      render: (_, record) => (
        <InputNumber
          addonAfter="%"
          className="w-[178px]"
          value={record.marks}
          onChange={(value) => handleInputChange(record.key, "marks", value)}
        />
      ),
    },
  ];

  const [medicalCertificateFileList, setMedicalCertificateFileList] = useState(
    []
  );
  const [studyPermitFileList, setStudyPermitFileList] = useState([]);

  //For file upload
  const getFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values) => {
    const formData = { ...values, Education_Details: data };
    console.log("Submitted Data:", formData);
  };

  return (
    <>
      <h1 className="p-5 font-bold mb-2 border-b">Study Permit Extension</h1>
      <div className="p-5">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start">
            <Form.Item
              label="counselling id"
              name="counselling_id"
              className="w-[300px]"
              rules={[
                { required: true, message: "Kindly input counselling id!" },
              ]}
            >
              <Input className="sm:max-w-[260px]" />
            </Form.Item>
            <Form.Item label="Case Type" name="Case_Type" className="w-[300px]">
              <Select placeholder="Choose" className="sm:max-w-[260px]" />
            </Form.Item>
            <Form.Item
              label="Counselling Name"
              name="Counselling_Name"
              className="w-[300px]"
              rules={[
                { required: true, message: "Kindly input Counselling Name!" },
              ]}
            >
              <Input className="sm:max-w-[260px]" />
            </Form.Item>
          </div>
          <Form.Item
            name="Profile_Details"
            valuePropName="checked"
            layout="horizontal"
            className="justify-self-start md:self-center"
          >
            <Checkbox>Profile Details</Checkbox>
          </Form.Item>

          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Education Details
            </legend>
            <Form.Item
              name="Education_Details"
              className="mb-3"
              rules={[
                {
                  validator: (_, value) =>
                    value && value.length > 0
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("Kindly add at least one education detail!")
                        ),
                },
              ]}
            >
              <div className="block max-w-full overflow-x-auto">
                <Table
                  columns={columns}
                  dataSource={data}
                  rowKey="key"
                  rowHoverable={false}
                  scroll={{ x: "max-content" }}
                  className="max-w-full"
                  pagination={false}
                  locale={{
                    emptyText: (
                      <Button type="link" icon="+" onClick={addTableRow}>
                        Add New
                      </Button>
                    ),
                  }}
                ></Table>
              </div>
            </Form.Item>
            {data.length !== 0 && (
              <Button type="link" icon="+" onClick={addTableRow}>
                Add New
              </Button>
            )}
          </fieldset>
          <Form.Item
            label="Medical Certificate"
            name="Medical_Certificate_File"
            valuePropName="fileList"
            getValueFromEvent={getFile}
            className="w-[300px] mt-7"
            rules={[
              { required: true, message: "Kindly upload Medical Certificate!" },
            ]}
          >
            <Upload
              name="Medical_Certificate_File"
              customRequest={(info) => {
                setMedicalCertificateFileList([info.file]);
              }}
              showUploadList={false}
            >
              <Button
                icon={<UploadOutlined />}
                iconPosition="end"
                className="w-[300px] mb-1"
              >
                Select File
              </Button>
              {medicalCertificateFileList[0] ? (
                <span>{medicalCertificateFileList[0].name}</span>
              ) : (
                ""
              )}
            </Upload>
          </Form.Item>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Visa Chances
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start">
              <Form.Item
                label="Visa Chances"
                name="Visa_Chances"
                className="w-[300px]"
              >
                <InputNumber
                  className="w-[300px] sm:max-w-[260px]"
                  addonAfter="%"
                />
              </Form.Item>
              <Form.Item
                label="Study Permit"
                name="Study_Permit_File"
                valuePropName="fileList"
                getValueFromEvent={getFile}
                className="w-[300px]"
                rules={[
                  { required: true, message: "Kindly upload Study Permit!" },
                ]}
              >
                <Upload
                  name="Study_Permit_File"
                  customRequest={(info) => {
                    setStudyPermitFileList([info.file]);
                  }}
                  showUploadList={false}
                >
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:max-w-[260px] mb-1"
                  >
                    Select File
                  </Button>
                  {studyPermitFileList[0] ? (
                    <span>{studyPermitFileList[0].name}</span>
                  ) : (
                    ""
                  )}
                </Upload>
              </Form.Item>
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Check List
            </legend>
            <Form.Item
              name="Medical_Certificate_CL"
              valuePropName="checked"
              layout="horizontal"
              className="justify-self-start md:self-center"
            >
              <Checkbox>Medical Certificate</Checkbox>
            </Form.Item>
          </fieldset>
          <Flex justify="end" gap="large">
            <Form.Item label={null}>
              <Button className="w-28" htmlType="reset">
                Reset
              </Button>
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" className="w-28">
                Submit
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </div>
    </>
  );
};

export default StudyPermitExtension;
