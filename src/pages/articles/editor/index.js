/**
 * title: 编辑
 */

import { connect } from 'dva';
import { Input } from 'antd';

import PageHeader from '../../../component/PageHeader';


function Editor(props) {

  return (
    <div style={{ padding: '20px'}}>
      <PageHeader title={props.route.title} />
      <div style={{ padding: '24px',backgroundColor:"#fff" }}>
        <Input placeholder={props.editor.data.name} defaultValue={props.editor.data.name} />
      </div>
    </div>
  );
}
export default connect(({ editor, loading }) => ({ editor, loading }))(Editor)


