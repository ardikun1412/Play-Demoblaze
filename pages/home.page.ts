import { Locator, expect, type Page } from "@playwright/test";

export class HomePage {
    private readonly menuHome : Locator;
    private readonly menuContact : Locator;
    private readonly menuAboutUs : Locator;
    private readonly menuCart : Locator;
    private readonly menuLogOut : Locator;
    private readonly logoCompany : Locator;
    private readonly menuCategories : Locator;
    private readonly menuPhones : Locator;
    private readonly menuLaptops : Locator;
    private readonly menuMonitors : Locator;
    private readonly popUpContact : Locator;
    private readonly popUpaAboutus : Locator;
    private readonly btnClosePopUpContact : Locator;
    private readonly btnClosePopUpAboutUs : Locator;
    
    constructor(public readonly page: Page) {
        this.menuHome = this.page.getByRole('link', { name: 'Home' });
        this.menuContact = this.page.getByRole('link', { name: 'Contact' });
        this.menuAboutUs = this.page.getByRole('link', { name: 'About us' });
        this.menuCart = this.page.getByRole('link', { name: 'Cart' });
        this.menuLogOut = this.page.getByRole('link', { name: 'Log out' });
        this.logoCompany = this.page.getByRole('link', { name: 'PRODUCT STORE' })
        this.menuCategories = this.page.getByRole('link', { name: 'Categories' });
        this.menuPhones = this.page.getByRole('link', { name: 'Phones' });
        this.menuLaptops = this.page.getByRole('link', { name: 'Laptops' });
        this.menuMonitors = this.page.getByRole('link', { name: 'Monitors' });
        this.popUpContact = this.page.getByRole('heading', { name: 'New message' });
        this.popUpaAboutus = this.page.getByRole('heading', { name: 'About us', exact: true });
        this.btnClosePopUpContact = this.page.getByLabel('New message').getByText('Close');
        this.btnClosePopUpAboutUs = this.page.locator('#videoModal').getByText('Close', { exact: true });
    }
    
    async isReady() {
        await expect(this.menuHome).toBeVisible();
        await expect(this.menuContact).toBeVisible();
        await expect(this.menuAboutUs).toBeVisible();
        await expect(this.menuCart).toBeVisible();
        await expect(this.menuLogOut).toBeVisible();
        await expect(this.logoCompany).toBeVisible();
        await expect(this.menuCategories).toBeVisible();
        await expect(this.menuPhones).toBeVisible();
        await expect(this.menuLaptops).toBeVisible();
        await expect(this.menuMonitors).toBeVisible();
    }

    async clickMenuHome() {
        await this.menuHome.click();
        await expect(this.page).toHaveURL('https://demoblaze.com/index.html');
    }

    async clickMenuContact() {
        await this.menuContact.click();
        await expect(this.popUpContact).toBeVisible();
    }

    async closePopUpContact() {
        await this.btnClosePopUpContact.click();
        await expect(this.popUpContact).not.toBeVisible();
    }

    async clickMenuAboutUs() {
        await this.menuAboutUs.click();
        await expect(this.popUpaAboutus).toBeVisible();
    }

    async closePopUpAboutUs() {
        await this.btnClosePopUpAboutUs.click();
        await expect(this.popUpaAboutus).not.toBeVisible();
    }

    async clickMenuCart() {
        await this.menuCart.click();
        await expect(this.page).toHaveURL('https://demoblaze.com/cart.html');
    }
}

export default HomePage