export default {
  namespace: 'global',
  state: {
    menu: [
      {
        id: '1',
        bpid: '1',
        icon: 'dashboard',
        name: '文章管理',
        route: '/articles',
      },
      {
        id: '22',
        bpid: '1',
        mpid: '1',
        name: '文章列表',
        icon: 'heart-o',
        route: '/articles',
      },
      {
        id: '4',
        bpid: '1',
        name: '广告管理',
        icon: 'camera-o',
      },
      {
        id: '41',
        bpid: '4',
        mpid: '4',
        name: '广告列表',
        icon: 'heart-o',
        route: '/UIElement/iconfont',
      },
      {
        id: '42',
        bpid: '4',
        mpid: '4',
        name: 'DataTable',
        icon: 'database',
        route: '/UIElement/dataTable',
      },
      {
        id: '43',
        bpid: '4',
        mpid: '4',
        name: 'DropOption',
        icon: 'bars',
        route: '/UIElement/dropOption',
      },
      {
        id: '5',
        bpid: '1',
        name: '权限管理',
        icon: 'code-o',
      },
      {
        id: '51',
        bpid: '5',
        mpid: '5',
        name: 'ECharts',
        icon: 'line-chart',
        route: '/chart/ECharts',
      },
      {
        id: '52',
        bpid: '5',
        mpid: '5',
        name: 'highCharts',
        icon: 'bar-chart',
        route: '/chart/highCharts',
      },
      {
        id: '53',
        bpid: '5',
        mpid: '5',
        name: 'Rechartst',
        icon: 'area-chart',
        route: '/chart/Recharts',
      },
      {
        id: '6',
        bpid: '1',
        name: 'Test Navigation',
        icon: 'setting',
      },
      {
        id: '61',
        bpid: '6',
        mpid: '6',
        name: 'Test Navigation1',
        route: '/navigation/navigation1',
      },
      {
        id: '62',
        bpid: '6',
        mpid: '6',
        name: 'Test Navigation2',
        route: '/navigation/navigation2',
      },
      {
        id: '621',
        bpid: '62',
        mpid: '62',
        name: 'Test Navigation21',
        route: '/navigation/navigation2/navigation1',
      },
      {
        id: '622',
        bpid: '62',
        mpid: '62',
        name: 'Test Navigation22',
        route: '/navigation/navigation2/navigation2',
      },
    ],
    dataList:[
      {
        key: '1',
        name:"123",
        category:"China",
        columnNumber:10,
      }
    ],
    defaultOpenKeys:'1',
    defaultSelectedKeys:'1',
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
   //       console.log(history)
      });
    },
  },

  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}