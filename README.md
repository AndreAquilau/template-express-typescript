### Template basic typescript with express

```CMD
npm init -y

npm i -S express

npm i -D typescript ts-node-dev @types/express

npx tsc init
```

#### Babel
Babel is a JavaScript compiler
```CMD
npm install @babel/cli @babel/core @babel/preset-typescript --save-dev
```
[Typescript Docs - Integrating with Build Tools](https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html)

#### Eslint
```CMD
npm i -D eslint

npx eslint --init

...
```
#### Scripts Package
```JSON
  "scripts": {
    "start": "node ./dist/index.js",
    "build": "npx babel src --extensions \".ts,.js\" --out-dir dist --ignore \"src/**/*.spec.js\",\"src/**/*.test.js\"",
    "dev": "ts-node-dev --respawn --transpile-only --watch --ignore-watch node_modules --notify ./src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
