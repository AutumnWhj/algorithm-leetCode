/**
 * 冒泡排序初级写法
 */
function bubbleSort(nums) {
  const len = nums.length
  // 两层循环
  // 外层循环用于控制从头到尾的比较+交换到底有多少轮
  for(let i = 0; i < len; i++) {
    // 内层循环用于完成每一轮遍历过程中的重复比较+交换
    // 每次循环，相邻两个数进行比较，左边数大的话则交换位置
    for(let j = 0; j < len - 1; j++) {
      if(nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }
  return nums
}
/**
 * 冒泡排序优化
 * 以上可以知道，在经过比较后，数组后面的书是有序的了，不需要再进行遍历（减少遍历次数）
 */
function betterBubbleSort(nums) {
  const len = nums.length
  for(let i = 0; i < len; i++) {
    // 减i,每次遍历完，说明数据头部是有序的了，不需要再进行遍历
    for(let j = 0; j < len - 1 - i; j++) {
      if(nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }
  return nums
}
/**
 * 冒泡排序再优化
 * 有比较才会交换数据，如果不走交换数据的逻辑，则说明这个数组本身就是有序的了，那就直接返回，不需要再进行遍历
 */
 function betterBubbleSort(nums) {
  const len = nums.length
  let flag = false
  for(let i = 0; i < len; i++) {
    // 减i,每次遍历完，说明数据头部是有序的了，不需要再进行遍历
    for(let j = 0; j < len - 1 - i; j++) {
      if(nums[j] > nums[j+1]) {
        // 只要发生了一次交换，就修改标志位
        flag = true
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
    // 若一次交换也没发生，则说明数组有序，直接返回
    if(flag == false)  return nums;
  }
  return nums
}
