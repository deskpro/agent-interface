const path = require('path');

module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  "env": {
    "jest": true,
    "browser": true
  },
  "globals": {
    "page": true,
    "browser": true,
    "context": true,
    "jestPuppeteer": true,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      'eslint-import-resolver-lerna': {
        packages: path.resolve(__dirname, 'packages')
      }

    },
    "import/ignore": ["\\.css$"]
  },
  "plugins": ["react-hooks"],
  "rules": {
    "no-use-before-define": "off",
    "no-restricted-syntax": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/no-unresolved": [
      "error",
      {
        "ignore": ["\\.css$"]
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        "assert": "either"
      }
    ]
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "parser": "typescript-eslint-parser",
      "plugins": ["typescript"],
      "rules": {
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-restricted-globals": "off",
        "import-name": [
          true,
          {
            "react": "React"
          }
        ]
      }
    }
  ]
}
