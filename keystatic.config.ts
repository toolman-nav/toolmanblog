import { collection, config, fields } from "@keystatic/core";

export default config({
	storage: import.meta.env.DEV
		? { kind: "local" }
		: {
				kind: "github",
				repo: "toolman-nav/toolmanblog", // 🚨 例如: 'toolman/my_blog' (去GitHub看你的仓库地址)
			},
	collections: {
		posts: collection({
			label: "文章",
			slugField: "title",
			path: "src/content/posts/*", // 👈 告诉它你的文章在哪里
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "标题" } }),
				published: fields.date({ label: "发布日期" }),
				description: fields.text({ label: "简介" }),
				image: fields.image({
					label: "封面图",
					directory: "src/assets/images", // 图片自动存这里
					publicPath: "../../assets/images", // 文章里自动引用这个路径
				}),
				tags: fields.array(fields.text({ label: "标签" }), { label: "标签" }),
				category: fields.text({ label: "分类" }),
				content: fields.document({
					label: "正文",
					formatting: true,
					dividers: true,
					links: true,
					images: {
						directory: "src/assets/images",
						publicPath: "../../assets/images",
					},
				}),
			},
		}),
	},
});
