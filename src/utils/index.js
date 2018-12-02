import cloneDeep from 'lodash.clonedeep';
/**
 * @param  name {String}
 * @return  {String}
 */
export function queryURL (name) {
  let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return null
}
/**
 * 数组格式转树状结构
 * @param   {array}     array
 * @param   {String}    id
 * @param   {String}    pid
 * @param   {String}    children
 * @return  {Array}
 */
export  function arrayToTree (array, id = 'id', pid = 'pid', children = 'children') {
  let data = cloneDeep(array)
  let result = []
  let hash = {}

  data.forEach((item, index) => {

    hash[data[index][id]] = data[index]

  })

  data.forEach((item) => {
    let hashVP = hash[item[pid]]
    if (hashVP) {
      !hashVP[children] && (hashVP[children] = [])
      hashVP[children].push(item)
    } else {
      result.push(item)
    }
  })

  return result
}
