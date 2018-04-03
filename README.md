# eslint-config-kevinrambaud

[![Travis](https://img.shields.io/travis/kevinrambaud/eslint-config-kevinrambaud.svg)](https://travis-ci.org/kevinrambaud/eslint-config-kevinrambaud)
[![npm](https://img.shields.io/npm/v/eslint-config-kevinrambaud.svg)](https://www.npmjs.com/package/eslint-config-kevinrambaud)
[![npm](https://img.shields.io/npm/dt/eslint-config-kevinrambaud.svg)](https://www.npmjs.com/package/eslint-config-kevinrambaud)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/kevinrambaud/eslint-config-kevinrambaud/master/LICENSE)

Personal ESLint configuration that includes airbnb-base, prettier and some personal rules.

## Installation

```bash
npm i --save-dev eslint-config-kevinrambaud
```

## Usage

Create an eslint configuration file at the root of your project. This file can either be `.eslintrc`, `.eslintrc.json`, `.eslintrc.js` or `.eslintrc.yml`.

JSON config format example

```json
{
  "extends": "kevinrambaud"
}
```

Javascript config format example:

```javascript
module.exports = {
  extends: "kevinrambaud"
};
```

YAML config format example:

```yaml
extends: kevinrambaud
```

Config setup directly in `package.json`

```json
{
  "name": "your-new-package",
  "version": "1.0.0",
  "private": true,
  "devDependencies": {
    "eslint-config-kevinrambaud": "^1.0.0"
  },
  "eslintConfig": {
    "extends": "kevinrambaud"
  }
}
```

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request

## Credits

* [Airbnb: JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Prettier : The opinionated code formatter.](https://github.com/prettier/prettier)

## License

MIT
