import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

type Fixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page, baseURL }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginFlow(baseURL!);

    await use(loginPage);
  },
});
export { expect } from "@playwright/test";
