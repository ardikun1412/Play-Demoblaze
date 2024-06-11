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
}

export default HomePage