import { mergeTests } from "@playwright/test";
import { test as homeFixtures } from "./home.fixtures";
import { test as loginFixtures } from "./login.fixtures";

export const test = mergeTests (homeFixtures, loginFixtures)