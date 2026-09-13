# Password Generator App

## Overview
The Password Generator App is a simple web application that allows users to generate secure passwords based on their specified criteria. Users can choose the length of the password and select which character types to include, such as lowercase letters, uppercase letters, numbers, and symbols.

## Features
- Adjustable password length (1 to 20 characters)
- Options to include:
  - Lowercase letters (a-z)
  - Uppercase letters (A-Z)
  - Numbers (0-9)
  - Symbols (e.g., !@#$%^&*)
- User-friendly interface for easy interaction

## Project Structure
```
password-generator-app
├── src
│   ├── index.html        # Main HTML document
│   ├── css
│   │   └── styles.css    # Styles for the application
│   └── js
│       ├── main.js       # Main JavaScript file for user interactions
│       └── generator.js   # Password generation logic
├── test
│   └── generator.test.js  # Unit tests for the password generator
├── .gitignore             # Files and directories to ignore by Git
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd password-generator-app
   ```
3. Open the `index.html` file in your web browser to use the application.

## Usage
1. Set the desired password length using the slider.
2. Check the boxes for the character types you want to include in the password.
3. Click the "Generate Password" button to create a new password.
4. The generated password will be displayed on the screen.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is open-source and available under the MIT License.