import {query,create} from '../services';
import lodash from 'lodash';
import moment from 'moment';
import {queryURL} from '../utils';

export default {
  namespace: 'main',
  state: {
    dataList:[],
    pagination:{
      pageSize:10,
      current:1,
      defaultCurrent:1,
    },
    value:{},
    config:[
      {name:"keywords",label:"项目名称",placeholder:"请输入项目名称",required:false,type:"text",category:"Input",keywords:null},
      {name:"category",label:"收支类型",placeholder:"请选择收支类型",required:true,message:"收支类型为必选项",type:"",category:"Select"},
      {name:"rangePicker",label:"日期",required:true,type:"array",message:"日期不能为空",category:"RangePicker"},
      {name:"field4",label:"数量",placeholder:"请输入产品数量",required:false,message:"产品数量为必填项",type:"text",category:"Input"},
      {name:"field5",label:"数量",placeholder:"请输入产品数量",required:false,message:"产品数量为必填项",type:"text",category:"Input"},
    ],
    fields: {
      keywords: {},
      category: {},
      rangePicker: {},
    },
    confirmLoading:false,
    visible: false,
    formsConfig:[
      {name:"keywords",label:"项目名称",placeholder:"请填写项目名称",required:false,type:"text",category:"Input",keywords:null},
      {name:"category",label:"收支类型",placeholder:"请选择收支类型",required:false,type:"text",category:"Select",keywords:null},
      {name:"date",label:"日期",placeholder:"日期不能为空",required:false,type:"array",category:"DatePicker",keywords:null},
      {name:"number",label:"数量",placeholder:"请输入项目名称",required:false,type:"number",category:"InputNumber",keywords:null},
      {name:"remarks",label:"备注",placeholder:"请填写备注",required:false,type:"text",category:"Input",keywords:null},
    ],
  },
  effects: {
    *query({ payload }, { select, call, put }) {
          const params={
            pageSize:10,
            current:payload.pagination.current,
            category:lodash.trim(payload.value.category),
            keywords:lodash.trim(payload.value.keywords),
            startData:payload.value.startData,
            endData:payload.value.endData,
          }
      const { data } = yield call(query,params);
      if (data) {
        yield put({
          type: 'updateState',
          payload: {
            dataList: data.data,
            pagination:payload.pagination,
            value:payload.value||{},
            fields:payload.fields,
          }
        });
      }
    },
    *create({ payload },{select, call, put}){
      yield put({
        type: 'updateCreateState',
        payload: {
          visible: true,
          confirmLoading:true,
        }
      });
      const  {data}=yield call(create,{id:1});
      yield put({
        type: 'updateCreateState',
        payload: {
          visible: false,
          confirmLoading:false,
        }
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/articles') {
          let pagination={
            pageSize:Number(location.query.pageSize)||10,
            current:Number(location.query.current)||1,
          }
          let value={
            category:location.query.category,
            keywords:location.query.keywords,
            startData:location.query.startData,
            endData:location.query.endData,
          }
          let fields={
            keywords: {
              value:location.query.keywords,
            },
            category: {
              value:location.query.category,
            },
            rangePicker: {
              value: queryURL('startData')&&queryURL('endData') ?[
                 moment.unix(location.query.startData/1000),
               moment.unix(location.query.endData/1000),
              ]:null,
            },
          }
          dispatch({
            type: 'query',
            payload:{
              pagination:pagination,
              value:value,
              fields:fields,
            }
          });
        }
      });
    },
  },
  reducers: {
    updateCreateState(state, { payload }){
      return {
        ...state,
        ...payload,
      }
    },
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
