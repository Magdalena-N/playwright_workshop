import { th } from "@faker-js/faker";
import { Page, expect, Locator } from "@playwright/test";

export class RegisterPage {
  firstNameLocator: Locator;
  lastNameLocator: Locator;
  emailLocator: Locator;
  telephoneLocator: Locator;
  addressLocator: Locator;
  cityLocator: Locator;
  zoneLocator: Locator;
  postcodeLocator: Locator;
  countryLocator: Locator;
  loginLocator: Locator;
  passwordLocator: Locator;
  confirmButtonLocator: Locator;
  privacyLocator: Locator;
  continueButtonLocator: Locator;

  constructor(protected page: Page) {
    this.firstNameLocator = this.page.locator("#AccountFrm_firstname");
    this.lastNameLocator = this.page.locator("#AccountFrm_lastname");
    this.emailLocator = this.page.locator("#AccountFrm_email");
    this.telephoneLocator = this.page.locator("#AccountFrm_telephone");
    this.addressLocator = this.page.locator("#AccountFrm_address_1");
    this.cityLocator = this.page.locator("#AccountFrm_city");
    this.zoneLocator = this.page.locator("#AccountFrm_zone_id");
    this.postcodeLocator = this.page.locator("#AccountFrm_postcode");
    this.countryLocator = this.page.locator("#AccountFrm_country_id");
    this.loginLocator = this.page.locator("#AccountFrm_loginname");
    this.passwordLocator = this.page.locator("#AccountFrm_password");
    this.confirmButtonLocator = this.page.locator("#AccountFrm_confirm");

    this.privacyLocator = this.page.getByRole("checkbox", {
      name: "I have read and agree to the",
    });

    this.continueButtonLocator = this.page.getByRole("button", {
      name: " Continue",
    });
  }
  //
  async fillNewAccount(userData: {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    address: string;
    city: string;
    zone: string;
    postcode: string;
    country: string;
    login: string;
    password: string;
  }): Promise<void> {
    await this.firstNameLocator.fill(userData.firstName);
    await this.lastNameLocator.fill(userData.lastName);
    await this.emailLocator.fill(userData.email);
    await this.telephoneLocator.fill(userData.telephone);
    await this.addressLocator.fill(userData.address);
    await this.cityLocator.fill(userData.city);
    await this.countryLocator.selectOption({ label: userData.country });
    await this.zoneLocator.selectOption({ label: userData.zone });
    await this.postcodeLocator.fill(userData.postcode);
    await this.loginLocator.fill(userData.login);
    await this.passwordLocator.fill(userData.password);
    await this.confirmButtonLocator.fill(userData.password);
  }

  async selectNewsletterOption(option: string) {
    await this.page.getByRole("radio", { name: "No" }).check();
  }

  async acceptPrivacyPolicy(accept: boolean) {
    if (accept) {
      await this.privacyLocator.check();
    }
  }
  async clickContinue() {
    await this.continueButtonLocator.click();
  }

  async verifyCorrectLogin(): Promise<void> {
    //
  }
}
