// 灰度或 AB 测试开关
export const FEATURE_FLAGS = {
  NEW_DASHBOARD: window.GLOBAL_CONFIG?.FEATURE_FLAGS?.NEW_DASHBOARD || false,
};
