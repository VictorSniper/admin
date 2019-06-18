import React from 'react';
import { Modal, Button,Form, Input,InputNumber ,DatePicker,Select  } from 'antd';
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
const Option = Select.Option;
const koption=[

  {
    key:0,
    value:"收入"
  },
  {
    key:1,
    value:"支出"
  },
  {
    key:2,
    value:"借入"
  },
  {
    key:3,
    value:"借出"
  }
];
class DynamicRule extends React.Component {
  handleCreateForm = (e) => {
    e.preventDefault();
    //验证功能
    this.props.form.validateFields((err, fieldsValue) => {
      if(!err){


        console.log('Received values of form: ', fieldsValue);
        this.props.onHandleCreate(fieldsValue)
      }

    });
  }
  optionList =(koption) => {
    const children = [];
    for (let j = 0; j <koption.length; j++){
      children.push(<Option key={koption[j].key} value={koption[j].value}>{koption[j].value}</Option>)
    }
    return children
  }
  getFields(arr) {
    const {getFieldDecorator} = this.props.form;
    const children = [];
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i].category){
        case 'InputNumber':
          children.push(
            <Form.Item {...formItemLayout} key={i} label={arr[i].label}>
              {getFieldDecorator(arr[i].name, {
                initialValue:3,
                rules: [{
                  required:  arr[i].type,
                  message: arr[i].message,
                }],
              })(
                <InputNumber min={1} max={100000} formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                             parser={value => value.replace(/\￥\s?|(,*)/g, '')}  />

              )}
            </Form.Item>
          )
              break;
        case 'Input':
          children.push(
            <Form.Item {...formItemLayout} key={i} label={arr[i].label}>
              {getFieldDecorator(arr[i].name, {
                rules: [{
                  required:  arr[i].type,
                  message: arr[i].message,
                }],
              })(
                <Input type={arr[i].type} placeholder={arr[i].placeholder} />
              )}
            </Form.Item>
          )
          break;
        case 'DatePicker':
          children.push(
            <Form.Item {...formItemLayout} key={i} label={arr[i].label}>
              {getFieldDecorator(arr[i].name, {
                initialValue:moment('2015/01/01', dateFormat),
                rules: [{
                  required:  arr[i].type,
                  message: arr[i].message,
                }],
              })(
                <DatePicker  />

              )}
            </Form.Item>
          )
          break;
        case 'Select':
          children.push(
            <Form.Item {...formItemLayout} key={i} label={arr[i].label}>
              {getFieldDecorator(arr[i].name, {
                initialValue:'请选择',
                rules: [{
                  required:  arr[i].type,
                  message: arr[i].message,
                }],
              })(
                <Select   placeholder={arr[i].placeholder}  >
                  {this.optionList(koption)}
                </Select>

              )}
            </Form.Item>
          )
      }


    }
    return children;
  }
  render() {
    const { visible, confirmLoading ,onHandleCancel,formsConfig} = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.props.showModal}>
          {this.props.name}
        </Button>
        <Modal
          centered
          title="新建项目"
          visible={visible}
          onOk={this.handleCreateForm}
          confirmLoading={confirmLoading}
          onCancel={onHandleCancel}
        >
          {this.getFields(formsConfig)}

        </Modal>
      </div>
    );
  }
}
const PageModal = Form.create({ name: 'dynamic_rule' })(DynamicRule);
export default PageModal;
