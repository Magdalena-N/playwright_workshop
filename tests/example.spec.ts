import { test, expect } from "@playwright/test";
import "dotenv/config";
import { LoginPage } from "../pages/login.page";
import { data, herokuAppUrl, storeUrl } from "../helpers/data";

test.only("pom", async ({ page }) => {
  const loginPage = new LoginPage(page);
  // await loginPage.goto()
  // await loginPage.getStarted()
  // await loginPage.pageObjectModel()
});

test("basic test checkboxes", async ({ page }) => {
  await test.step("Step 1", async () => {
    await page.goto(herokuAppUrl + "/checkboxes");
    const classExample = page.locator(".example");
    await expect(classExample).toBeVisible();
    await expect(classExample).toContainText("Checkboxes");
  });

  await test.step("Assert first checkbox and check it", async () => {
    const checkbox1 = page.getByRole("checkbox").first();
    await expect(checkbox1).toBeVisible();
    await expect(checkbox1).not.toBeChecked();
  });
  await test.step("Step 3", async () => {
    const checkbox2 = page.getByRole("checkbox").last();
    await expect(checkbox2).toBeVisible();
    await expect(checkbox2).toBeChecked();
  });
});

test("Basic test for fill inputs", async ({ page }) => {
  await test.step("open login page", async () => {
    await page.goto(herokuAppUrl + "/login");
    const classExample = page.locator(".example");
    await expect(classExample).toBeVisible();
    await expect(classExample).toContainText(
      "This is where you can log into the secure area. Enter"
    );
  });
  await test.step("fill login inputs", async () => {
    const usernameInput = page.locator("#username");
    await usernameInput.fill(process.env.USER as string);
    await expect(usernameInput).toHaveValue(process.env.USER as string);

    const passwordInput = page.locator("#password");
    await passwordInput.fill(process.env.PASSWORD as string);
    await expect(passwordInput).toHaveValue(process.env.PASSWORD as string);

    const loginButton = page.locator(".fa-sign-in");
    await loginButton.click();
    await page.waitForTimeout(5000);
  });
});

test("Basic test for dropdown list", async ({ page }) => {
  await page.goto("/dropdown");
  const dropdown = page.locator("#dropdown");
  await dropdown.selectOption("1");
  await expect(dropdown).toContainText("Option 1");
  await page.waitForTimeout(5000);
});
