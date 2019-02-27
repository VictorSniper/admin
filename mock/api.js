import Mock from 'mockjs';
import lodash from 'lodash';
import moment from 'moment';
var Random = Mock.Random;
//@cparagraph
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|30-100': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    "title":"@ctitle",
    "content":"@cparagraph",
    "description":"@cparagraph(2)",
    'category|1':
      [
        "收入",
        "支出",
        "借出",
        "借入",
],
    'name':'@cname',
    "datetime|1":'@datetime',
    "money|1-30000": 30000,
    "city|1": {
      "310000": "上海市",
      "320000": "江苏省",
      "330000": "浙江省",
      "340000": "安徽省"
    },
  }]
});
var banner = Mock.mock({
  'list|30-100': [{
    'id|+1': 1,
    "name":"@ctitle",
    "img":Random.image('200x100', '#FF6600'),
  }]
})

export default {
  // 支持值为 Object 和 Array

  [`GET /api/users`](req,res){
    const { query } = req

    let newData = data.list;

    newData = newData.filter(item =>{
      if(item.category===query.category && item.title.indexOf(query.keywords)!=-1 && moment(item.datetime, 'YYYY-MM-DD HH:mm:ss').valueOf() >= query.startData && moment(item.datetime, 'YYYY-MM-DD HH:mm:ss').valueOf() <= query.endData){
        return item
      }
    })

    if(query.category){
      res.status(200).json({
        data:newData,

      })
    }else{
      res.status(200).json({
        data:data.list,

      })
    }

  },
  // GET POST 可省略
  '/api/users/1': { id: 1 },
  [`GET /api/editor`](req, res) {
    const { query } = req

    let newData = data.list;
    newData = newData.filter(item => {
      if(item.id==parseInt(query.id)){
        return item
      }
    })
  //  res.clearCookie('token')
   // res.status(200).end()
    res.status(200).json({
      data: newData[0],

    })
  },
  [`GET /api/banners`](req,res){
    res.status(200).json({
      data:banner,

    })
  },
  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },
};
