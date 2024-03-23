# Acme Shopping Cart

Web application to demonstrate React.js with TypeScript. Includes a display of sample products and functionality of a shopping cart whereby you can add, remove, and change quantity of the sample products.

Deployed Site: [ConnorXCX.github.io/AcmeShoppingCart](https://connorxcx.github.io/AcmeShoppingCart/)

References:

1. [TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours](https://youtu.be/gieEQFIfgYc?si=YZkxvwBCo0H7lH1k)

Commands to Run Locally:

1. `npm install`
2. `npm run dev`

How to Configure GitHub Pages Dependency:

1. Add `base` parameter to `vite.config.js`
2. Add `homepage` parameter to `package.json`
3. Add `predeploy` parameter with `npm run build` under `scripts` in package.json
4. Add `deploy` parameter with `gh-pages -d dist` under `scripts` in package.json
5. `npm install gh-pages --save-dev`

Command to Deploy to GitHub Pages:

1. `npm run deploy`
