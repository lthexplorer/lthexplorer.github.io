# 🌿 Gentiana 个人主页 — 开发进展

> 跨设备协作日志 —— 每次开始工作前先读这个文件。

---

## 📌 当前状态

项目已搭建完成基本页面框架：首屏 + 关于 + 项目展示 + 联系 + 页脚。支持暗色模式，响应式适配完成，已推送至 GitHub。

---

## ✅ 已完成

- [x] **项目初始化** — HTML 单页结构 + 模块化 CSS 架构 + Git 仓库
- [x] **设计令牌系统** — `base.css` 定义全局 CSS 变量（颜色/间距/阴影/圆角），支持亮色/暗色双主题
- [x] **固定导航栏** — `navbar.css`，含品牌 Logo + 4 个导航链接 + 主题切换按钮
- [x] **首屏** — `hero.css`，大标题 + 自嘲文案 + 滚动引导动画（bounce）
- [x] **关于我** — `about.css`，Flex 卡片布局 + 头像 + 介绍文本
- [x] **项目展示** — `projects.css`，2 列 Grid 布局（1 个实际项目 + 1 个占位卡片）
- [x] **联系方式** — `contact.css`，GitHub / 邮箱 / 博客三个连接卡片
- [x] **页脚** — `footer.css`，版权声明
- [x] **暗色模式** — `theme.js`，`data-theme` + localStorage 持久化 + 系统偏好检测
- [x] **导航高亮** — `nav.js`，IntersectionObserver 监听 section 可见性
- [x] **控制台彩蛋** — `nav.js` 中 console.log 输出主题语
- [x] **响应式布局** — 所有组件均适配 `@media (max-width: 600px)` 断点
- [x] **推送到 GitHub** — 已关联远程仓库 `origin/main`

---

## 🚧 待办 / 可以做的事

- [ ] 接入 GitHub API 展示真实项目数据
- [ ] 添加「博客」板块（或集成第三方博客平台）
- [ ] 完善联系链接（填写真实的 GitHub / 邮箱 / 博客地址）
- [ ] 添加页面加载动画或过渡效果
- [ ] 优化 SEO（meta description、Open Graph 标签等）
- [ ] 添加 404 页面
- [ ] 考虑用构建工具（如 Vite）优化开发体验

---

## 🔄 近期变更

| 时间 | 设备 | 变更内容 | 备注 |
|------|------|----------|------|
| 2026-07-09 | — | 项目创建，完成所有基础页面和功能 | 初始版本 |
| 2026-07-09 | — | 创建 `PROGRESS.md`，建立跨设备进展追踪机制 | 本次变更 |

---

## 🐛 已知问题

- 暂无已知 Bug

---

## 📐 架构备忘

### 文件结构

```
my-homepage/
├── index.html           # 主页面（单页全站，6 个区块）
├── PROGRESS.md          # ← 跨设备进展日志（这个文件）
├── css/
│   ├── base.css         # 基础层：CSS 变量、重置、通用布局类
│   ├── navbar.css       # 组件：导航栏
│   ├── hero.css         # 组件：首屏
│   ├── about.css        # 组件：关于我
│   ├── projects.css     # 组件：项目卡片
│   ├── contact.css      # 组件：联系方式
│   └── footer.css       # 组件：页脚
├── js/
│   ├── theme.js         # 功能：暗色模式切换
│   └── nav.js           # 功能：导航高亮 + 控制台彩蛋
└── .gitignore
```

### 组件 → 文件映射表

| HTML 区块 | CSS 文件 | 核心类 / ID |
|-----------|----------|-------------|
| `<nav class="navbar">` | `navbar.css` | `.navbar` / `.nav-links` / `#themeToggle` |
| `<section class="hero">` | `hero.css` | `.hero` / `.hero-name` / `.hero-tagline` |
| `<section id="about">` | `about.css` | `.about-card` / `.about-avatar` |
| `<section id="projects">` | `projects.css` | `.projects-grid` / `.project-card` |
| `<section id="contact">` | `contact.css` | `.contact-links` / `.contact-item` |
| `<footer class="footer">` | `footer.css` | `.footer` |

### 主题系统

- 亮色/暗色通过 `<html data-theme="dark">` 属性切换
- 所有颜色变量定义在 `base.css` 的 `:root` 和 `[data-theme="dark"]` 中
- `theme.js` 负责切换逻辑（localStorage 持久化 + 自动检测系统偏好）

### 设计原则

- **一文件一组件** — 每个 CSS 文件只负责一个 HTML 区块
- **语义化命名** — 类名直接描述其用途
- **纯原生** — 无框架、无预处理器、无 npm 依赖
- **渐进增强** — 移动端优先，通过媒体查询做适配

---

## 🔗 快速链接

- GitHub 远程仓库：`origin` (main 分支)
- 本地预览：直接用浏览器打开 `index.html`
