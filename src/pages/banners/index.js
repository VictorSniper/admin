/**
 * title: 管理列表
 */
import {  Card, Col, Row,Table,Divider,Popconfirm ,Tag  } from 'antd';

import { connect } from 'dva';

import PageHeader from '../../component/PageHeader';
import styles from './index.css';

function Main(props) {


  const columns = [ {
    title: '广告位',
    dataIndex: 'img',
    key: 'img',
    render: text => <img src={text} />,
  },{
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }];


console.log(props.banners)



  return (

    <div style={{ padding: '20px'}}>
      <PageHeader title={props.route.title} />

      <div style={{ padding: '24px',backgroundColor:"#fff" }}>
        <Table dataSource={props.banners.dataList} columns={columns} />
      </div>
    </div>
  );
}
export default connect(({ banners, loading }) => ({ banners, loading }))(Main)
