<h1 align="center">Gwen</h1>
<p align="center">
  <a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/vriad/gwen" alt="License"></a>
  <a href="https://www.npmjs.com/package/gwen" rel="nofollow"><img src="https://img.shields.io/npm/dw/gwen.svg" alt="npm"></a>
  <a href="https://www.npmjs.com/package/gwen" rel="nofollow"><img src="https://img.shields.io/github/stars/vriad/gwen" alt="stars"></a>
  <a href="./src/__tests__" rel="nofollow"><img src="./coverage.svg" alt="coverage"></a>
</p>
<p align="center">
if you're happy and you know it, star this repo ⭐
<br/>
a <a href="https://twitter.com/colinhacks" target="_blank">@colinhacks</a> production
</p>

<br/>

# Table of contents

- [Installation](#installation)

# Installation

To install the latest version:

```sh
npm install --save gwen
```

```sh
yarn add gwen
```

#### TypeScript versions

gwen@0.x is compatible with TypeScript 3.7+.

You must use `"strict": true` in your `tsconfig.json`! Otherwise you may get unexpected type errors.

# Usage

```ts
import { Gwen } from 'gwen';

const gwen = new Gwen();

function Component() {
  return <p className={gwen.fontSize(14).color('blue').class}>Hello there</p>;
}
```

# Changelog

| version  | release notes   |
| -------- | --------------- |
| gwen@1.0 | Initial release |
