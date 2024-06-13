import { test } from '../../fixtures/core.fixtures'; // Import core fixtures

test.describe('Home', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.login('playdemoblaze', 'Playdemoblaze@123');

    });

    test('Ensure the homepage loads correctly', async ({ homePage }) => {
        await homePage.isReady();

    });

    test('Test the functionality of the navigation links', async ({ homePage }) => {
        //Expected Result: Each link should navigate to the corresponding page without errors.
        await homePage.clickMenuHome();
        await homePage.clickMenuContact();
        await homePage.closePopUpContact();
        await homePage.clickMenuAboutUs();
        await homePage.closePopUpAboutUs();
        await homePage.clickMenuCart();
        
    });

    test('Verify product category filtering', async ({ homePage }) => {
        //Expected Result: The product list should update to show only the products in the selected category.
    });

    test("Ensure each product's details are displayed correctly", async ({ homePage }) => {
        //Expected Result: Each product should display a name, image, price, and description correctly.
    });

    test('Verify pagination functionality', async ({ homePage }) => {
        //Expected Result: The pagination buttons should navigate through the product listings correctly.
    });

    test('Ensure the footer contains correct information', async ({ homePage }) => {
        //Expected Result: The footer should display accurate information, and the email link should open an email client.
    });


});
