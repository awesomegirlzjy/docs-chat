# 文档编辑与 AI 对话系统

一个基于 React + TypeScript + Vite 的文档编辑应用，集成了 WPS WebOffice 文档编辑功能和 Google Gemini AI 对话功能。

## 功能特性

- 📝 **文档编辑**：使用 WPS WebOffice SDK 实现在线文档编辑
- 🤖 **AI 对话**：集成 Google Gemini 2.5 Flash 模型进行智能对话
- 🎨 **响应式布局**：文档区域占 2/3 宽度，对话区域占 1/3 宽度
- 💅 **现代化 UI**：使用 Less 进行样式模块化管理
- ✅ **代码质量**：配置了 ESLint 和 Prettier

## 技术栈

- **框架**：React 19 + TypeScript
- **构建工具**：Vite
- **样式**：Less
- **文档编辑**：WPS WebOffice SDK
- **AI 模型**：Google Gemini 2.5 Flash
- **代码检查**：ESLint + Prettier

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

在项目根目录创建 `.env` 文件：

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> 获取 Gemini API Key：访问 [Google AI Studio](https://aistudio.google.com/) 创建项目并获取 API 密钥

### 3. 启动开发服务器

```bash
npm run dev
```

### 4. 构建生产版本

```bash
npm run build
```

## 项目结构

```
docs-chat/
├── src/
│   ├── components/
│   │   ├── DocumentEditor.tsx    # 文档编辑组件
│   │   ├── DocumentEditor.less
│   │   ├── ChatPanel.tsx         # AI 对话组件
│   │   └── ChatPanel.less
│   ├── App.tsx                    # 主应用组件
│   ├── App.less                   # 主样式文件
│   └── main.tsx                   # 入口文件
├── .env                           # 环境变量（需要创建）
├── .env.example                   # 环境变量示例
└── package.json
```

## 使用说明

### 文档编辑

应用默认打开指定的 WPS 文档（可在 `src/App.tsx` 中修改 `documentUrl`）。

### AI 对话

1. 在右侧对话面板输入问题
2. 按 Enter 发送消息（Shift+Enter 换行）
3. AI 将使用 Gemini 2.5 Flash 模型进行回复

## 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint

# 自动修复 ESLint 问题
npm run lint:fix

# 格式化代码
npm run format

# 检查代码格式
npm run format:check
```

## 配置说明

### WPS WebOffice SDK

WPS WebOffice SDK 已通过 CDN 引入（在 `index.html` 中）。如需使用本地版本，可以：

1. 下载 SDK 文件到 `public` 目录
2. 修改 `index.html` 中的脚本引用路径

### Gemini API

当前使用的模型是 `gemini-2.5-flash`，可以在 `src/components/ChatPanel.tsx` 中修改模型名称。

## 注意事项

1. **API Key 安全**：请勿将 `.env` 文件提交到版本控制系统
2. **WPS 文档 URL**：需要确保文档 URL 可访问，且已配置相应的权限
3. **CORS 问题**：如果遇到跨域问题，可能需要配置代理或使用服务端接口

## 参考文档

- [WPS WebOffice 前端文档](https://wwo.wps.cn/docs/front-end/introduction/)
- [Google Gemini API 文档](https://ai.google.dev/gemini-api/docs/text-generation?hl=zh-cn)
- [React 文档](https://react.dev/)
- [Vite 文档](https://vite.dev/)

## License

MIT
