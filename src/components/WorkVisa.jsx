import React from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Radio,
  Button,
  Flex,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const StudySpouse = () => {
  const [form] = Form.useForm();

  //For file upload, setting File fields in form with respective file details
  const getFile = (e) => {
    console.log("Upload event:", e);
    if (e?.file && e.file.status !== "removed") return e.file;
  };

  const onFinish = (values) => {
    console.log("Submitted Data:", values);
  };

  return (
    <>
      <h1 className="p-5 font-bold mb-2 border-b">Study + Spouse</h1>
      <div className="p-5">
        <Form
          form={form}
          layout="vertical"
          scrollToFirstError={true}
          onFinish={onFinish}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
            <Form.Item label="Lead" name="Lead" className="w-[300px]">
              <Select
                placeholder="Choose"
                className="sm:max-w-[260px] md:max-w-[300px]"
              />
            </Form.Item>
            <Form.Item label="Case Type" name="Case_Type" className="w-[300px]">
              <Select
                placeholder="Choose"
                className="sm:max-w-[260px] md:max-w-[300px]"
              />
            </Form.Item>
          </div>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Necessary Information For Work Permit
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item label="Name" name="Name1">
                <Input className="w-[300px]" />
              </Form.Item>
              <Form.Item label="Age" name="Age">
                <InputNumber className="w-[300px]" placeholder="#######" />
              </Form.Item>
              <Form.Item label="Occupation" name="Occupation">
                <Input className="w-[300px]" />
              </Form.Item>
              <Form.Item
                label="Salary Or Monthly Income"
                name="Salary_Or_Monthly_Income"
              >
                <InputNumber className="w-[300px]" addonAfter="%" />
              </Form.Item>
              <Form.Item label="Bank Balance" name="Bank_Balance">
                <InputNumber
                  className="w-[300px]"
                  addonAfter="₹"
                  placeholder="##,##,###.##"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item name="ITR" label="ITR">
                <Radio.Group>
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="ITR Amount  " name="ITR_Amount">
                <InputNumber
                  className="w-[300px]"
                  addonAfter="₹"
                  placeholder="##,##,###.##"
                />
              </Form.Item>
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Documents
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item
                name="Passport"
                label="Passport"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Passport!",
                //   },
                // ]}
              >
                <Upload name="Passport" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Digital_Photo"
                label="Digital Photo"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Digital Photo!",
                //   },
                // ]}
              >
                <Upload
                  name="Digital_Photo"
                  beforeUpload={(file) => {
                    const isPNG = file.type === "image/png";
                    const isJPEG = file.type === "image/jpeg";
                    if (!isPNG && !isJPEG) {
                      message.error(`${file.name} is not a png/jpeg file`);
                    }
                    return isPNG || isJPEG || Upload.LIST_IGNORE;
                  }}
                  maxCount={1}
                >
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select Image
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Marriage_Certificate"
                label="Marriage Certificate"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Marriage Certificate!",
                //   },
                // ]}
              >
                <Upload name="Marriage_Certificate" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Marriage_Photo"
                label="Marriage Photos"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Marriage Photos!",
                //   },
                // ]}
              >
                <Upload name="Marriage_Photo" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Applicant Documents
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item
                name="Education_Details"
                label="Education Documents"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Education Documents!",
                //   },
                // ]}
              >
                <Upload name="Education_Details" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Job_Letter"
                label="Job Letter"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Job Letter!",
                //   },
                // ]}
              >
                <Upload name="Job_Letter" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="ITR1"
                label="ITR"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload ITR!",
                //   },
                // ]}
              >
                <Upload name="ITR1" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Bank_Statment"
                label="Bank Statment"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Bank Statment!",
                //   },
                // ]}
              >
                <Upload name="Bank_Statment" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Sallary"
                label="Salary Slips"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Salary Slips!",
                //   },
                // ]}
              >
                <Upload name="Sallary" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Sponsor
            </legend>
            <Form.Item name="If_field" label="Sponsor's Country">
              <Radio.Group>
                <Radio value="India">India</Radio>
                <Radio value="Canada">Canada</Radio>
              </Radio.Group>
            </Form.Item>
          </fieldset>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Compulsory Question
            </legend>
            <Form.Item
              name="Any_previous_travel_history"
              label="Any previous travel history"
            >
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item
                name="Sponsor_Passport"
                label="Passport"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Passport!",
                //   },
                // ]}
              >
                <Upload name="Sponsor_Passport" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item name="Status" label="Status">
                <Radio.Group>
                  <Radio value="Work Permit">Work Permit</Radio>
                  <Radio value="Study Permit">Study Permit</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="Lie"
                label="Fees Receipt"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Fees Receipt!",
                //   },
                // ]}
              >
                <Upload name="Lie" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="LOA"
                label="LOA"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload LOA Document!",
                //   },
                // ]}
              >
                <Upload name="LOA" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Enrollment_Completion_Letter"
                label="Enrollment Letter"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Enrollment Letter Document!",
                //   },
                // ]}
              >
                <Upload name="Enrollment_Completion_Letter" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="GIC_certi"
                label="GIC Certificate"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload GIC Certificate Document!",
                //   },
                // ]}
              >
                <Upload name="GIC_certi" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Visa_Copy"
                label="Visa Copy"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Visa Copy Document!",
                //   },
                // ]}
              >
                <Upload name="Visa_Copy" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Study_Permit"
                label="Study Permit"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Study Permit Document!",
                //   },
                // ]}
              >
                <Upload name="Study_Permit" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Chat_History"
                label="Chat History"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Chat History Document!",
                //   },
                // ]}
              >
                <Upload name="Chat_History" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="GIC"
                label="GIC Account Summary"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload GIC Account Summary!",
                //   },
                // ]}
              >
                <Upload name="GIC" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Video_Call_History"
                label="Video Call History"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Video Call History Document!",
                //   },
                // ]}
              >
                <Upload name="Video_Call_History" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="call_History"
                label="Call History"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Call History Document!",
                //   },
                // ]}
              >
                <Upload name="call_History" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Work_permit"
                label="Work permit"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Work permit Document!",
                //   },
                // ]}
              >
                <Upload name="Work_permit" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Job_Letter_Appointment_Letter"
                label="Job Letter / Appointment Letter"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload Job Letter / Appointment Letter!",
                //   },
                // ]}
              >
                <Upload name="Job_Letter_Appointment_Letter" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="month_Pay_Slips"
                label="3 month Pay Slips"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px] sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload your 3 month Pay Slips!",
                //   },
                // ]}
              >
                <Upload name="month_Pay_Slips" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:max-w-[260px] md:max-w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="Account_Balan"
                label="Account Summary"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px] sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   {
                //     required: true,
                //     message: "Kindly upload your Account Summary Document!",
                //   },
                // ]}
              >
                <Upload name="Account_Balan" maxCount={1}>
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:max-w-[260px] md:max-w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                </Upload>
              </Form.Item>
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Visa Chances
            </legend>
            <Form.Item label="Visa Chances" name="Visa_Chances1">
              <InputNumber className="w-[300px]" addonAfter="%" />
            </Form.Item>
          </fieldset>
          <Flex justify="center" gap="large">
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

export default StudySpouse;
