import React from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Checkbox,
  Button,
  Flex,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const StudyWorkPermitExtension = () => {
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
      <h1 className="p-5 font-bold mb-2 border-b">
        Study + Work Permit Extension
      </h1>
      <div className="p-5">
        <Form
          form={form}
          layout="vertical"
          scrollToFirstError={true}
          onFinish={onFinish}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
            <Form.Item
              label="counselling id"
              name="counselling_id"
              className="w-[300px]"
            >
              <Input className="sm:max-w-[260px] md:max-w-[300px]" />
            </Form.Item>
            <Form.Item label="Case Type" name="Case_Type" className="w-[300px]">
              <Select
                placeholder="Choose"
                className="sm:max-w-[260px] md:max-w-[300px]"
              />
            </Form.Item>
            <Form.Item
              label="Counselling Name"
              name="Counselling_Name"
              className="w-[300px]"
            >
              <Input className="sm:max-w-[260px] md:max-w-[300px]" />
            </Form.Item>
          </div>
          <Form.Item
            name="Profile_Details"
            valuePropName="checked"
            layout="horizontal"
            className="w-[300px]"
          >
            <Checkbox>Profile Details</Checkbox>
          </Form.Item>
          <fieldset>
            <legend className="font-bold !text-black">
              Study + Work Extension
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item
                label="Applicant"
                name="Study_work_extension1"
                className="w-[300px]"
              >
                <Input className="sm:max-w-[260px] md:max-w-[300px]" />
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
                name="Passport_Visa"
                label="Passport + Visa"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Passport_Visa" maxCount={1}>
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
                name="Medical"
                label="Medical"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="Medical" maxCount={1}>
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
                name="File_upload"
                label="File Upload"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="File_upload" maxCount={1}>
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
                name="New_Loa_And_2_Pay_Slips"
                label="New Loa And 2 Pay Slips"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
              >
                <Upload name="New_Loa_And_2_Pay_Slips" maxCount={1}>
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
                name="Marriage_Certificate"
                label="Marriage Certificate"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-[300px]"
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
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold !text-black">Visa Chances</legend>
            <Form.Item
              label="Visa Chances"
              name="Visa_Chances1"
              className="w-[300px]"
            >
              <InputNumber
                className="w-[300px] sm:w-[260px] md:w-[300px]"
                addonAfter="%"
              />
            </Form.Item>
          </fieldset>
          <fieldset>
            <legend className="font-bold !text-black">Check List</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 justify-items-start">
              <Form.Item
                name="Study_Permit2"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center w-[300px]"
              >
                <Checkbox>Study Permit</Checkbox>
              </Form.Item>
              <Form.Item
                name="Passport_Visa1"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center"
              >
                <Checkbox>Passport + Visa</Checkbox>
              </Form.Item>
              <Form.Item
                label="Medical"
                name="Medical1"
                layout="horizontal"
                colon={false}
                className="w-[300px]"
              >
                <Input className="sm:max-w-[200px]" />
              </Form.Item>
              <Form.Item
                name="File_upload1"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center w-[300px]"
              >
                <Checkbox>File Upload</Checkbox>
              </Form.Item>
              <Form.Item
                name="Digital_Photo1"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center w-[300px]"
              >
                <Checkbox>Digital Photo</Checkbox>
              </Form.Item>
              <Form.Item
                name="New_Loa_And_2_Pay_Slips1"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center w-[300px]"
              >
                <Checkbox>New Loa And 2 Pay Slips</Checkbox>
              </Form.Item>
              <Form.Item
                name="Enrollment_Completion_Letter1"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center w-[300px]"
              >
                <Checkbox>Enrollment / Completion Letter</Checkbox>
              </Form.Item>
              <Form.Item
                name="Study_Permit3"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center w-[300px]"
              >
                <Checkbox>Study Permit</Checkbox>
              </Form.Item>
              <Form.Item
                name="Marriage_Certificate1"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center w-[300px]"
              >
                <Checkbox>Marriage Certificate</Checkbox>
              </Form.Item>
            </div>
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

export default StudyWorkPermitExtension;
