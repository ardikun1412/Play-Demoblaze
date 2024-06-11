import { test } from '../../fixtures/core.fixtures'; // Import core fixtures

test.describe('Home', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login('playdemoblaze', 'Playdemoblaze@123');

    });

    test('should be able to open home page', async ({ homePage }) => {
        await homePage.isReady();

    });
});
