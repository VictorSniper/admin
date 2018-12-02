import { Layout,LocaleProvider } from 'antd';
import { connect } from 'dva';
import NProgress from 'nprogress'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import GlobalHeader from  '../component/GlobalHeader';
import GlobalSider from  '../component/GlobalSider';

import styles from './index.css';
const {  Content } = Layout;
let lastHref;
function BasicLayout(props) {

  const { href } = window.location;
  const {
    menu,
    defaultOpenKeys,
    defaultSelectedKeys,
  } = props.global;
  if (lastHref !== href) {
    NProgress.start()
    if (!props.loading.global) {
      NProgress.done()
      lastHref = href
    }
  }
  return (
    <LocaleProvider locale={zhCN}>
    <Layout>
      <GlobalHeader styles={styles.logo}/>
      <Layout>
        <GlobalSider dispatch={props.dispatch} menu={menu} defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys}/>
        <Layout>
          <Content>

            { props.children }
          </Content>
        </Layout>
      </Layout>
    </Layout>
    </LocaleProvider>
  );
}
export default connect(({ global, loading }) => ({ global, loading }))(BasicLayout)
//export default BasicLayout;
