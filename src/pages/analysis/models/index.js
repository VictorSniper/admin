export default {
  namespace: 'analysis',
  state: {

    dataList:[
      {
        columnNumber:10,
      }
    ],

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
