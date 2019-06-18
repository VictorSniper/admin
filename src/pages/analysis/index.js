/**
 * title: 数据分析
 */
import { connect } from 'dva';
import PageHeader from '../../component/PageHeader';

function Analysis(props) {

  console.log(props)

  return (

    <div style={{ padding: '20px'}}>

      <PageHeader title={props.route.title} />

      <div style={{ padding: '24px',backgroundColor:"#fff" }}>
        111
      </div>
    </div>
  );
}
export default connect(({ analysis, loading }) => ({ analysis, loading }))(Analysis)

