/**
 * 运动函数(在mounted之后使用)
 * @param {HTMLElement} element 进行运动的element
 * @param {Object} target 目标样式('opacity':100,'left':200,'width':300)
 * @param {Function} cb 运动结束后的回调函数
 */
// eslint-disable-next-line
const move = (element, target, cb) => {
  let flag = true // 假设所有运动到达终点.
  clearInterval(element.timer)
  element.timer = setInterval(() => {
    for (let attr in target) {
      // 1.取当前的属性值。
      let current =
        attr === 'opacity'
          ? Math.round(parseFloat(getStyle(element, attr)) * 100)
          : parseInt(getStyle(element, attr))
      // 2.算运动速度,动画缓冲效果
      let speed = (target[attr] - current) / 10 // (目标值‐当前值)/缩放系数=速度
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed) // 速度取整
      // 3.未到达目标值时,执行代码
      if (target[attr] >= current) {
        flag = false // 终止条件
        if (attr === 'opacity') {
          // 为透明度时,执行
          element.style.filter = 'alpha(opacity:' + (current + speed) + ')' // IE
          element.style.opacity = (current + speed) / 100 // 标准
        } else {
          // 默认
          element.style[attr] = current + speed + 'px'
        }
      } else {
        flag = true
      }
      // 4. 运动终止,是否回调
      if (flag) {
        clearInterval(element.timer)
        if (cb) cb()
      }
    }
  }, 30)
}

/**
 * 获取样式(兼容ie)
 * @param {HTMLElement} element 需要寻找的样式的html节点
 * @param {String]} attr 在对象中寻找的样式属性
 * @returns {String} 获取到的属性
 */
function getStyle (element, attr) {
  return getComputedStyle(element, false)[attr]
    ? getComputedStyle(element, false)[attr]
    : element.currentStyle[attr]
}
