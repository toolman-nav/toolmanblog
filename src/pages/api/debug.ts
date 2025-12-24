export const prerender = false; // 🚨 强制动态模式，确保它是走服务器的

export async function GET() {
	// 获取环境变量
	// 在 Astro + Cloudflare 中，变量通常在 import.meta.env
	const clientId = import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID;
	const clientSecret = import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
	const secret = import.meta.env.KEYSTATIC_SECRET;

	return new Response(
		JSON.stringify({
			status: "Success! Routing is working.",
			checks: {
				"Client ID": clientId
					? `✅ Exists (Starts with ${clientId.substring(0, 4)}...)`
					: "❌ MISSING",
				"Client Secret": clientSecret ? "✅ Exists (Hidden)" : "❌ MISSING",
				"Keystatic Secret": secret ? "✅ Exists (Hidden)" : "❌ MISSING",
			},
			message: "If you see this JSON, Cloudflare Routing is PERFECT.",
		}),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
}
