import { test, expect } from '../../fixtures/signup.fixtures';


test.describe ('Sign up', () => {
    test.only('should be able to sign up', async ({ page, randomUsername, saveUsername }) => {
        await page.goto('/index.html');
        await page.getByRole('link', { name: 'Sign up' }).click();
        await page.getByLabel('Username:').fill(randomUsername);
        await saveUsername(randomUsername);
        await page.getByLabel('Password:').fill('Playdemoblaze@123');

        // Handling dialog
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Sign up successful.');
            await dialog.accept();
            // Wait for 3 seconds to see the dialog
            await page.waitForTimeout(3000);
            // Save the registered username only if sign up is successful
            // await saveUsername(randomUsername);
        });

        await page.getByRole('button', { name: 'Sign up' }).click();    
    });


    test('sign up with registered username', async ({page}) => {
        await page.goto('/index.html');
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