// 工具函数示例：防抖
export const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

// 工具函数示例：检查空值
export const isEmpty = val => val == null || val === '' || Number.isNaN(val);