var toString = require('./toString')

/**
 * @module      libs/lang/isObject
 * @createdAt   2016-06-30
 */

/**
 * 判断 any 是不是一个原生的 Object，一般也叫做 PlainObject
 *
 * @param   {*}      any   任何的 JS 类型
 * @return  Boolean
 *
 * @author  Zhonglei Qiu
 * @since   1.5.0
 */
module.exports = function (any) {
  return toString(any) === '[object Object]'
}
