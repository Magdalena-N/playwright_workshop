import { test } from "../fixtures/base";
import "dotenv/config";
import { data, storeUrl } from "../helpers/data";

test("test", async ({ mainPage, loginPage, registerPage, page }) => {
  await mainPage.openMainPage(storeUrl);
  await mainPage.clickLoginOrRegister();
  await loginPage.clickRegisterNewCustomer();
  await registerPage.fillNewAccount(data);
  await registerPage.selectNewsletterOption("No");
  await registerPage.acceptPrivacyPolicy(true);
  // await registerPage.clickContinue()
});
