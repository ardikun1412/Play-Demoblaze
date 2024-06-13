# Playwright Exploration with Demoblaze

Welcome to the repository where I explore Playwright by using the Demoblaze website as the testing object. This project showcases various features and best practices in end-to-end testing with Playwright.

## 🚀 Features

- **Page Object Model (POM)**: Organized structure for managing web elements and interactions.
- **Merge Fixtures**: Reusable setup and teardown code for tests.
- **Generate Random Username**: Dynamic generation of unique usernames for testing.
- **Save Signup User Data**: Persist user data for test scenarios.
- **Multiple Environments**: Configurations for running tests across different environments.

## 🗂 Project Structure

- **`fixtures/`**: Contains all fixtures.
- **`pages/`**: Contains all Page Object Models (POM).
- **`tests/`**: Contains all test scenarios.
- **`util/`**: Contains utility functions, such as saving usernames.

## ⚙️ Setup

To get started with the project, follow these steps:

1. **Clone or download the project**:
    ```sh
    git clone https://github.com/your-username/playwright-demoblaze.git
    ```

2. **Extract and open the project in VS Code**:
    ```sh
    cd playwright-demoblaze
    code .
    ```

3. **Install the dependencies**:
    ```sh
    npm install
    ```

4. **Install the browsers for Playwright**:
    ```sh
    npx playwright install
    ```

5. **Add a folder named `data` in the project directory**:
    ```sh
    mkdir data
    ```

6. **Run the tests**:
    ```sh
    npm run test:dev
    ```

   You can also check the `package.json` file for other available scripts.

## 📁 Detailed Project Structure

```
playwright-demoblaze/
├── fixtures/
│   └── ...          # All fixtures
├── pages/
│   └── ...          # All Page Object Models
├── tests/
│   └── ...          # All test scenarios
├── util/
│   └── saveUsername.js  # Utility function to save usernames
├── data/            # Directory to store user data
├── package.json     # Project dependencies and scripts
├── playwright.config.js  # Playwright configuration
└── README.md        # Project documentation
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Feel free to explore, experiment, and expand upon the tests in this repository to suit your own needs and to further understand the capabilities of Playwright. Happy testing!
