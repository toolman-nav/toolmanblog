/* This is a script to create a new post markdown file with front-matter */
import fs from "node:fs";
import path from "node:path";

// 获取日期 YYYY-MM-DD
function getDate() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

const args = process.argv.slice(2);

if (args.length === 0) {
	console.error(
		"Error: No filename argument provided\nUsage: npm run new -- <filename>",
	);
	process.exit(1);
}

// args[0] 是文章标题 (例如 "Midjourney 教程")
const title = args[0];

// 自动生成文件名 (简单的处理：空格转横杠，你也可以手动指定第二个参数作为文件名)
// 如果想简单点，直接用标题做文件名也可以，下面这行代码会尝试保留中文或英文作为文件名
let fileName = args[1] || title.replace(/\s+/g, "-").toLowerCase();

// 补全后缀
if (!/\.(md|mdx)$/i.test(fileName)) {
	fileName += ".md";
}

const targetDir = "./src/content/posts/";
const fullPath = path.join(targetDir, fileName);

// 检查目录是否存在，不存在则创建
if (!fs.existsSync(targetDir)) {
	fs.mkdirSync(targetDir, { recursive: true });
}

// 检查文件是否存在
if (fs.existsSync(fullPath)) {
	console.error(`❌ Error: File ${fullPath} already exists`);
	process.exit(1);
}

// ✨ SEO 优化后的模板 ✨
const content = `---
title: "${title}"
published: ${getDate()}
description: "这里写一段包含关键词的吸引人的描述（SEO重点）..."
image: ""
tags: ["AI工具", "教程"]
category: "AI教程"
draft: false 
lang: ''
---

:::note
📝 **本文摘要**：这里是文章的摘要内容（AI生成后填入）。
:::

## 1. 简介

这里开始写正文...

`;

fs.writeFileSync(fullPath, content);

console.log(`
✅ 文章创建成功！
📂 路径：${fullPath}
🚀 快去开始写作吧！
`);
