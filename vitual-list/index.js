// 虚拟列表的基本参数
const totalItems = 10000;  // 假设有10000条数据
const itemHeight = 50;     // 每个列表项的高度
const containerHeight = 400; // 容器高度，与 CSS 中定义一致
const visibleItemsCount = Math.ceil(containerHeight / itemHeight) + 1; // 可见的列表项数量

// 虚拟区高度
const virtualListHeight = totalItems * itemHeight;

// DOM 元素
const listContainer = document.getElementById('list-container');
const list = document.getElementById('list');
const content = document.getElementById('content');

// 创建虚拟列表函数
function createVirtualList() {
  // 设置列表总高度，保证滚动条可以滚动到完整高度
  list.style.height = `${virtualListHeight}px`;

  // 创建用于显示的可视项 DOM
  const visibleItems = new Array(visibleItemsCount).fill(null).map((_, i) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    // item.style.top = `${i * itemHeight}px`;
    content.appendChild(item);
    return item;
  });

  // 初始化渲染
  renderVisibleItems(0);

  // 监听滚动事件
  listContainer.addEventListener('scroll', () => {
    const scrollTop = listContainer.scrollTop;
    const startIdx = Math.floor(scrollTop / itemHeight);
    renderVisibleItems(startIdx);
  });

  function renderVisibleItems(startIdx) {
    // 遍历可见列表项，动态更新内容
    content.style.top = `${startIdx * itemHeight}px`;
    visibleItems.forEach((item, i) => {
      const dataIdx = startIdx + i;
      if (dataIdx < totalItems) {
        item.style.top = `${dataIdx * itemHeight}px`;
        item.textContent = `Item ${dataIdx + 1}`;  // 假设数据是 Item n
      }
    });
  }
}

// 初始化虚拟列表
createVirtualList();
