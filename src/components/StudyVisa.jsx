import React, { useState, useEffect } from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Radio,
  Checkbox,
  Button,
  Flex,
  Upload,
  Table,
  Row,
  Col,
  DatePicker,
} from "antd";
import { UploadOutlined, CloseOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { TextArea } = Input;

let uniqueId = 0; // A global counter to generate unique keys

const StudyVisa = () => {
  const [form] = Form.useForm();

  const [TRFFileList, setTRFFileList] = useState([]);
  const [tenthFileList, setTenthFileList] = useState([]);
  const [twelthFileList, setTwelthFileList] = useState([]);
  const [diplomaFileList, setDiplomaFileList] = useState([]);
  const [mastersFileList, setMastersFileList] = useState([]);
  const [bachelorsFileList, setBachelorsFileList] = useState([]);
  const [spousePassportFileList, setSpousePassportFileList] = useState([]);
  const [threePaySlipsFileList, setThreePaySlipsFileList] = useState([]);
  const [
    accountSummaryAndBalanceFileList,
    setAccountSummaryAndBalanceFileList,
  ] = useState([]);
  const [workPermitFileList, setWorkPermitFileList] = useState([]);
  const [jobOrAppointmentLetterFileList, setJobOrAppointmentLetterFileList] =
    useState([]);
  const [chatAndCallHistoryFileList, setChatAndCallHistoryFileList] = useState(
    []
  );

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
      <h1 className="p-5 font-bold mb-2 border-b">Study Visa</h1>
      <div className="p-5">
        <Form
          form={form}
          layout="horizontal"
          colon={false}
          labelAlign="left"
          scrollToFirstError={true}
          labelCol={{ span: 10 }}
          onFinish={onFinish}
        >
          <Form.Item label="Lead" name="Lead">
            <Select placeholder="Choose" className="max-w-[300px]" />
          </Form.Item>
          <Form.Item label="Case Type" name="Case_Type">
            <Select placeholder="Choose" className="max-w-[300px]" />
          </Form.Item>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Basic Questions
            </legend>
            <Form.Item name="Is_Passport" label="Is Passport">
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="IELTS" label="IELTS">
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="TRF_File"
              label="TRF"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[{ required: true, message: "Kindly upload TRF!" }]}
            >
              <Upload
                name="TRF_File"
                customRequest={(info) => {
                  setTRFFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {TRFFileList
                  ? TRFFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
            <Form.Item
              name="All_Education_Documents"
              label="All Education Documents"
            >
              <Checkbox.Group>
                <Row>
                  <Col span={8}>
                    <Checkbox
                      value="10th"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      10th
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="12th"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      12th
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="Bachelor"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      Bachelor
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="masters"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      Masters
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="diploma"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      Diploma
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              name="10th_File"
              label="10th"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[
                {
                  required: true,
                  message: "Kindly upload your 10th Document!",
                },
              ]}
            >
              <Upload
                name="10th_File"
                customRequest={(info) => {
                  setTenthFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {tenthFileList
                  ? tenthFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
            <Form.Item
              name="12th_File"
              label="12th"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[
                {
                  required: true,
                  message: "Kindly upload your 12th Document!",
                },
              ]}
            >
              <Upload
                name="12th_File"
                customRequest={(info) => {
                  setTwelthFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {twelthFileList
                  ? twelthFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
            <Form.Item
              name="Diploma_File"
              label="Diploma"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[
                {
                  required: true,
                  message: "Kindly upload your Diploma Document!",
                },
              ]}
            >
              <Upload
                name="Diploma_File"
                customRequest={(info) => {
                  setDiplomaFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {diplomaFileList
                  ? diplomaFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
            <Form.Item
              name="Masters_File"
              label="Masters"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[
                {
                  required: true,
                  message: "Kindly upload your Masters Document!",
                },
              ]}
            >
              <Upload
                name="Masters_File"
                customRequest={(info) => {
                  setMastersFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {mastersFileList
                  ? mastersFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
            <Form.Item
              name="Bachelors_File"
              label="Bachelors"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[
                {
                  required: true,
                  message: "Kindly upload your Bachelors Document!",
                },
              ]}
            >
              <Upload
                name="Bachelors_File"
                customRequest={(info) => {
                  setBachelorsFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {bachelorsFileList
                  ? bachelorsFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
            <Form.Item
              name="If_Spouse_In_Canada_On_Work_Permit"
              valuePropName="checked"
            >
              <Checkbox>if spouse is in CANADA but on Work Permit</Checkbox>
            </Form.Item>
            <Form.Item
              name="Spouse_Passport_File"
              label="Spouse Passport"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[
                {
                  required: true,
                  message: "Kindly upload your Spouse Passport Document!",
                },
              ]}
            >
              <Upload
                name="Spouse_Passport_File"
                customRequest={(info) => {
                  setSpousePassportFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {spousePassportFileList
                  ? spousePassportFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
            <Form.Item
              name="3_Pay_Slip_File"
              label="3 Pay Slips"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[
                {
                  required: true,
                  message: "Kindly upload your 3 Pay Slips Document!",
                },
              ]}
            >
              <Upload
                name="3_Pay_Slip_File"
                customRequest={(info) => {
                  setThreePaySlipsFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {threePaySlipsFileList
                  ? threePaySlipsFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
            <Form.Item
              name="Account_Summary_and_Balance_File"
              label="Account Summary and Balance"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[
                {
                  required: true,
                  message:
                    "Kindly upload your Account Summary and Balance Document!",
                },
              ]}
            >
              <Upload
                name="Account_Summary_and_Balance_File"
                customRequest={(info) => {
                  setAccountSummaryAndBalanceFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {accountSummaryAndBalanceFileList
                  ? accountSummaryAndBalanceFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
            <Form.Item
              name="Work_Permit_File"
              label="Work Permit"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[
                {
                  required: true,
                  message: "Kindly upload your Work Permit Document!",
                },
              ]}
            >
              <Upload
                name="Work_Permit_File"
                customRequest={(info) => {
                  setWorkPermitFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {workPermitFileList
                  ? workPermitFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
            <Form.Item
              name="Job_Letter_Or_Appointment_Letter_File"
              label="Job Letter / Appointment Letter"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[
                {
                  required: true,
                  message:
                    "Kindly upload your Job Letter / Appointment Letter!",
                },
              ]}
            >
              <Upload
                name="Job_Letter_Or_Appointment_Letter_File"
                customRequest={(info) => {
                  setJobOrAppointmentLetterFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {jobOrAppointmentLetterFileList
                  ? jobOrAppointmentLetterFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
            <Form.Item
              name="Chat_and_call_History_File"
              label="Chat and call History"
              valuePropName="fileList"
              getValueFromEvent={getFile}
              rules={[
                {
                  required: true,
                  message: "Kindly upload your Chat and call History!",
                },
              ]}
            >
              <Upload
                name="Chat_and_call_History_File"
                customRequest={(info) => {
                  setChatAndCallHistoryFileList((prevFileData) => [
                    ...prevFileData,
                    info.file,
                  ]);
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
                {chatAndCallHistoryFileList
                  ? chatAndCallHistoryFileList.map((file) => (
                      <p key={file.name}>{file.name}</p>
                    ))
                  : ""}
              </Upload>
            </Form.Item>
          </fieldset>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Study Visa Questions
            </legend>
            <Form.Item
              label="Any Previous Refusal"
              name="Any_Previous_Refusal"
              rules={[
                {
                  required: true,
                  message: "Kindly input information on Any Previous Refusal!",
                },
              ]}
            >
              <Input className="max-w-[300px]" />
            </Form.Item>
            <Form.Item
              label="Backlog"
              name="Backlog"
              rules={[
                {
                  required: true,
                  message: "Kindly input information on Backlog!",
                },
              ]}
            >
              <TextArea
                maxLength={100}
                style={{
                  height: 120,
                  resize: "none",
                }}
                className="w-[300px]"
              />
            </Form.Item>
            <Form.Item
              label="Any Specific preference for College, Program or Campus"
              name="Any_Specific_preference_for_College_Program_or_Campus"
              rules={[
                {
                  required: true,
                  message:
                    "Kindly input information on Any Specific preference for College, Program or Campus!",
                },
              ]}
            >
              <TextArea
                maxLength={100}
                style={{
                  height: 120,
                  resize: "none",
                }}
                className="w-[300px]"
              />
            </Form.Item>
            <Form.Item
              label="Gap Justification"
              name="Gap_Justification"
              rules={[
                {
                  required: true,
                  message: "Kindly input information on Gap Justification!",
                },
              ]}
            >
              <TextArea
                maxLength={100}
                style={{
                  height: 120,
                  resize: "none",
                }}
                className="w-[300px]"
              />
            </Form.Item>
          </fieldset>
          <fieldset className="mb-4">
            <legend
              className="font-bold"
              style={{ color: "#000", borderBottom: 0, marginBottom: "0.5rem" }}
            >
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
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Visa Chances
            </legend>
            <Form.Item label="Visa Chances" name="Visa_Chances">
              <InputNumber className="w-[300px]" addonAfter="%" />
            </Form.Item>
          </fieldset>
          <Flex justify="center" gap="large">
            <Form.Item label={null} labelCol={{}} wrapperCol={{}}>
              <Button className="w-28" htmlType="reset">
                Reset
              </Button>
            </Form.Item>
            <Form.Item label={null} labelCol={{}} wrapperCol={{}}>
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

export default StudyVisa;
