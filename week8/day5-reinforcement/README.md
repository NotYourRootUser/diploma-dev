# ESM Module Mental Model

## 1. Create functions in module.js
Each function focuses on a single job.

```js
const divNum = (num1, num2) => num1 / num2;
const squareNum = num => num * num;
const isEven = num => num % 2 === 0;
```

## 2. Export the functions
Use a named export object.

```js
export {
  divNum,
  squareNum,
  isEven,
};
```

This creates an object behind the scenes:

```js
{
  divNum: [Function],
  squareNum: [Function],
  isEven: [Function],
}
```

## 3. Import functions in index.js
Use named imports.

```js
import { divNum, squareNum, isEven } from "./module.js";
```

## 4. Use the functions
```js
console.log(divNum(100, 10));    // 10
console.log(squareNum(20));      // 400
console.log(isEven(5));          // false
```

## 5. Why "type": "module" is required
Node defaults to CommonJS.
Changing the package.json tells Node to interpret imports/exports using ESM instead.

```json
{
  "type": "module"
}
```

## 6. Key differences to remember
- ESM uses `import/export`.
- CommonJS uses `require/module.exports`.
- ESM gives better syntax alignment with React and modern JS.
