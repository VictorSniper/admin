//pageheader 页面头
import router from 'umi/router';
;
import { Button, Row , Col,Icon } from 'antd';
import Breadcrumbs from '../component/Breadcrumbs';
function PageHeader(props) {
  return (
<div className="page-header">
  <Breadcrumbs/>
  <Row>
    <Col span={22}><h2>{props.title}</h2></Col>
    <Col span={2} style={{textAlign:"right"}}>
      <Button  onClick={router.goBack}><Icon type="rollback" theme="outlined" />返回</Button>
    </Col>
  </Row>
</div>
  );
}
export default PageHeader;
