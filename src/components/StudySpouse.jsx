import React from "react";
import { Form, Select, InputNumber, Button, Flex } from "antd";

const StudySpouse = () => {
  const [form] = Form.useForm();

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 justify-items-start">
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
              Visa Chances
            </legend>
            <Form.Item label="Visa Chances" name="Visa_Chances">
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
