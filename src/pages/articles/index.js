/**
 * title: 文章列表
 */
import {  Card, Col, Row,Table,Divider,Popconfirm ,Tag  } from 'antd';
import Link from 'umi/link';
import router from 'umi/router';
import lodash from 'lodash';
import { connect } from 'dva';
import PageSearch from '../../component/PageSearch';
import PageHeader from '../../component/PageHeader';
import styles from './index.css';

 function Main(props) {
   let tableDataLoading=props.loading.effects['main/query'];


   const columns = [
     {
       title:'标题',
       dataIndex:'title',
       key:'title',
     },
     {
     title: '姓名',
       align:'center',
     dataIndex: 'name',
     key: 'name',
   }
     ,{
       title:'描述',
       dataIndex:"description",
       key:"description",
     },

     {
     title: '日期',
     dataIndex: 'datetime',
     key: 'datetime',

   }, {
     title: '分类',
       align:'center',
     dataIndex: 'category',
     key: 'category',
     render: (text,record) =>{
       return(
         <div>
           <Tag>{text}</Tag>
         </div>
       )
     }
   }, {
     title: '点赞数',
       align:'center',
     dataIndex: 'number',
     key: 'number',
   },
     {
       title: "操作",
       key: "action",
       render: (text,record) =>{
         return(
           <div>
             <Link to={`/articles/viewDetails?id=${record.id}`}>查看</Link>
             <Divider type="vertical" />
             <Link to={`/articles/editor?id=${record.id}`}>编辑</Link>
             <Divider type="vertical" />
             <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
               <Link to=''>删除</Link>
             </Popconfirm>

           </div>
         )
       },
     }

   ];
   function handleDelete(id) {
     alert(id)
   }
   function handleSearch(value) {
     router.push(`/articles?current=1&pageSize=10&category=${value.category}&keywords=${lodash.trim(value.keywords)}&startData=${value.startData}&endData=${value.endData}`);
   }
   function handleChange  (pagination, filters, sorter)  {
     if(props.main.value.category!==undefined||props.main.value.keywords!==undefined){
       router.push(`/articles?current=${pagination.current}&pageSize=${pagination.pageSize}&category=${props.main.value.category}&keywords
=${lodash.trim(props.main.value.keywords)}&startData=${props.main.value.startData}&endData=${props.main.value.endData}`);
     }else{
       router.push(`/articles?current=${pagination.current}&pageSize=${pagination.pageSize}`);
     }
   }

   function handleFormChange (changedFields) {
     props.dispatch({
       type: 'main/updateState',
       payload: {
         fields: {
           ...props.main.fields, ...changedFields
         },
       },
     });
   }


   return (

    <div style={{ padding: '20px'}}>
      <PageHeader title={props.route.title} />
      <PageSearch onChange={handleFormChange}   onHandleSearch={handleSearch} {...props.main.fields} path={props.route.path} config={props.main.config}  />
      <div style={{ padding: '24px',backgroundColor:"#fff" }}>
               {/*<pre className="language-bash">*/}
          {/*{JSON.stringify(props.main.fields, null, 2)}*/}
        {/*</pre>*/}
        <Table loading={tableDataLoading} rowKey={record => record.id} bordered  size="small" dataSource={props.main.dataList} pagination ={props.main.pagination} columns={columns} onChange={handleChange} />
      </div>
    </div>
  );
}
export default connect(({ main, loading }) => ({ main, loading }))(Main)

