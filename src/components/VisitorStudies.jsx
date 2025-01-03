import React, { useState, useEffect } from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Checkbox,
  Radio,
  Button,
  Flex,
  Space,
  Upload,
  DatePicker,
  Divider,
} from "antd";
import { UploadOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";

const VisitorStudies = () => {
  const [form] = Form.useForm();

  //For file upload
  const [TRFFileList, setTRFFileList] = useState([]);

  const getFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      intake: values.intake?.format("DD-MMM-YYYY") || "",
      Education_Details: values.Education_Details?.map((item) => ({
        ...item,
        Year_field: item.Year_field?.format("YYYY") || "",
      })),
    };
    console.log("Submitted Data:", formattedValues);
  };

  return (
    <>
      <h1 className="p-5 font-bold mb-2 border-b">Visitor to Study</h1>
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
              className="w-[200px]"
              //   rules={[
              //     { required: true, message: "Kindly input counselling id!" },
              //   ]}
            >
              <Input className="w-[200px]" />
            </Form.Item>
            <Form.Item label="Case Type" name="Case_Type" className="w-[200px]">
              <Select placeholder="Choose" className="w-[200px]" />
            </Form.Item>
            <Form.Item
              label="Counselling Name"
              name="Counselling_Name"
              className="w-[200px]"
              //   rules={[
              //     { required: true, message: "Kindly input Counselling Name!" },
              //   ]}
            >
              <Input className="w-[200px]" />
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
            <legend
              className="font-bold"
              style={{ color: "#000", borderBottom: 0, marginBottom: "0.5rem" }}
            >
              Education Details
            </legend>
            <div className="overflow-x-auto">
              <Space
                style={{
                  display: "flex",
                  marginBottom: 15,
                }}
                className="border-t border-b w-max py-2 bg-zinc-50"
                align="baseline"
              >
                <div className="w-[32px]"></div>
                <div className="font-semibold w-[200px]">Class</div>
                <div className="font-semibold w-[200px]">College Name</div>
                <div className="font-semibold w-[200px]">Board/University</div>
                <div className="font-semibold w-[200px]">Year</div>
                <div className="font-semibold w-[200px]">Marks %</div>
              </Space>
              <Form.List name="Education_Details">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        className="last: mb-0"
                        style={{
                          display: "flex",
                        }}
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
                          name={[name, "Class"]}
                          className="w-[200px]"
                          // rules={[
                          //   {
                          //     required: true,
                          //     message: "Missing first name",
                          //   },
                          // ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "College_Name"]}
                          className="w-[200px]"
                          // rules={[
                          //   {
                          //     required: true,
                          //     message: "Missing first name",
                          //   },
                          // ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "Board_University"]}
                          className="w-[200px]"
                          // rules={[
                          //   {
                          //     required: true,
                          //     message: "Missing first name",
                          //   },
                          // ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "Year_field"]}
                          className="w-[200px]"
                          // rules={[
                          //   {
                          //     required: true,
                          //     message: "Missing last name",
                          //   },
                          // ]}
                        >
                          <DatePicker
                            picker="year"
                            format="YYYY"
                            className="w-[200px]"
                          />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "Marks"]}
                          className="w-[200px]"
                          // rules={[
                          //   {
                          //     required: true,
                          //     message: "Missing last name",
                          //   },
                          // ]}
                        >
                          <InputNumber addonAfter="%" />
                        </Form.Item>
                      </Space>
                    ))}
                    {fields.length === 0 ? "" : <Divider className="m-0" />}
                    <Form.Item
                      className={fields.length === 0 ? "text-center" : ""}
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
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Visitor To Study
            </legend>
            <Form.Item
              name="IELTS"
              label="IELTS"
              layout="horizontal"
              colon={false}
              labelAlign="left"
              labelCol={{ span: 3 }}
            >
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="TRF_File"
              label="TRF"
              layout="horizontal"
              colon={false}
              labelAlign="left"
              labelCol={{ span: 3 }}
              valuePropName="fileList"
              getValueFromEvent={getFile}
              //   rules={[{ required: true, message: "Kindly upload TRF!" }]}
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
                  className="w-[200px] mb-1"
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
          </fieldset>
          <fieldset className="w-[864px]">
            <legend
              className="font-bold"
              style={{ color: "#000", borderBottom: 0, marginBottom: "0.5rem" }}
            >
              IELTS Details
            </legend>
            <Space
              style={{
                display: "flex",
                marginBottom: 15,
              }}
              className="border-t border-b w-max py-2 bg-zinc-50"
              align="baseline"
            >
              <div className="w-[32px]"></div>
              <div className="font-semibold w-[200px]">Reading</div>
              <div className="font-semibold w-[200px]">Listening</div>
              <div className="font-semibold w-[200px]">Speaking</div>
              <div className="font-semibold w-[200px]">Writing</div>
            </Space>
            <Form.List name="Ilets_Details">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      className="last: mb-0"
                      style={{
                        display: "flex",
                      }}
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
                        name={[name, "Reading"]}
                        className="w-[200px]"
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Missing first name",
                        //   },
                        // ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "Listening"]}
                        className="w-[200px]"
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Missing first name",
                        //   },
                        // ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "Speaking"]}
                        className="w-[200px]"
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Missing first name",
                        //   },
                        // ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "Writing"]}
                        className="w-[200px]"
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Missing last name",
                        //   },
                        // ]}
                      >
                        <Input />
                      </Form.Item>
                    </Space>
                  ))}
                  {fields.length === 0 ? "" : <Divider className="m-0" />}
                  <Form.Item
                    className={fields.length === 0 ? "text-center" : ""}
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
          </fieldset>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
            <Form.Item
              label="Preferred College"
              name="Preferred_College"
              className="w-[200px]"
              //   rules={[
              //     { required: true, message: "Kindly input counselling id!" },
              //   ]}
            >
              <Input className="w-[200px]" />
            </Form.Item>
            <Form.Item
              label="Location"
              name="Location"
              className="w-[200px]"
              //   rules={[
              //     { required: true, message: "Kindly input counselling id!" },
              //   ]}
            >
              <Input className="w-[200px]" />
            </Form.Item>
            <Form.Item
              label="Program"
              name="Program"
              className="w-[200px]"
              //   rules={[
              //     { required: true, message: "Kindly input counselling id!" },
              //   ]}
            >
              <Input className="w-[200px]" />
            </Form.Item>
            <Form.Item
              label="Intake"
              name="intake"
              className="w-[200px]"
              //   rules={[
              //     { required: true, message: "Kindly input counselling id!" },
              //   ]}
            >
              <DatePicker format="DD-MMM-YYYY" className="w-[200px]" />
            </Form.Item>
          </div>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Check List
            </legend>
            <Form.Item
              name="TRF_CL"
              valuePropName="checked"
              layout="horizontal"
              className="justify-self-start md:self-center"
            >
              <Checkbox>TRF</Checkbox>
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

export default VisitorStudies;
