// foundation 包主入口 - 零依赖基础工具包

// 工具函数
export * from './utils/tools.js';
export * from './utils/typecheck.js';

// 常量
export * from './constants/index.js';

// 运行时配置（灰度开关等）
export * from './runtime-configs/feature.flag.js';

// UI 组件
export * from './ui/index.jsx';

// 注意：buildtime-configs 不从此入口导出
// 因为它依赖 Vite 构建环境，应通过 subpath import 使用：
// import { BUILD_VERSION } from '@foundation/buildtime-configs/build.js';
