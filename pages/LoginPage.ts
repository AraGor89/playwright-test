import type { Page, Locator } from "@playwright/test";

export class LoginPage {
  private readonly loginButton: Locator;
  private readonly signInTab: Locator;
  private readonly emailInput: Locator;
  private readonly passInput: Locator;
  private readonly submitButton: Locator;

  constructor(public readonly page: Page) {
    this.loginButton = this.page.locator('[data-test-id="log-in"]');
    this.signInTab = this.page.locator('[data-test-id="signin-tab"]');
    this.emailInput = this.page.locator('[data-test-id="email"] input').first();
    this.passInput = this.page
      .locator('[data-test-id="password"] input')
      .first();
    this.submitButton = this.page.locator('[data-test-id="submit"]');
  }

  async loginFlow(url: string) {
    await this.page.goto(url);
    await this.loginButton.click();
    await this.signInTab.click();
    await this.emailInput.fill(process.env.USER_EMAIL!);
    await this.passInput.fill(process.env.USER_PASSWORD!);
    await this.submitButton.click();
  }
}
