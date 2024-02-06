<!--
 * @Author: cuixiang cuixiang405@gmail.com
 * @Date: 2024-01-28 18:50:53
 * @FilePath: /js-basic-knowledge/2024-01/Asynchronous loading of JS scripts.md
 * @Description: 
-->
# Asynchronous loading of JS scripts

## How to asynchronously load JS scripts?

There are two methods to achieve the asynchronous loading of JS scripts:

1. Dynamically create a script tag and set its src attribute to the URL of the script to be loaded. We can use the onload or onreadystatechange event to check if the script has finished loading.

```js
const script = document.createElement('script')
script.src = 'path/to/script.js'
script.onload = function () {
  // 脚本加载完成后执行的回调函数
}
document.body.appendChild(script)
```

2. To send an asynchronous request to the url of the script. After a successful request, parse the response text into JS code, and then use the eval() function or Function() constructor to execute the script.

```js
const xhr = new XMLHttpRequest()
xhr.open('GET', 'path/to/script.js')
xhr.onload = function () {
  const script = document.createElement('script')
  script.textContent = xhr.responseText
  document.head.appendChild(script)
}
xhr.send()
```

## Compared to synchronous loading, asynchronous loading has the following differences

1. Asynchronous loading can improve the loading speed and response performance of the page, and avoid the situation that the page is stuck due to JavaScript blocking.
2. Asynchronous loading avoids the blocking caused by loading scripts and allows other resources of the page to load and render faster.
3. Asynchronous loading allows you to flexibly control the loading sequence and the execution time of scripts, and dynamically load and unload scripts based on page requirements, thus improving page maintainability and expansibility.
