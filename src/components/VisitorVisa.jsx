import React from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Upload,
  Radio,
  DatePicker,
  Button,
  Divider,
  Flex,
  Space,
  message,
} from "antd";
import {
  UploadOutlined,
  MailOutlined,
  PlusOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

const VisitorVisa = () => {
  const [form] = Form.useForm();

  //For file upload, setting File fields in form with respective file details
  const getFile = (e) => {
    console.log("Upload event:", e);
    if (e?.file && e.file.status !== "removed") return e.file;
  };

  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      Travel_History: values.Travel_History?.map((item) => ({
        ...item,
        Year_field: item.Year_field?.format("DD-MMM-YYYY") || "",
      })),
      Refusal_History: values.Refusal_History?.map((item) => ({
        ...item,
        Year_field: item.Year_field?.format("DD-MMM-YYYY") || "",
      })),
    };
    console.log("Submitted Data:", formattedValues);
  };

  return (
    <>
      <h1 className="p-5 font-bold mb-2 border-b">Visitor Visa</h1>
      <div className="p-5">
        <Form
          form={form}
          layout="vertical"
          scrollToFirstError={true}
          onFinish={onFinish}
        >
          <fieldset>
            <legend className="font-bold !text-black">
              Personal Information
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item label="Lead" name="Lead" className="w-[300px]">
                <Select
                  placeholder="Choose"
                  className="sm:max-w-[260px] md:max-w-[300px]"
                />
              </Form.Item>
              <Form.Item
                label="Case Type"
                name="Case_Type"
                className="w-[300px]"
              >
                <Select
                  placeholder="Choose"
                  className="sm:max-w-[260px] md:max-w-[300px]"
                />
              </Form.Item>
              <Form.Item label="Mobile" name="Mobile" className="w-[300px]">
                <InputNumber className="w-[300px] sm:max-w-[260px] md:max-w-[300px]" />
              </Form.Item>
              <Form.Item
                name="Email"
                label="Email"
                rules={[{ type: "email" }]}
                className="w-[300px]"
              >
                <Input
                  addonAfter={<MailOutlined />}
                  className="sm:max-w-[260px] md:max-w-[300px]"
                />
              </Form.Item>
              <Form.Item
                label="Whom They Meet"
                name="Whom_They_Meet"
                className="w-[300px]"
              >
                <Select
                  placeholder="Choose"
                  className="sm:max-w-[260px] md:max-w-[300px]"
                />
              </Form.Item>
              <Form.Item
                label="Purpose of Visit"
                name="Purpose_of_Visit"
                className="w-[300px]"
              >
                <Select
                  placeholder="Choose"
                  className="sm:max-w-[260px] md:max-w-[300px]"
                />
              </Form.Item>
              <Form.Item
                label="GC Key Username"
                name="GC_Key_Username"
                className="w-[300px]"
              >
                <Input className="sm:max-w-[260px] md:max-w-[300px]" />
              </Form.Item>
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold !text-black">
              Necessary documents will be
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item
                name="Passport"
                label="Passport"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
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
                label="Ties to visiting country"
                name="Ties_to_visiting_country"
                className="w-[300px]"
              >
                <TextArea
                  maxLength={100}
                  style={{
                    height: 120,
                    resize: "none",
                  }}
                  className="sm:!max-w-[260px] md:!max-w-[300px]"
                />
              </Form.Item>
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold !text-black">Visitor Visa</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item label="Age" name="Age" className="w-[300px]">
                <InputNumber
                  className="w-[300px] sm:max-w-[260px] md:max-w-[300px]"
                  placeholder="#######"
                />
              </Form.Item>
              <Form.Item label="Salary" name="Sallary" className="w-[300px]">
                <InputNumber
                  className="w-[300px] sm:max-w-[260px] md:max-w-[300px]"
                  addonAfter="₹"
                  placeholder="##,##,###.##"
                />
              </Form.Item>
              <Form.Item
                label="ITR Amount"
                name="ITR_Amount"
                className="w-[300px]"
              >
                <InputNumber
                  className="w-[300px] sm:max-w-[260px] md:max-w-[300px]"
                  addonAfter="₹"
                  placeholder="##,##,###.##"
                />
              </Form.Item>
              <Form.Item name="ITR" label="ITR" className="w-[300px]">
                <Radio.Group>
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold !text-black">Sponsor</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item
                name="Name_Of_Sponsor"
                label="Name Of Sponsor"
                className="w-[300px]"
              >
                <Input className="sm:max-w-[260px] md:max-w-[300px]" />
              </Form.Item>
              <Form.Item
                label="Number of Applicants"
                name="Number_of_Applicants"
              >
                <InputNumber
                  className="w-[300px] sm:max-w-[260px] md:max-w-[300px]"
                  placeholder="#######"
                />
              </Form.Item>
              <Form.Item
                label="Sponser Status"
                name="Sponse_Status"
                className="w-[300px]"
              >
                <Select
                  placeholder="Choose"
                  className="sm:max-w-[260px] md:max-w-[300px]"
                />
              </Form.Item>
              <Form.Item
                label="Reason Of Visit"
                name="Reason_Of_Visit"
                className="w-[300px]"
              >
                <Input className="sm:max-w-[260px] md:max-w-[300px]" />
              </Form.Item>
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold !text-black">Sponsor checklist</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item
                name="Sponsor_Passport"
                label="Passport"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
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
                name="Study_Permit1"
                label="Study Permit"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Study_Permit1" maxCount={1}>
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
                name="Canadian_Passport"
                label="Canadian Passport"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Canadian_Passport" maxCount={1}>
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
                className="w-[300px]"
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
                name="Convocation_Letter"
                label="Convocation Letter"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Convocation_Letter" maxCount={1}>
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
                name="Pay_Slips"
                label="Pay Slips"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Pay_Slips" maxCount={1}>
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
                label="Job Letter"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
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
                name="Enrollment_Completion_Letter"
                label="Enrollment / Completion Letter"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
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
                name="Business_Det"
                label="Business Documents"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Business_Documents" maxCount={1}>
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
                name="Current_Add"
                label="Current Occupation"
                className="w-[300px]"
              >
                <Radio.Group>
                  <Radio value="Business">Business</Radio>
                  <Radio value="Job">Job</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="Completion_Letter"
                label="Completion Letter"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Completion_Letter" maxCount={1}>
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
                label="Current Address"
                name="Current_Address"
                className="w-[300px]"
              >
                <Input className="sm:max-w-[260px] md:max-w-[300px]" />
              </Form.Item>
              <Form.Item
                name="Work_permit"
                label="Work permit"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
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
                name="PR_Card"
                label="PR Card"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="PR_Card" maxCount={1}>
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
                name="Indian_Passport"
                label="Indian Passport"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Indian_Passport" maxCount={1}>
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
                name="Driving_Licence"
                label="Driving Licence"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Driving_Licence" maxCount={1}>
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
            <legend className="font-bold !text-black">
              Occupation Details
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item
                label="Present Occupation"
                name="Present_Occupation"
                className="w-[300px]"
              >
                <Select
                  placeholder="Choose"
                  className="sm:max-w-[260px] md:max-w-[300px]"
                />
              </Form.Item>
              <Form.Item
                name="Digital_Photo"
                label="Digital Photo"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
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
                name="Lease_Agreement"
                label="Lease Agreement"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Lease_Agreement" maxCount={1}>
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
                name="NOC"
                label="NOC"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="NOC" maxCount={1}>
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
                name="Month_Statement"
                label="3 Month Statement"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Month_Statement" maxCount={1}>
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
                className="w-[300px]"
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
                name="ITR1"
                label="ITR"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
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
                name="Month_Current_Account_Statement"
                label="3 Month Current Account Statement"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Month_Current_Account_Statement" maxCount={1}>
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
                name="Pension_Retirement_Order1"
                label="Pension / Retirement Order"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Pension_Retirement_Order1" maxCount={1}>
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
                name="Shop_Establishment"
                label="Shop Establishment"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Shop_Establishment" maxCount={1}>
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
                name="Translated"
                label="Translated"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Translated" maxCount={1}>
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
                name="Fard_With_Translation"
                label="Fard With Translation"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Fard_With_Translation" maxCount={1}>
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
                className="w-[300px]"
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
                name="Last_2_Pay_Slips"
                label="Last 2 Pay Slips"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Last_2_Pay_Slips" maxCount={1}>
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
                name="Business_ITR_if_possible"
                label="Business ITR ( if possible)"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Business_ITR_if_possible" maxCount={1}>
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
                name="J_Form"
                label="J Form"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="J_Form" maxCount={1}>
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
                name="Fard"
                label="Fard"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Fard" maxCount={1}>
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
                name="Business_Proof"
                label="Business Proof"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Business_Proof" maxCount={1}>
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
            <legend className="font-bold !text-black">
              Compulsory Question
            </legend>
            <Form.Item
              name="Any_previous_travel_history"
              label="Any previous travel history"
              className="w-[300px]"
            >
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
            <fieldset>
              <legend className="font-bold !text-black !border-b-0 !mb-2">
                Travel History
              </legend>
              <div className="w-[92vw] max-w-max overflow-x-auto mb-6">
                <Space
                  className="border-t border-b w-max py-2 bg-zinc-50 !flex !mb-[15px]"
                  align="baseline"
                >
                  <div className="w-[32px]"></div>
                  <div className="font-semibold w-[200px]">Country Name</div>
                  <div className="font-semibold w-[200px]">Year</div>
                  <div className="font-semibold w-[200px]">Duration</div>
                  <div className="font-semibold w-[200px]">Visa Type</div>
                </Space>
                <Form.List name="Travel_History">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Space
                          key={key}
                          className="last: mb-0 !flex"
                          align="baseline"
                        >
                          <Button
                            type="link"
                            icon={<CloseOutlined />}
                            danger
                            onClick={() => remove(name)}
                          />
                          <Form.Item
                            {...restField}
                            name={[name, "Country_Name"]}
                            className="w-[200px]"
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "Year_field"]}
                            className="w-[200px]"
                          >
                            <DatePicker
                              format="DD-MMM-YYYY"
                              className="w-[200px]"
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "Duration"]}
                            className="w-[200px]"
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "Visa_Type"]}
                            className="w-[200px]"
                          >
                            <Select placeholder="Choose" />
                          </Form.Item>
                        </Space>
                      ))}
                      {fields.length === 0 ? "" : <Divider className="m-0" />}
                      <Form.Item
                        className={
                          fields.length === 0 ? "text-center mb-3" : "mb-3"
                        }
                      >
                        <Button
                          type="link"
                          onClick={() => add()}
                          icon={<PlusOutlined />}
                        >
                          Add New
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </div>
            </fieldset>
            <Form.Item
              name="Any_refusal"
              label="Any refusal"
              className="w-[300px]"
            >
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
            <fieldset>
              <legend className="font-bold !text-black !border-b-0 !mb-2">
                Refusal History
              </legend>
              <div className="w-[92vw] max-w-max overflow-x-auto mb-6">
                <Space
                  className="border-t border-b w-max py-2 bg-zinc-50 !flex !mb-[15px]"
                  align="baseline"
                >
                  <div className="w-[32px]"></div>
                  <div className="font-semibold w-[200px]">Country Name</div>
                  <div className="font-semibold w-[200px]">Year</div>
                  <div className="font-semibold w-[200px]">Visa Type</div>
                </Space>
                <Form.List name="Refusal_History">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Space
                          key={key}
                          className="last: mb-0 !flex"
                          align="baseline"
                        >
                          <Button
                            type="link"
                            icon={<CloseOutlined />}
                            danger
                            onClick={() => remove(name)}
                          />
                          <Form.Item
                            {...restField}
                            name={[name, "Country_Name"]}
                            className="w-[200px]"
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "Year_field"]}
                            className="w-[200px]"
                          >
                            <DatePicker
                              format="DD-MMM-YYYY"
                              className="w-[200px]"
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "Visa_Type"]}
                            className="w-[200px]"
                          >
                            <Select placeholder="Choose" />
                          </Form.Item>
                        </Space>
                      ))}
                      {fields.length === 0 ? "" : <Divider className="m-0" />}
                      <Form.Item
                        className={
                          fields.length === 0 ? "text-center mb-3" : "mb-3"
                        }
                      >
                        <Button
                          type="link"
                          onClick={() => add()}
                          icon={<PlusOutlined />}
                        >
                          Add New
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </div>
            </fieldset>
            <Form.Item
              name="Any_health_issues"
              label="Any health issues"
              className="w-[300px]"
            >
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Health issues Details"
              name="Health_issues_Deatils"
              className="w-[300px]"
            >
              <TextArea
                maxLength={100}
                style={{
                  height: 120,
                  resize: "none",
                }}
                className="sm:!max-w-[260px] md:!max-w-[300px]"
              />
            </Form.Item>
            <Form.Item
              name="Medical_Certificate"
              label="Medical Certificate"
              valuePropName="file"
              getValueFromEvent={getFile}
              className="w-[300px]"
            >
              <Upload name="Medical_Certificate" maxCount={1}>
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
              name="English_proficiency_test"
              label="English proficiency test"
              className="w-[300px]"
            >
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Band Score"
              name="Band_Score"
              className="w-[300px]"
            >
              <InputNumber
                className="w-[300px] sm:max-w-[260px] md:max-w-[300px]"
                placeholder="#######"
              />
            </Form.Item>
            <Form.Item label="Reading" name="Reading" className="w-[300px]">
              <Input className="sm:max-w-[260px] md:max-w-[300px]" />
            </Form.Item>
            <Form.Item label="Listening" name="Listining" className="w-[300px]">
              <Input className="sm:max-w-[260px] md:max-w-[300px]" />
            </Form.Item>
            <Form.Item label="Writing" name="Writing" className="w-[300px]">
              <Input className="sm:max-w-[260px] md:max-w-[300px]" />
            </Form.Item>
            <Form.Item label="Speaking" name="Speaking" className="w-[300px]">
              <Input className="sm:max-w-[260px] md:max-w-[300px]" />
            </Form.Item>
            <Form.Item label="Overall" name="Overall" className="w-[300px]">
              <Input className="sm:max-w-[260px] md:max-w-[300px]" />
            </Form.Item>
            <Form.Item
              name="Do_you_Depend_On_someone"
              label="Do You Need Financial help ?"
              className="w-[300px]"
            >
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Relation" name="Relation" className="w-[300px]">
              <Select
                placeholder="Choose"
                className="sm:max-w-[260px] md:max-w-[300px]"
              />
            </Form.Item>
          </fieldset>
          <fieldset>
            <legend className="font-bold !text-black">Visa Chances</legend>
            <Form.Item
              label="Visa Chances"
              name="Visa_Chances1"
              className="w-[300px]"
            >
              <InputNumber
                className="w-[300px] sm:max-w-[260px] md:max-w-[300px]"
                addonAfter="%"
              />
            </Form.Item>
          </fieldset>
          <fieldset>
            <legend className="font-bold !text-black">
              Sponser Check List
            </legend>
            <Form.Item
              name="Bank_Statment"
              label="Bank Statement"
              valuePropName="file"
              getValueFromEvent={getFile}
              className="w-[300px]"
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

export default VisitorVisa;
