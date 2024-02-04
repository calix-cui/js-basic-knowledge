const subsets = (nums) => {
  const res = []

  const dfs = (index, curArr) => {
    res.push(curArr.slice())
    for (let i = index; i < nums.length; i++) {
      curArr.push(nums[i])
      dfs(i + 1, curArr)
      curArr.pop()
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
