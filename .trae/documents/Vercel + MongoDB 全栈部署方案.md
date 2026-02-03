# 融和移动端 UI 视觉规范 - 全栈部署指南 (Vercel + MongoDB Atlas)

为了实现项目在云端 (Vercel) 的完整读写功能，我们需要将数据存储从本地 JSON 文件迁移到云数据库 (MongoDB Atlas)。以下是详细的实施步骤：

## 1. 注册与配置 MongoDB Atlas (免费云数据库)

1.  访问 [MongoDB Atlas 官网](https://www.mongodb.com/cloud/atlas/register) 并注册免费账号。
2.  创建一个新的 **Cluster** (选择免费的 Shared Cluster, M0 Sandbox)。
3.  **创建数据库用户**：
    *   在 "Database Access" 中添加新用户，设置用户名和密码（**请记住密码！**）。
    *   权限选择 "Read and write to any database"。
4.  **配置网络访问**：
    *   在 "Network Access" 中添加 IP 地址。
    *   选择 **"Allow Access from Anywhere" (0.0.0.0/0)**，确保 Vercel 可以连接。
5.  **获取连接字符串**：
    *   点击 Cluster 的 "Connect" -> "Drivers"。
    *   复制连接字符串 (类似 `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`)。
    *   将 `<username>` 和 `<password>` 替换为您刚才设置的真实用户名和密码。

## 2. 部署到 Vercel

1.  **推送代码到 GitHub**：确保当前所有代码已提交并推送到 GitHub 仓库。
2.  **在 Vercel 导入项目**：
    *   登录 Vercel，点击 "Add New Project"。
    *   选择您的 GitHub 仓库并导入。
3.  **配置环境变量**：
    *   在 Vercel 的部署设置页面，找到 **Environment Variables** 部分。
    *   添加变量名：`MONGODB_URI`
    *   变量值：粘贴您在第 1 步获取的 MongoDB 连接字符串。
4.  **点击 Deploy**：等待部署完成。

## 3. 数据初始化 (Seeding)

首次部署后数据库是空的，需要运行我们准备好的脚本将本地 `data/components.json` 的数据导入到 MongoDB。

**方法 A：本地运行 (推荐)**
1.  在项目根目录创建一个 `.env` 文件，内容为：`MONGODB_URI=您的连接字符串`
2.  在终端运行命令：
    ```bash
    node scripts/seed.js
    ```
3.  看到 "Data seeded successfully" 即表示成功。

## 4. 验证与日常使用

*   **访问线上项目**：打开 Vercel 提供的域名，您的项目现在应该可以正常加载数据了。
*   **编辑与保存**：在线上页面进行修改并点击保存，数据将直接写入 MongoDB，刷新页面数据**不会丢失**。
*   **后续更新**：每次修改代码（如样式、页面结构），只需 `git push` 到 GitHub，Vercel 会自动重新部署，同时数据库中的数据会保持不变。

---

### 技术变更摘要 (已完成)

1.  **后端改造**：`server.js` 已升级，不再读写本地文件，而是连接 MongoDB。
2.  **API 路由**：新增 `api/components/read.js` 和 `write.js` 处理数据库 CRUD 操作。
3.  **数据模型**：创建了 `models/Component.js` 定义数据结构。
4.  **迁移工具**：创建了 `scripts/seed.js` 用于数据初始化。

现在，您只需按照第 1 步去申请一个 MongoDB 账号并拿到连接字符串，剩下的工作代码层面已经全部就绪！