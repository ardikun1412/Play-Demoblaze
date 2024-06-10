import {test,expect} from '@playwright/test';


test.describe ('Sign up', () => {
    test('should be able to sign up', async ({page}) => {
        await page.goto('https://demoblaze.com/index.html');
        await page.getByRole('link', { name: 'Sign up' }).click();
        await page.getByLabel('Username:').fill('playdemoblaze04');
        await page.getByLabel('Password:').fill('Playdemoblaze@123');
        // Handling dialog
        // Add event listener for dialog
        page.on('dialog', async (dialog) => {
        expect(dialog.message()).toBe('Sign up successful.');
        await dialog.accept();
        });        
        await page.getByRole('button', { name: 'Sign up' }).click();
        // Wait for 3 seconds to see the dialog
        await page.waitForTimeout(3000);
    });

    test('sign up with registered username', async ({page}) => {
        await page.goto('https://demoblaze.com/index.html');
        await page.getByRole('link', { name: 'Sign up' }).click();
        await page.getByLabel('Username:').fill('playdemoblaze');
        await page.getByLabel('Password:').fill('Playdemoblaze@123');
        // Handling dialog
        // Add event listener for dialog
        page.on('dialog', async (dialog) => {
        expect(dialog.message()).toBe('This user already exist.');
        await dialog.accept();
        });        
        await page.getByRole('button', { name: 'Sign up' }).click();
        // Wait for 3 seconds to see the dialog
        await page.waitForTimeout(3000);
    });

});