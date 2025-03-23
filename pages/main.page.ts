import { th } from "@faker-js/faker";
import { Page, expect, Locator } from "@playwright/test";

export class MainPage {
  loginInput: Locator;
  passwordInput: Locator;
  loginOrRegisterButton: Locator;
  titlePage: string;
  makeupCategoryTab: Locator;
  cheeksCategory: Locator;
  mainTextLocator: Locator;

  constructor(protected page: Page) {
    this.loginInput = this.page.locator("#loginFrm_loginname");
    this.passwordInput = this.page.locator("#pass");
    this.titlePage = "A place to practice your automation skills!";
    this.loginOrRegisterButton = this.page.getByRole("link", {
      name: "Login or register",
    });
    this.makeupCategoryTab = this.page
      .locator("#categorymenu")
      .getByRole("link", { name: "Makeup" });
    this.cheeksCategory = this.page
      .locator("#categorymenu")
      .getByRole("link", { name: "Cheeks" });

    this.mainTextLocator = this.page.locator(".maintext");
  }

  async fillInputPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async openMainPage(url: string): Promise<void> {
    await this.page.goto(url);
    await expect(this.page.title()).resolves.toEqual(this.titlePage);
  }

  async clickLoginOrRegister(): Promise<void> {
    await this.loginOrRegisterButton.click();
    await expect(this.page).toHaveTitle("Account Login");
  }

  async gotoMakeupCheeksCategory(): Promise<void> {
    await this.makeupCategoryTab.hover();
    await this.cheeksCategory.click();
    await expect(this.mainTextLocator).toContainText("Cheeks");
  }

  async verifyCorrectLogin(): Promise<void> {
    //
  }
}
