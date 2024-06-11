import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page"; //import page object

type LoginFixtures = {
    loginPage: LoginPage //deklarasikan page object
}

export const test = base.extend<LoginFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});

export { expect } from '@playwright/test';
