//GlobalSider Global菜单
import { Layout ,Menu,Icon} from 'antd';
import Link from 'umi/link';
import { arrayToTree } from '../utils';
const { Sider} = Layout;
const { SubMenu } = Menu;
function GlobalSider(props) {

  const levelMap = {}
  const menuTree = arrayToTree(props.menu.filter(_ => _.mpid !== '-1'), 'id', 'mpid')
  const getMenus = (menuTreeN) => {
    return menuTreeN.map((item) => {
      if (item.children) {
        if (item.mpid) {
          levelMap[item.id] = item.mpid
        }
        return (
          <SubMenu
            key={item.id}
            title={<span>
              {item.icon && <Icon type={item.icon} />}
              {item.name}
            </span>}
          >
            {getMenus(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.id}>
          <Link to={item.route || '#'}>
            {item.icon && <Icon type={item.icon} />}
            {item.name}
          </Link>
        </Menu.Item>
      )
    })
  }
  const menuItems = getMenus(menuTree);
  const active = window.sessionStorage.getItem('navOpenKeys');
  const sub = window.sessionStorage.getItem('sub');
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[JSON.parse(active)||props.defaultOpenKeys]}
        defaultOpenKeys={[JSON.parse(sub)||props.defaultSelectedKeys]}
        onClick={(item)=>{

          window.sessionStorage.setItem('navOpenKeys', JSON.stringify(item.key))
          if(item.keyPath!=undefined&&item.keyPath.length>1){
            window.sessionStorage.setItem('sub', JSON.stringify(item.keyPath[1]))
          }else{
            window.sessionStorage.setItem('sub', JSON.stringify('1'))
          }
        }}

        style={{ height: '100%', borderRight: 0 }}
      >
        {menuItems}
      </Menu>
    </Sider>
  );
}
export default GlobalSider;
