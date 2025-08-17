
```plaintext
project-root/
├── .github/                  # GitHub 配置（如 CI/CD 工作流）
├── .husky/                   # Git 钩子配置
├── apps/                     # 应用程序目录
│   └── app-admin/            # 后台管理主应用
│
├── packages/                 # 共享包目录
│   ├── api/                  # API 客户端包
│   │   ├── src/
│   │   │   ├── client.ts     # API 客户端配置（axios）
│   │   │   ├── index.ts      # 导出 API 方法
│   │   │   └── modules/      # 按模块组织的 API 方法
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── components/           # 共享组件库
│   │   ├── src/
│   │   │   ├── common/       # 通用组件
│   │   │   ├── forms/        # 表单相关组件
│   │   │   ├── tables/       # 表格相关组件
│   │   │   └── index.ts      # 组件导出
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── config/               # 共享配置包
│   │   ├── src/
│   │   │   ├── eslint/       # ESLint 配置
│   │   │   ├── prettier/     # Prettier 配置
│   │   │   ├── tsconfig/     # TypeScript 配置
│   │   │   └── vite/         # Vite 配置
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── constants/            # 共享常量包
│   │   ├── src/
│   │   │   ├── api.ts        # API 相关常量
│   │   │   ├── routes.ts     # 路由相关常量
│   │   │   └── index.ts      # 常量导出
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── hooks/                # 共享钩子包
│   │   ├── src/
│   │   │   ├── useAuth.ts    # 认证相关钩子
│   │   │   ├── useTable.ts   # 表格相关钩子
│   │   │   └── index.ts      # 钩子导出
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── styles/               # 共享样式包
│   │   ├── src/
│   │   │   ├── antd-theme.ts # Ant Design 主题配置
│   │   │   ├── global.css    # 全局样式
│   │   │   └── variables.css # CSS 变量
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── types/                # 共享类型定义包
│   │   ├── src/
│   │   │   ├── api.ts        # API 相关类型
│   │   │   ├── user.ts       # 用户相关类型
│   │   │   └── index.ts      # 类型导出
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── utils/                # 共享工具函数包
│       ├── src/
│       │   ├── format.ts     # 格式化工具
│       │   ├── storage.ts    # 存储工具
│       │   └── index.ts      # 工具导出
│       ├── package.json
│       └── tsconfig.json
│
├── .editorconfig             # 编辑器配置
├── .eslintignore             # ESLint 忽略配置
├── .gitignore                # Git 忽略配置
├── .npmrc                    # PNPM 配置
├── package.json              # 根项目配置
├── pnpm-lock.yaml            # PNPM 依赖锁文件
├── pnpm-workspace.yaml       # PNPM 工作区配置
├── prettier.config.js        # 全局 Prettier 配置
├── README.md                 # 项目说明文档
└── tsconfig.json             # 根 TypeScript 配置
```