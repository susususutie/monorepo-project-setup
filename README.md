# Monorepo Project Setup

基于 pnpm workspace 的现代前端 Monorepo 项目模板。

## 技术栈

| 类别 | 技术 |
|------|------|
| 包管理器 | pnpm 10.12.1 |
| Node 版本 | >= 22.5.1 |
| 前端框架 | React 18.3.1 |
| 构建工具 | Vite 4.5.5 |
| UI 组件库 | Ant Design 5.22.6 |
| Hooks 库 | ahooks 3.8.4 |
| 样式方案 | antd-style 3.7.1 |
| 代码规范 | ESLint 9.33.0 + Prettier 3.6.2 |
| 语言 | TypeScript 5.9.2 |

## 项目结构

```
monorepo-project-setup/
├── apps/                      # 应用目录
│   └── app-iam/               # IAM (身份与访问管理) 应用
│
├── packages/                  # 共享包目录
│   ├── foundation/            # 基础工具包（零依赖）
│   │   ├── src/
│   │   │   ├── buildtime-configs/  # 构建时配置
│   │   │   ├── constants/          # 常量定义
│   │   │   ├── runtime-configs/    # 运行时配置
│   │   │   ├── ui/                 # 基础 UI 组件
│   │   │   └── utils/              # 工具函数
│   │
│   ├── business-core/         # 业务核心包
│   │   └── src/
│   │       ├── api/           # API 接口
│   │       ├── components/    # 业务组件
│   │       ├── constants/     # 业务常量
│   │       └── enums/         # 业务枚举
│   │
│   └── assets/                # 静态资源包（零依赖）
│       └── src/
│           ├── images/        # 图片资源
│           └── fonts/         # 字体资源
│
├── pnpm-workspace.yaml        # 工作区配置
├── pnpm-lock.yaml             # 依赖锁文件
├── package.json               # 根项目配置
├── jsconfig.json              # TypeScript/IDE 配置
├── eslint.config.js           # ESLint 配置
├── .nvmrc                     # Node 版本配置
└── README.md                  # 项目说明文档
```

## 快速开始

### 环境要求

- Node.js >= 22.5.1
- pnpm >= 10.12.1

建议使用 nvm 管理 Node 版本：

```bash
nvm use
```

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动所有应用
pnpm dev

# 或启动指定应用
pnpm --filter app-iam dev
```

### 构建

```bash
# 构建所有应用
pnpm build
```

### 代码规范

```bash
# 代码检查
pnpm lint

# 代码格式化
pnpm format
```

## 特性

- ⚡️ **pnpm Workspace** - 高效的 Monorepo 包管理
- 🔄 **集中依赖** - 使用 pnpm catalog 统一版本管理
- 🎨 **Ant Design** - 企业级 UI 组件库
- 🔧 **零依赖包** - foundation 和 assets 包不引入外部依赖
- 📱 **路径别名** - 通过 jsconfig.json 配置路径别名
- 🛡️ **代码规范** - ESLint + Prettier + 最佳实践
