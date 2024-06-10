import {test, expect} from '@playwright/test';
import { describe } from 'node:test';

describe('Login', () => {
    test('should be able to login', async ({page}) => {
        await page.goto('https://demoblaze.com/index.html');
        await page.getByRole('link', { name: 'Log in' }).click();
        


        
    });

});