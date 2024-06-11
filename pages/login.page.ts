import { Locator, type Page } from "@playwright/test";

export class LoginPage {
    private readonly fieldUsername : Locator;
    private readonly fieldPassword : Locator;
    private readonly btnLogin : Locator;
    private readonly menuLogin : Locator;

    constructor(public readonly page: Page) {
        this.menuLogin = this.page.getByRole('link', { name: 'Log in' });
        this.fieldUsername = this.page.locator('#loginusername');
        this.fieldPassword = this.page.locator('#loginpassword');
        this.btnLogin = this.page.getByRole('button', { name: 'Log in' });
        
    }
    
    async goto() {
        await this.page.goto('/index.html');
    }

    async login(username: string, password: string) {
        await this.menuLogin.click();
        await this.fieldUsername.fill(username);
        await this.fieldPassword.fill(password);
        await this.btnLogin.click();
    }
}

export default LoginPage