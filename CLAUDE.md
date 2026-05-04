# Binh Global Consulting — Claude 工作准则

## 项目结构

- **主站**：React + Vite + TypeScript（仓库根目录），部署到 `binhglobal.com`
- **Cloudflare Pages 项目名**：`binh-global-consulting`
- **静态表单**：`public/team-form.html`、`public/admin.html`、`public/team-dashboard.html`
- **后端**：Supabase
  - URL: `https://cqhpkcohkcwyrkwedsvn.supabase.co`
  - anon key 已写入 HTML
  - 表名 `team_members`，4 位数字 id 作为恢复码
  - admin 后台密码：`admin123`

## 部署：3 秒，瞬间完成

```bash
cd /Users/bin/Desktop/binhglobal/binh-global-consulting && npm run build && wrangler pages deploy ./dist --project-name binh-global-consulting --branch main --commit-dirty=true
```

**vite build ~1 秒 + wrangler 上传 ~2 秒 = 总共 3 秒。**

部署慢是配置问题，不是技术问题。代码本身瞬间编译，瞬间上传。
- ❌ 不要走 `git push` 触发 Cloudflare 默认构建（它会重新跑 npm install，1-2 分钟）
- ❌ 不要新建 GitHub Actions / API token / 新 Pages 项目
- ❌ 不要说"部署需要等几分钟"——那是错的
- ✅ 改完代码立刻跑上面那行命令

## 工作准则

### 1. 先讲方案，再动手

复杂任务（涉及部署/新建文件/重构），先用一句话说"我准备这样做"，等用户点头再做。
不要绕弯子尝试三种方案，先试最简单的。

### 2. 改问题先找根因

UI 问题先查 CSS，特别是 `position`、`margin`、`z-index`、`overflow`。
不要瞎移动元素位置试错。
i18n 问题全文搜 `T[lang]` 调用，找出哪些字段没接入翻译系统。

### 3. 一次到位

修一个问题，把同类问题一起检查掉。
比如修动态项的翻译，必须把 `addExp` / `addCase` / `addRef` 里的硬编码标签全部接入 `T[lang]`，并加 `relocalizeDynamic()` 让切换语言时已有项也更新。

### 4. 回复要短

完成任务后，一句话说结果。不要罗列已完成的事，不要"修改：xxx"列表。
用户烦躁时，立刻收敛，不解释。

### 5. 全面看问题

修 bug 前先理解整个上下文：
- 这个 HTML/CSS 在什么上下文里渲染？父容器有没有特殊样式？
- 这段 JS 什么时候被调用？语言切换时会不会重新执行？
- 改了之后，其他页面/状态会不会被影响？

## 已知陷阱

- `public/team-form.html` 里 `.container` 有 `margin: 40px auto 60px`（之前是 `-20px`，会遮挡上方元素），不要再改回负数
- 横幅必须放在 `.container` 内部，不能放在外面（外面会被 container 的 margin 推到 header 后面）
- Supabase 提交用 `Prefer: return=minimal`，从 `Location` 响应头解析 id（不要用 `return=representation`，会因 SELECT 权限报错）
- 切换语言时，动态生成的 `<div class="ditem">`（经历/案例/项目）需要 `relocalizeDynamic()` 重新翻译，不能只靠 `applyTranslations()`
- 恢复码格式：4 位纯数字（`String(id).padStart(4,'0')`），不带前缀
- 用户 binhu66 的 GitHub 已通过 `gh` CLI 登录
- Wrangler 已用 `condosmore66@gmail.com` 的 Cloudflare 账号登录

## 用户偏好

- 中文沟通
- 不喜欢绕弯子，要"简单方案"
- 不喜欢部署慢，要"AI 时代即时"
- UI 细节挑剔（间距、遮挡、对齐都要到位）
- 看到 emoji 装饰性使用 OK，但不要堆砌
