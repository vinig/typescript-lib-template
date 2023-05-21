# Template to create shared dependency package in Typescript

This template can be used for creating shared library or application in typescript. The scripts will help in bundling together the code that can be included as a dependency is a different project using `npm`.

The library needs to be published to a private/public npm registry using `npm publish` and can then be installed from this registry using `npm install package@version`.