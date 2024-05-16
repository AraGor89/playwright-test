import { test, expect } from "../fixtures";
import MainPage from "../pages/MainPage";

test("Create 1 position and check that the number of open positions in 'TradeWatch' is 1", async ({
  page,
  baseURL,
  loginPage,
}) => {
  await loginPage.loginFlow(baseURL!);
  const main = new MainPage(page);
  await main.createNewPositionFlow();
  const positionCounter = await main.getPositionCounter();
  await expect(positionCounter).toHaveText("1");
});

// import { test, expect } from "@playwright/test";

// test("test", async ({ page, baseURL }) => {
//   await page.goto(baseURL!);
//   await page.locator('[data-test-id="log-in"]').click();
//   await page.locator('[data-test-id="signin-tab"]').click();
//   await page
//     .locator('[data-test-id="email"] input')
//     .first()
//     .fill("userForTest@spotware.com");
//   await page
//     .locator('[data-test-id="password"] input')
//     .first()
//     .fill("userForTest@spotware.com");
//   await page.locator('[data-test-id="submit"]').click();
//   ////////////////////////////////////////////
//   await page
//     .locator('[data-test-id="new-order-button"] button')
//     .first()
//     .click();
//   await page
//     .locator('[data-test-id="new-position-submit-control"] button')
//     .first()
//     .click();
//   await page.locator('[data-test-id="ok-button"]').click();

//   await expect(
//     page.locator('[data-test-id="positions-tab"] [data-test-id="counter"]')
//   ).toHaveText("1");
// });
