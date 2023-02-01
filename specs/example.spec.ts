import { test, expect } from '@playwright/test';

test('ログインすると画面遷移する', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  const userNameInput = page.getByTestId("username").locator("input");
  const passwordInput = page.getByTestId("password").locator("input");
  const loginButton = page.locator("button",{hasText:"ログイン"});
  await userNameInput.fill("yamada");
  await passwordInput.fill("hoge");
  await loginButton.click();
  await expect(page.locator("ログイン")).toHaveCount(0);
});
