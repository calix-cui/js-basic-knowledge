<!--
 * @Author: cuixiang cuixiang405@gmail.com
 * @Date: 2024-01-24 21:30:47
 * @FilePath: /js-basic-knowledge/Array/splice and slice.md
 * @Description: 
-->
splice() and slice() are both methods of JavaScript arrays, but they work **differently**.

# splice

The splice() method can add, remove, or replace elements in an array and return the deleted element, which **changes the original array**.

## syntax

```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

# slice

The slice() method returns a new array of elements from the original array with the specified start and end positions. It **does not change the original array**.

## syntax

```js
slice()
slice(start)
slice(start, end)
```

# sum

Using the splice() method may change the original array, while the slice() method does not
