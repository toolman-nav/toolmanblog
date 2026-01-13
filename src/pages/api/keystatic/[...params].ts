import { handleKeystatic } from "@keystatic/astro/api";
import keystaticConfig from "../../../../keystatic.config";

// 使用 handleKeystatic 包装器，并显式处理上下文
export const ALL = (context: any) => {
	return handleKeystatic(keystaticConfig)(context);
};
