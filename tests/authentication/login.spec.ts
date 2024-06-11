import {test, expect} from '@playwright/test';

//basic login test no POM no Fixtures

test.describe('Login', () => {
    test('should be able to login', async ({page}) => {
        await page.goto('https://demoblaze.com/index.html');
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.getByLabel('Username:').fill('playdemoblaze');
        await page.getByLabel('Password:').fill('Playdemoblaze@123');
        await page.getByRole('button', { name: 'Log in' }).click();
        await expect(page).toHaveURL('https://demoblaze.com/index.html');    
    });

});