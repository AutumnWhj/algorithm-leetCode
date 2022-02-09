/**
 * 选择排序
 * 思路：选择排序的关键字是“最小值”：循环遍历数组，每次都找出当前范围内的最小值，
 * 把它放在当前范围的头部；然后缩小排序范围，继续重复以上操作，直至数组完全有序为止。
 */
 function selectSort(nums)  {
   // 缓存数组长度
   const len = nums.length
   // 定义最小值的索引
   let minIndex
   // 开始遍历数组
   for(let i = 0; i < len - 1; i++) {
    // 初始化最小值索引
    minIndex = i
    // 比较范围是i之后的数组
    for(let j = i; j < len; j++) {
      // j索引的值更小，则对minIndex重新赋值
      if(nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    // minIndex与i不相等说明最小值的索引 改变了,在交互两者的值
    if(minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
   }
   return nums
 }