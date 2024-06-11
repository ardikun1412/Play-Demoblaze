import { test as base } from '@playwright/test';
import { saveUsername } from '../utils/file.util';

function generateRandomUsername(): string {
  return `user${Math.floor(Math.random() * 10000)}`;
}

export const test = base.extend({
  randomUsername: async ({}, use) => {
    const username = generateRandomUsername();
    await use(username);
  },
  saveUsername: async ({}, use) => {
    await use(saveUsername);
  }
});

export { expect } from '@playwright/test';
