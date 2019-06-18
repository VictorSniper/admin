export default {
  namespace: 'global',
  state: {
    menu: [
      {
        id: '2',
        bpid: '1',
        icon: 'dashboard',
        name: '数据管理',

      },
      {
        id: '1',
        bpid: '1',
        icon: 'dashboard',
        name: '收支管理',

      },

      {
        id: '33',
        bpid: '1',
        mpid: '1',
        name: '收支列表',
        icon: 'heart-o',
        route: '/articles',
      },
      {
        id: '22',
        bpid: '2',
        mpid: '2',
        name: '数据分析',
        icon: 'heart-o',
        route: '/analysis',
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
        route: '/banners',
      },

      {
        id: '5',
        bpid: '1',
        name: '系统管理',
        icon: 'code-o',
      },
      {
        id: '51',
        bpid: '5',
        mpid: '5',
        name: '用户管理',
        icon: 'line-chart',
        route: '/chart/ECharts',
      },
      {
        id: '52',
        bpid: '5',
        mpid: '5',
        name: '权限管理',
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
        name: '页面管理',
        icon: 'setting',
      },
      {
        id: '61',
        bpid: '6',
        mpid: '6',
        name: '静态页面',
        route: '/html/static',
      },
      {
        id: '62',
        bpid: '6',
        mpid: '6',
        name: '活动页面',
        route: '/html/active',
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
    defaultOpenKeys:'22',
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
