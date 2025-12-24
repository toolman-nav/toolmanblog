// export const prerender = false; // 👈 这一行删掉，在 Server 模式下默认就是动态的

import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
	const clientId = import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID;
	// 为了安全，不显示 Secret
	const hasClientSecret = !!import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
	const hasSecret = !!import.meta.env.KEYSTATIC_SECRET;

	return new Response(
		JSON.stringify({
			status: "Success!",
			url: request.url, // 看看实际请求的 URL 是啥
			checks: {
				"Client ID": clientId ? "✅ Configured" : "❌ MISSING",
				"Client Secret": hasClientSecret ? "✅ Configured" : "❌ MISSING",
				"Keystatic Secret": hasSecret ? "✅ Configured" : "❌ MISSING",
			},
			message: "Routing is working properly.",
		}),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
};
