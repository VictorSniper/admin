import {query} from '../services/index';
import lodash from 'lodash';
import moment from 'moment';

export default {
  namespace: 'banners',
  state: {
    dataList:[{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }],
    pagination:{
      pageSize:10,
      current:1,
      defaultCurrent:1,
    },
    value:{},
  },
  effects: {
    *query({ payload }, { select, call, put }) {
      const { data } = yield call(query);
      console.log(data)
      if (data) {
        yield put({
          type: 'updateState',
          payload: {
            dataList: data.data.list,
          }
        });
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/banners') {
          dispatch({
            type: 'query',
            payload:{
            }
          });
        }
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
