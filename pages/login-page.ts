import { Page, expect } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToSignup() {
    await this.page.goto("https://automationexercise.com/login");
    // Wait for the signup section to be visible
    await this.page.waitForSelector('input[data-qa="signup-name"]', {
      timeout: 10000,
    });
  }

  async fillSignupForm(
    name: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    state: string,
    city: string,
    zipcode: string,
    mobile: string,
  ) {
    // Fill signup form fields
    await this.page.fill('input[data-qa="signup-name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
    await this.page.click('button[data-qa="signup-button"]');

    // Wait for account information page
    await this.page.waitForSelector('input[data-qa="password"]', {
      timeout: 10000,
    });

    // Fill account details
    await this.page.fill('input[data-qa="password"]', password);

    // Select title (Mr radio button)
    await this.page.click('input[id="id_gender1"]');

    // Fill first and last name
    await this.page.fill('input[data-qa="first_name"]', firstName);
    await this.page.fill('input[data-qa="last_name"]', lastName);

    // Fill address
    await this.page.fill('input[data-qa="address"]', address);

    // Select country
    await this.page.selectOption('select[data-qa="country"]', "United States");

    // Fill state and city
    await this.page.fill('input[data-qa="state"]', state);
    await this.page.fill('input[data-qa="city"]', city);

    // Fill zipcode
    await this.page.fill('input[data-qa="zipcode"]', zipcode);

    // Fill mobile number
    await this.page.fill('input[data-qa="mobile_number"]', mobile);
  }

  async submitRegistration() {
    await this.page.click('button[data-qa="create-account"]');
  }

  async verifyAccountCreated() {
    // Wait for confirmation page
    await this.page.waitForSelector("h2", { timeout: 10000 });
    const confirmationText = await this.page.textContent("h2");
    expect(confirmationText).toContain("Account Created");
  }

  async continueAfterRegistration() {
    await this.page.click('a[data-qa="continue-button"]');
  }
}
