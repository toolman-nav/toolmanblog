import { handleKeystatic } from "@keystatic/astro/api";
import config from "../../../../keystatic.config";

// 强制该 API 为动态模式
export const prerender = false;

export const ALL = handleKeystatic(config);
