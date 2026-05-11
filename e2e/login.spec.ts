import { test } from "@playwright/test";
import { RegistrationPage } from "../pages/login-page";

let registrationPage: RegistrationPage;

test.beforeEach(async ({ page }) => {
  registrationPage = new RegistrationPage(page);
});

test("Register a new user successfully", async ({ page }) => {
  await registrationPage.goToSignup();

  // Generate unique email for each test run
  const timestamp = Date.now();
  const testEmail = `testuser${timestamp}@example.com`;

  await registrationPage.fillSignupForm(
    `Test User ${timestamp}`, // name
    testEmail, // email
    "Test@123", // password
    "Test", // firstName
    "User", // lastName
    "123 Test Street", // address
    "California", // state
    "Los Angeles", // city
    "90001", // zipcode
    "9876543210", // mobile
  );

  await registrationPage.submitRegistration();
  await registrationPage.verifyAccountCreated();
  await registrationPage.continueAfterRegistration();
});
