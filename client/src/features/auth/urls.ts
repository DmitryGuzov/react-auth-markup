import { createPath } from "rd-url-utils";

export const SIGNUP_PAGE_URL = createPath<{}>("/signup");
export const SIGNIN_PAGE_URL = createPath<{}>("/signin");
export const HOME_PAGE_URL = createPath<{}>("/home");