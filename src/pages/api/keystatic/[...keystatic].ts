import { makeResponse } from "@keystatic/astro/api";
import config from "../../../../keystatic.config";

export const ALL = ({ request }: { request: Request }) => {
	return makeResponse(config, request);
};
