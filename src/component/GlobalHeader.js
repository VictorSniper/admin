//GlobalHeader 全局header
import { Layout ,Menu} from 'antd';
import { Link } from 'react-router-dom';
const { Header} = Layout;
function GlobalHeader(props) {
  return (
      <Header>
        <div className={props.styles} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}

        >
          <Menu.Item key="1">
            <Link to="/User">
            nav 1
            </Link>
          </Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
  );
}
export default GlobalHeader;
