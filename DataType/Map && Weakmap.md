<!--
 * @Author: cuixiang cuixiang405@gmail.com
 * @Date: 2024-01-16 21:29:01
 * @FilePath: /js-basic-knowledge/2024-01/Map && Weakmap.md
 * @Description: 
-->
# Differences between Map and Weakmap

## Map

### Concept

The Map object is a **collection of key-value pairs**. The Map object is similar to the ordinary Object, but Map's key can be **any type**, while the key of the ordinary Object **can only** be a **string**. Map is a more complete Hash structure. If the keys of Map are of the original data type, you can regard the two keys as the same key as long as they are strictly equal.

We can consider the Map as a binary array, and every key-value pair as a array too, such as:

```js
const map = [
  ['name', '张三'],
  ['age', 18],
]
```

### Instance properties of Map

1. **size**: return the number of key-value pairs, the total number of members in the Map.
2. **constructor**: return Map constructor.

### Methods of Map

#### Operation methods:

1. set(key, value)
2. get(key)
3. has(key)
4. delete(key)
5. clear()

#### Iterator generation methods return an iterator

1. keys()
2. values()
3. entries()

#### forEach()

## Weakmap

### Concept

The WeakMap object is also a collection of **key-value pairs**, whose key is **referenced weakly**. The key **must be an object or a symbol that is not globally registered**, and the key can be arbitrary. (In other words, that an object exists as the key of WeakMap will not prevent this object being garbage collected.)

### Purpose to create WeakMap

Before a WeakMap is created, when data is associated with an object, a strong reference to the object is often formed. As a result, the key object will not be collected by the garbage collection mechanism as long as the value is present. **The key object can only be reclaimed if the reference is manually deleted.**

**WeakMap associates data with objects without affecting the key object's garbage collection.** In addition, when the key object is not referenced outside of WeakMap, the corresponding value is also garbage collected.

## Summary

Map data structure. It is similar to an object and is also **a collection of key-value pairs**, but the scope of **the "key" is not limited to strings**, and all types of values (including objects) can be used as keys.

The WeakMap structure is similar to the Map structure in that it is also used to generate **a collection of key-value pairs**. However, WeakMap accepts only objects as key names (except null) and does not accept other types of values as key names. And **the objects that WeakMap's key names point to are not counted in the garbage collection mechanism.**
