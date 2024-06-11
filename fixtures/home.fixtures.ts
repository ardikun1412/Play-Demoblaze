import {test as base} from '@playwright/test';
import { HomePage } from '../pages/home.page'; //import page object

type HomeFixtures = {
    homePage: HomePage //deklarasikan page object
}

export const test = base.extend<HomeFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    }
});

export { expect } from '@playwright/test';