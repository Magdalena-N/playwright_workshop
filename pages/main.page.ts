import { th } from "@faker-js/faker";
import { Page, expect, Locator } from "@playwright/test";

export class MainPage {
  loginInput: Locator;
  passwordInput: Locator;
  titlePage: string;

  constructor(protected page: Page) {
    this.loginInput = this.page.locator("#loginFrm_loginname");
    this.passwordInput = this.page.locator("#pass");
    this.titlePage = "A place to practice your automation skills!";
  }

  async fillInputPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async openMainPage(url: string): Promise<void> {
    await this.page.goto(url);
    await expect(this.page.title()).resolves.toEqual(this.titlePage);
  }

  async clickLoginOrRegister(): Promise<void> {
    await this.page.getByRole('link', { name: 'Login or register' }).click();
    await expect(this.page).toHaveTitle("Account Login")
  }

  async verifyCorrectLogin(): Promise<void> {
    //
  }
}
