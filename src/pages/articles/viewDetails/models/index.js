import {queryURL} from '../../../../utils';
import {getById} from '../services';
export default {
  namespace: 'viewDetails',
  state: {
    data:{}
  },
  effects: {
    *query({ payload }, { select, call, put }) {

      const { data } = yield call(getById,payload);
      if (data) {
        yield put({
          type: 'updateState',
          payload: {
            data: data.data,
          }
        });
      }

    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/articles/viewDetails') {
          let id=queryURL('id');
          if(id===null){
            window.location='/404';
          }else{
            dispatch({
              type: 'query',
              payload: {id:id},
            });
          }

          //  console.log(queryURL('id'))
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
