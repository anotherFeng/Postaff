module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "parserOptions": {
      "ecmaVersion": 6,
      "ecmaFeatures": {
          "jsx": true
      },
    "sourceType": "module"
  },
  "rules": {
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": "warn",
    "constructor-super": "warn",
    "valid-typeof": "warn"
  }
};
