# Automation Exercise Tests

Playwright tests for automating user registration on [automationexercise.com](https://automationexercise.com/).

## Project Structure

```
├── e2e/
│   └── login.spec.ts           # Registration test cases
├── pages/
│   └── login-page.ts           # Page Object Model for registration
├── playwright.config.ts        # Playwright configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # This file
```

## Prerequisites

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)

## Clone the Repository

```bash
git clone https://github.com/your-username/first-playwright.git
cd first-playwright
```

## Install Dependencies

```bash
npm install
```

## Install Browsers

Playwright requires browser binaries to be installed:

```bash
npx playwright install
```

This command downloads Chromium, Firefox, and WebKit browsers needed for testing.

## Run Tests

### Run all tests (headless mode)

```bash
npm test
```

### Run tests with visible browser

```bash
npm run test:headed
```

### Run tests in debug mode

```bash
npm run test:debug
```

### Run tests in UI mode (interactive)

```bash
npm run test:ui
```

## What the Tests Do

The test suite automates the complete user registration process on automationexercise.com:

1. **Navigate to signup page** - Opens the login page
2. **Fill registration form** - Enters user details (name, email)
3. **Create account** - Enters password and personal information
4. **Verify success** - Confirms account creation message
5. **Continue** - Completes the registration flow

Each test run generates a unique email address to ensure successful registration.

## Test Reports

After running tests, an HTML report is generated. Open it with:

```bash
npx playwright show-report
```

## Configuration

Test configuration can be modified in `playwright.config.ts`:

- Test timeout: 30 seconds
- Screenshot capture: On
- Video recording: On
- Trace: On first retry

## Troubleshooting

### Tests fail with "Executable doesn't exist"

Run: `npx playwright install`

### Tests timeout

Increase the timeout value in `playwright.config.ts`

### Browser crashes

Ensure you have sufficient disk space and try reinstalling browsers:

```bash
npx playwright install --with-deps
```

## Next Steps

- Modify `e2e/login.spec.ts` to add more test scenarios
- Update selectors in `pages/login-page.ts` if website HTML changes
- Add new page objects for other features (login, checkout, etc.)

## Support

For issues or questions, please check:

- [Playwright Documentation](https://playwright.dev/)
- [Automation Exercise Test Cases](https://automationexercise.com/test_cases)
