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
