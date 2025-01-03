import React, { useState } from "react";
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
  const [studyPermitFileList, setStudyPermitFileList] = useState([]);
  const [passportPlusVisaFileList, setPassportPlusVisaFileList] = useState([]);
  const [medicalFileList, setMedicalFileList] = useState([]);
  const [fileUploadFileList, setFileUploadFileList] = useState([]);
  const [digitalPhotoImageList, setDigitalPhotoImageList] = useState([]);
  const [newLOAAndTwoPaySlipsFileList, setNewLOAAndTwoPaySlipsFileList] =
    useState([]);
  const [
    enrollmentOrCompletionLetterFileList,
    setEnrollmentOrCompletionLetterFileList,
  ] = useState([]);
  const [marriageCertificateFileList, setMarriageCertificateFileList] =
    useState([]);

  //For file upload
  const getFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start">
            <Form.Item
              label="counselling id"
              name="counselling_id"
              className="w-[300px]"
              rules={[
                { required: true, message: "Kindly input counselling id!" },
              ]}
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
              rules={[
                { required: true, message: "Kindly input Counselling Name!" },
              ]}
            >
              <Input className="sm:max-w-[260px] md:max-w-[300px]" />
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
              Study + Work Extension
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start">
              <Form.Item
                label="Applicant"
                name="Applicant"
                className="w-[300px]"
              >
                <Input className="sm:max-w-[260px] md:max-w-[300px]" />
              </Form.Item>
              <Form.Item
                name="Study_Permit_File"
                label="Study Permit"
                valuePropName="fileList"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                rules={[
                  {
                    required: true,
                    message: "Kindly upload your Study Permit Document!",
                  },
                ]}
              >
                <Upload
                  name="Study_Permit_File"
                  customRequest={(info) => {
                    setStudyPermitFileList((prevFileData) => [
                      ...prevFileData,
                      info.file,
                    ]);
                  }}
                  showUploadList={false}
                >
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                  {studyPermitFileList
                    ? studyPermitFileList.map((file) => (
                        <p key={file.name}>{file.name}</p>
                      ))
                    : ""}
                </Upload>
              </Form.Item>
              <Form.Item
                name="Passport_Visa_File"
                label="Passport + Visa"
                valuePropName="fileList"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                rules={[
                  {
                    required: true,
                    message: "Kindly upload Passport and Visa Documents!",
                  },
                ]}
              >
                <Upload
                  name="Passport_Visa_File"
                  customRequest={(info) => {
                    setPassportPlusVisaFileList((prevFileData) => [
                      ...prevFileData,
                      info.file,
                    ]);
                  }}
                  showUploadList={false}
                >
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                  {passportPlusVisaFileList
                    ? passportPlusVisaFileList.map((file) => (
                        <p key={file.name}>{file.name}</p>
                      ))
                    : ""}
                </Upload>
              </Form.Item>
              <Form.Item
                name="Medical_File"
                label="Medical"
                valuePropName="fileList"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                rules={[
                  {
                    required: true,
                    message: "Kindly upload Medical Document!",
                  },
                ]}
              >
                <Upload
                  name="Medical_File"
                  customRequest={(info) => {
                    setMedicalFileList((prevFileData) => [
                      ...prevFileData,
                      info.file,
                    ]);
                  }}
                  showUploadList={false}
                >
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                  {medicalFileList
                    ? medicalFileList.map((file) => (
                        <p key={file.name}>{file.name}</p>
                      ))
                    : ""}
                </Upload>
              </Form.Item>
              <Form.Item
                name="File_Upload_File"
                label="File Upload"
                valuePropName="fileList"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                rules={[
                  {
                    required: true,
                    message: "Kindly upload File!",
                  },
                ]}
              >
                <Upload
                  name="File_Upload_File"
                  customRequest={(info) => {
                    setFileUploadFileList((prevFileData) => [
                      ...prevFileData,
                      info.file,
                    ]);
                  }}
                  showUploadList={false}
                >
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                  {fileUploadFileList
                    ? fileUploadFileList.map((file) => (
                        <p key={file.name}>{file.name}</p>
                      ))
                    : ""}
                </Upload>
              </Form.Item>
              <Form.Item
                name="Digital_Photo_File"
                label="Digital Photo"
                valuePropName="fileList"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                rules={[
                  {
                    required: true,
                    message: "Kindly upload Digital Photo!",
                  },
                ]}
              >
                <Upload
                  name="Digital_Photo_File"
                  beforeUpload={(file) => {
                    const isPNG = file.type === "image/png";
                    const isJPEG = file.type === "image/jpeg";
                    if (!isPNG && !isJPEG) {
                      message.error(`${file.name} is not a png/jpeg file`);
                    }
                    return isPNG || isJPEG || Upload.LIST_IGNORE;
                  }}
                  customRequest={(info) => {
                    setDigitalPhotoImageList((prevFileData) => [
                      ...prevFileData,
                      info.file,
                    ]);
                  }}
                  showUploadList={false}
                >
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select Image
                  </Button>
                  {digitalPhotoImageList
                    ? digitalPhotoImageList.map((file) => (
                        <p key={file.name}>{file.name}</p>
                      ))
                    : ""}
                </Upload>
              </Form.Item>
              <Form.Item
                name="New_LOA_And_Two_Pay_Slips_File"
                label="New LOA And 2 Pay Slips"
                valuePropName="fileList"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                rules={[
                  {
                    required: true,
                    message: "Kindly upload New LOA And 2 Pay Slips!",
                  },
                ]}
              >
                <Upload
                  name="New_LOA_And_Two_Pay_Slips_File"
                  customRequest={(info) => {
                    setNewLOAAndTwoPaySlipsFileList((prevFileData) => [
                      ...prevFileData,
                      info.file,
                    ]);
                  }}
                  showUploadList={false}
                >
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                  {newLOAAndTwoPaySlipsFileList
                    ? newLOAAndTwoPaySlipsFileList.map((file) => (
                        <p key={file.name}>{file.name}</p>
                      ))
                    : ""}
                </Upload>
              </Form.Item>
              <Form.Item
                name="Enrollment_Or_Completion_Letter_File"
                label="Enrollment / Completion Letter"
                valuePropName="fileList"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                rules={[
                  {
                    required: true,
                    message: "Kindly upload Enrollment / Completion Letter!",
                  },
                ]}
              >
                <Upload
                  name="Enrollment_Or_Completion_Letter_File"
                  customRequest={(info) => {
                    setEnrollmentOrCompletionLetterFileList((prevFileData) => [
                      ...prevFileData,
                      info.file,
                    ]);
                  }}
                  showUploadList={false}
                >
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                  {enrollmentOrCompletionLetterFileList
                    ? enrollmentOrCompletionLetterFileList.map((file) => (
                        <p key={file.name}>{file.name}</p>
                      ))
                    : ""}
                </Upload>
              </Form.Item>
              <Form.Item
                name="Marriage_Certificate_File"
                label="Marriage Certificate"
                valuePropName="fileList"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                rules={[
                  {
                    required: true,
                    message: "Kindly upload Marriage Certificate!",
                  },
                ]}
              >
                <Upload
                  name="Marriage_Certificate_File"
                  customRequest={(info) => {
                    setMarriageCertificateFileList((prevFileData) => [
                      ...prevFileData,
                      info.file,
                    ]);
                  }}
                  showUploadList={false}
                >
                  <Button
                    icon={<UploadOutlined />}
                    iconPosition="end"
                    className="w-[300px] sm:w-[260px] md:w-[300px] mb-1"
                  >
                    Select File
                  </Button>
                  {marriageCertificateFileList
                    ? marriageCertificateFileList.map((file) => (
                        <p key={file.name}>{file.name}</p>
                      ))
                    : ""}
                </Upload>
              </Form.Item>
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Visa Chances
            </legend>
            <Form.Item label="Visa Chances" name="Visa_Chances">
              <InputNumber className="w-[300px]" addonAfter="%" />
            </Form.Item>
          </fieldset>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Check List
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 justify-items-start">
              <Form.Item
                name="Study_Permit_CL"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center"
              >
                <Checkbox>Study Permit</Checkbox>
              </Form.Item>
              <Form.Item
                name="Passport_Visa_CL"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center"
              >
                <Checkbox>Passport + Visa</Checkbox>
              </Form.Item>
              <Form.Item
                label="Medical"
                name="Medical_CL"
                layout="horizontal"
                colon={false}
                className="w-[300px]"
              >
                <Input className="sm:max-w-[200px]" />
              </Form.Item>
              <Form.Item
                name="File_Upload_CL"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center"
              >
                <Checkbox>File Upload</Checkbox>
              </Form.Item>
              <Form.Item
                name="Digital_Photo_CL"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center"
              >
                <Checkbox>Digital Photo</Checkbox>
              </Form.Item>
              <Form.Item
                name="New_LOA_And_2_Pay_Slips_CL"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center"
              >
                <Checkbox>New LOA And 2 Pay Slips</Checkbox>
              </Form.Item>
              <Form.Item
                name="Enrollment_Completion_Letter_CL"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center"
              >
                <Checkbox>Enrollment / Completion Letter</Checkbox>
              </Form.Item>
              <Form.Item
                name="Marriage_Certificate_CL"
                valuePropName="checked"
                layout="horizontal"
                className="justify-self-start md:self-center"
              >
                <Checkbox>Marriage Certificate</Checkbox>
              </Form.Item>
            </div>
          </fieldset>
          <Flex justify="canter" gap="large">
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
