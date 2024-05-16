import type { Page, Locator } from "@playwright/test";

export default class MainPage {
  private readonly newOrderButton: Locator;
  private readonly newPositionSubmit: Locator;
  private readonly modalOkButton: Locator;
  private readonly positionCounter: Locator;

  constructor(public readonly page: Page) {
    this.newOrderButton = this.page
      .locator('[data-test-id="new-order-button"] button')
      .first();
    this.newPositionSubmit = this.page
      .locator('[data-test-id="new-position-submit-control"] button')
      .first();

    this.modalOkButton = this.page.locator('[data-test-id="ok-button"]');
    this.positionCounter = this.page.locator(
      '[data-test-id="positions-tab"] [data-test-id="counter"]'
    );
  }

  async createNewPositionFlow() {
    await this.newOrderButton.click();
    await this.newPositionSubmit.click();
    await this.modalOkButton.click();
  }

  async getPositionCounter() {
    return this.positionCounter;
  }
}
