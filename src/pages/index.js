/**
 * title: 数据分析
 */


import { connect } from 'dva';


function Analysis(props) {

  console.log(props)

  return (

    <div style={{ padding: '20px'}}>



      <div style={{ padding: '24px',backgroundColor:"#fff" }}>
            111
      </div>
    </div>
  );
}
export default connect(({ analysis, loading }) => ({ analysis, loading }))(Analysis)

