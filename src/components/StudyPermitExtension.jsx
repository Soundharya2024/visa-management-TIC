import React from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Checkbox,
  Button,
  Flex,
  Space,
  Upload,
  DatePicker,
  Divider,
} from "antd";
import { UploadOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";

const StudyPermitExtension = () => {
  const [form] = Form.useForm();

  //For file upload, setting File fields in form with respective file details
  const getFile = (e) => {
    console.log("Upload event:", e);
    if (e?.file && e.file.status !== "removed") return e.file;
  };

  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      Education_Details: values.Education_Details?.map((item) => ({
        ...item,
        Year_field: item.Year_field?.format("YYYY") || "",
      })),
    };
    console.log("Submitted Data:", formattedValues);
  };

  return (
    <>
      <h1 className="p-5 font-bold mb-2 border-b">Study Permit Extension</h1>
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
              // rules={[
              //   { required: true, message: "Kindly input counselling id!" },
              // ]}
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
              // rules={[
              //   { required: true, message: "Kindly input Counselling Name!" },
              // ]}
            >
              <Input className="sm:max-w-[260px] md:max-w-[300px]" />
            </Form.Item>
          </div>
          <Form.Item
            name="profile_details"
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
          <Form.Item
            label="Medical Certificate"
            name="Medical_Certificate"
            valuePropName="file"
            getValueFromEvent={getFile}
            className="w-[300px]"
            // rules={[
            //   { required: true, message: "Kindly upload Medical Certificate!" },
            // ]}
          >
            <Upload name="Medical_Certificate" maxCount={1}>
              <Button
                icon={<UploadOutlined />}
                iconPosition="end"
                className="w-[300px] mb-1"
              >
                Select File
              </Button>
            </Upload>
          </Form.Item>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Visa Chances
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start max-w-max">
              <Form.Item
                label="Visa Chances"
                name="Visa_Chances1"
                className="w-[300px]"
              >
                <InputNumber
                  className="w-full sm:max-w-[260px] md:max-w-[300px]"
                  addonAfter="%"
                />
              </Form.Item>
              <Form.Item
                label="Study Permit"
                name="Study_Permit"
                valuePropName="file"
                getValueFromEvent={getFile}
                className="w-full sm:max-w-[260px] md:max-w-[300px]"
                // rules={[
                //   { required: true, message: "Kindly upload Study Permit!" },
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
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold" style={{ color: "#000" }}>
              Check List
            </legend>
            <Form.Item
              name="Medical_Certificate1"
              valuePropName="checked"
              layout="horizontal"
              className="justify-self-start md:self-center"
            >
              <Checkbox>Medical Certificate</Checkbox>
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

export default StudyPermitExtension;
