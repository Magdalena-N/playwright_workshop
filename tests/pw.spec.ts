import { test } from "../fixtures/base";
import "dotenv/config";
import { data, storeUrl } from "../helpers/data";

test.skip("test", async ({ mainPage, loginPage, registerPage, page }) => {
  await mainPage.openMainPage(storeUrl);
  await mainPage.clickLoginOrRegister();
  await loginPage.clickRegisterNewCustomer();
  await registerPage.fillNewAccount(data);
  await registerPage.selectNewsletterOption("No");
  await registerPage.acceptPrivacyPolicy(true);
  await registerPage.clickContinue();
});

test("login_buy", async ({ mainPage, loginPage, registerPage, page }) => {
  await test.step("Login", async () => {
    await mainPage.openMainPage(storeUrl);
    await mainPage.clickLoginOrRegister();
    await loginPage.fillLoginInputs(
      process.env.USER as string,
      process.env.PASSWORD as string
    );
    await loginPage.clickLoginButton();
    await loginPage.verifyCorrectLogin();
  });

  await test.step("Add to cart", async () => {
    await mainPage.openMainPage(storeUrl);
    await mainPage.gotoMakeupCheeksCategory();
  });
});


