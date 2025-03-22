import { Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  loginInput: Locator;

  constructor(protected page: Page) {
    this.loginInput = this.page.locator("#loginFrm_loginname");
  }

  async fillLoginInputs(userName: string, password: string): Promise<void> {}
  //
  async clickLoginButton(): Promise<void> {
    //
  }

  async verifyCorrectLogin(): Promise<void> {
    //
  }

  async clickRegisterNewCustomer(): Promise<void> {
    await this.page.getByRole("link", { name: "Login or register" }).click();
    await this.page.getByRole("button", { name: " Continue" }).click();

    await expect(this.page).toHaveTitle("Create Account")
  }
}
