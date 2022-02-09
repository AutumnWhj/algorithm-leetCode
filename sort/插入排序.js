/**
 * 插入排序
 * 插入排序的核心思想是“找到元素在它前面那个序列中的正确位置”。
 * 具体来说，插入排序所有的操作都基于一个这样的前提：当前元素前面的序列是有序的。基于这个前提，从后往前去寻找当前元素在前面那个序列里的正确位置。
 * 思路：假设前面数组都是有序，判断当前元素在前面数组中的位置，使得整个数组有序
 * 从后往前插
 * 
 */
function insertSort(nums) {
  // 缓存数组长度
  const len = nums.length
  // temp用来保存当前要插入的元素
  for(let i = 0; i < len; i++) {
    // j用于帮助 temp 寻找自己应该有的定位
    let j = i
    temp = nums[i]
    // 判断 j 前面的元素是否比 temp 大
    while(j>0 && nums[j-1] > temp) {
      // j往后移动一位
      nums[j] = nums[j-1]
      j--
    }
    // 循环让位，最后得到的 j 就是 temp 的正确索引
    nums[j] = temp
  }
  return nums
}