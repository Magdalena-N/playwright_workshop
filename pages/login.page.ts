import { Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  loginInput: Locator;
  passwordInput: Locator;
  continueButton: Locator;
  userLogged: Locator;

  constructor(protected page: Page) {
    this.loginInput = this.page.locator("#loginFrm_loginname");
    this.passwordInput = this.page.locator('#loginFrm_password');
    this.continueButton = this.page.getByRole('button', { name: ' Login' })
    this.userLogged = this.page.locator('.maintext');
  }

  async fillLoginInputs(userName: string, password: string): Promise<void> {
    await this.loginInput.fill(userName);
    await this.passwordInput.fill(password);
  }
  
  async clickLoginButton(): Promise<void> {
    await this.continueButton.click();
  }

  async verifyCorrectLogin(): Promise<void> {
    await expect(this.userLogged).toContainText(" My Account")
  }

  async clickRegisterNewCustomer(): Promise<void> {
    await this.page.getByRole("link", { name: "Login or register" }).click();
    await this.page.getByRole("button", { name: " Continue" }).click();

    await expect(this.page).toHaveTitle("Create Account")
  }
}
