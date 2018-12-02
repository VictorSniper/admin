/**
 * title: 查看详情
 */

import { connect } from 'dva';
import { Divider } from 'antd';
import PageHeader from '../../../component/PageHeader';


function ViewDetails(props) {
  console.log(props)
  return (
    <div style={{ padding: '20px'}}>
      <PageHeader title={props.route.title} />

      <div style={{ padding: '24px',backgroundColor:"#fff" }}>
        <h1>{props.viewDetails.data.title}</h1>
        <span>作者：{props.viewDetails.data.name}
          <Divider type="vertical" />
        发布时间：{props.viewDetails.data.datetime}</span>
        <p>
          {props.viewDetails.data.content}
        </p>
      </div>
    </div>
  );
}
export default connect(({ viewDetails, loading }) => ({ viewDetails, loading }))(ViewDetails)


