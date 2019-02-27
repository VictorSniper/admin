import React from 'react';
import { Form, Row, Col, Input, Button, Icon,Select,DatePicker } from 'antd';
import router from 'umi/router';
import lodash from 'lodash';
import moment from 'moment';
const FormItem = Form.Item;
const {  RangePicker } = DatePicker;
const Option = Select.Option;
const koption=[
  {
    key:1,
    value:"全部"
  },
  {
    key:2,
    value:"收入"
  },
  {
    key:3,
    value:"支出"
  },
  {
    key:4,
    value:"借入"
  },
  {
    key:5,
    value:"借出"
  }
];

class SearchForm extends React.Component {

  state = {
    expand: false,
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if(!err){

        const rangeValue = fieldsValue['rangePicker'];
        const values = {
          ...fieldsValue,
          'keywords':lodash.trim(fieldsValue.keywords),
          'rangePicker': [rangeValue[0].format('YYYY-MM-DD HH:mm:ss'), rangeValue[1].format('YYYY-MM-DD HH:mm:ss')],
          'startData':moment(rangeValue[0], 'YYYY-MM-DD HH:mm:ss').valueOf(),
          'endData':moment(rangeValue[1], 'YYYY-MM-DD HH:mm:ss').valueOf(),
        };
        console.log('Received values of form: ', values);
        this.props.onHandleSearch(values)
      }

    });
  }

  handleReset = () => {
    this.props.form.resetFields();
    router.push(this.props.path);
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }
  optionList =(koption) => {
    const children = [];
    for (let j = 0; j <koption.length; j++){
      children.push(<Option key={koption[j].key} value={koption[j].value}>{koption[j].value}</Option>)
    }
    return children
  }
  getFields(arr) {
    const count = this.state.expand ? 10 : 3;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].category==="Select"){
        children.push(
          <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={arr[i].label}>
              {getFieldDecorator(arr[i].name, {
                rules: [{
                  required: arr[i].required,
                  message: arr[i].message
                }],
              })(
                <Select   placeholder={arr[i].placeholder}  >
                  {this.optionList(koption)}
                </Select>
              )}
            </FormItem>
          </Col>
        );
      }else if(arr[i].category==="RangePicker"){
        children.push(
          <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={arr[i].label} >
              {getFieldDecorator(arr[i].name,{
              //  initialValue:[arr[i].initialStartData,arr[i].initialEndData],
                rules: [{
                  type: arr[i].type,
                  validator:arr[i].validator,
                  message:arr[i].message,
                  required: arr[i].required,
                }],
              })(
                <RangePicker />
              )}
            </FormItem>
          </Col>
        );
       //
      }else{
        children.push(
          <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem  label={arr[i].label}>
              {getFieldDecorator(arr[i].name, {

                rules: [{
                  validator:arr[i].validator,
                  required: arr[i].required,
                  message: arr[i].message,

                }],
              })(
                <Input type={arr[i].type} placeholder={arr[i].placeholder} />
              )}
            </FormItem>
          </Col>
        );
      }

    }
    return children;
  }

  render() {

    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>{this.getFields(this.props.config)}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">搜索</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清除
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              切换 <Icon type={this.state.expand ? '收起' : '展开'} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}



export default Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props){
    let fields={};
    props.config.map(item=>{
      if(props[item.name]!=undefined){
        fields[item.name]= Form.createFormField({
            ...props[item.name],
            value: props[item.name].value,
          })
      }
    })


    return fields


  },


})(SearchForm);
