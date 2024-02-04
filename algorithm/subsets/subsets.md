<!--
 * @Author: cuixiang cuixiang405@gmail.com
 * @Date: 2024-02-04 19:49:29
 * @FilePath: /js-basic-knowledge/algorithm/subsets.md
 * @Description: 
-->
# 题目

给出一个整数数组 nums, 找出所有可能的子集。

![subsets](./subsets.png)

```js
const subsets = (nums) => {
  const res = []

  const dfs = (index, curArr) => {
    res.push(curArr.slice()) // 调用子递归前，加入解集
    // 枚举出当前可选的数
    for (let i = index; i < nums.length; i++) {
      curArr.push(nums[i]) // 更新当前数组
      dfs(i + 1, curArr) // 继续往深处递归，传入 i + 1
      curArr.pop() // 需要回溯
    }
  }
  dfs(0, [])
  return res
}

let nums1 = [1, 2, 3]
console.log(subsets(nums1))
// [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

let nums2 = [0]
console.log(subsets(nums2))
// [[], [0]]
```
