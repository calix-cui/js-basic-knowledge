# Improve a function

Given an function named excludeItems, which **is used to filter out `items` that match the array `excludes` condition.**

Below is the original function(Solution 1):

```js
// Given an input of array,
// which is made of items with >= 3 properties

// items.length => N
let items = [
  { color: 'red', type: 'tv', age: 18 },
  { color: 'silver', type: 'phone', age: 20 },
  { color: 'blue', type: 'book', age: 17 },
]

// an exclude array made of key value pair
// excludes.length => M
const excludes = [
  { k: 'color', v: 'silver' },
  { k: 'type', v: 'tv' },
]

function excludeItems(items, excludes) {
  excludes.forEach((pair) => {
    items = items.filter((item) => item[pair.k] === item[pair.v]) // Mark-1
  })

  return items
}
```

Here are four key questions:

1. What does this function excludeItems do?
   A: We already mentioned it in the first sentence.
2. Is this function working as expected ?
   A: No. The code in Mark-1 line should be: `items = items.filter(item => item[pair.k] !== pair.v)`
3. What is the time complexity of this function?
   A: There are two levels of nested loops. So time complexity is O(N \* M).
4. How would you optimize it ?
   A: In the `excludeItems` function, what we mainly do is to check whether value of `item` matches value of `excludes` with the same key.
   So We can optimize the `excludes` array into a key-value structure to do a quicker search. Of course, they are `Map` and `Set`.

Optimized function(Solution 2):

```js
/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */
// items.length => N
let items = [
  // item key length => K
  { color: 'red', type: 'tv', age: 18 },
  { color: 'silver', type: 'phone', age: 20 },
  { color: 'blue', type: 'book', age: 17 },
]
// excludes.length => M
const excludes = [
  { k: 'color', v: 'silver' },
  { k: 'type', v: 'tv' },
]

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  const excludeMap = new Map()

  // optimize excludes using Map & Set
  for (let { k, v } of excludes) {
    if (!excludeMap.has(k)) excludeMap.set(k, new Set())
    excludeMap.get(k).add(v)
  }

  return items.filter((item) => {
    return Object.keys(item).every((key) => {
      return !excludeMap.has(key) || !excludeMap.get(key).has(item[key])
    })
  })
}
console.log(excludeItems(items, excludes))
```

## Time complexity analyze

items.length => N
excludes.length => M
number of item's keys => K

### Solution 1

What Solution1 mainly do is to iterate over the `exclNdes` array(O(M)) and filter `items`(O(N)) with each exclude k-v pair.

So **total time complexity** is O(M\*N).

### Solution 2

There is a preprocessing of `excludes`, which loops through each element in `excludes` and store there key and value into `Map` and `Set`. So it takes O(M).

Nextly, iterate over `items` and check for each property of `item` if it's in the exclude map. Iterating over `items` takes O(N) and checking properties takes O(K).

The **total time complexity** is O(M) + O(N \* K)

**Attention**: checking one property takes only O(1) because of `Map` and `Set`. So, checking properties takes O(K).

### conclusion

![alt text](<images/Time complexity analyze.jpg>)

**With the help of Mr.Owen**, I come up with the following conclusion:

1. When M(the size of `excludes`) is large, solution2 is more efficient than solution1. Especially when there are many exclusion criteria(large M) compared to the number of items(N) and their properties(K).
2. The preprocessing step in Solution 2 helps in reducing the complexity of the filtering process by avoiding repetitive checks for each exclude pair.
