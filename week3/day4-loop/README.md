# JavaScript Loops

Loops are used to repeat code without writing the same line over and over again.  
They are one of the core building blocks of programming and appear in almost every real project.

---

## 1. For Loop

A **for loop** is used when you know how many times you want something to repeat.  
It has three parts:
1. **Initialization:** sets where the loop starts.
2. **Condition:** checks whether the loop should keep running.
3. **Increment or Decrement:** moves the counter forward or backward each time.

### Example
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**Explanation**
- `let i = 0` → the loop starts at 0  
- `i < 5` → runs as long as i is less than 5  
- `i++` → adds 1 after each run  
- When `i` becomes 5, the condition is false and the loop stops  

**Output**
```
0
1
2
3
4
```

**Notes**
- This is perfect for counting, repeating something a fixed number of times, or working with arrays using an index.
- Changing `i++` to `i--` makes the loop go backward.

---

## 2. For...of Loop

A **for...of loop** is used when you want to go through every value in something like an array or string.  
It gives you each item directly, so you do not need to use `[i]`.

### Example
```js
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

**Explanation**
- `fruit` is the variable that holds each item.  
- `of fruits` means “take one fruit at a time from the list.”  
- You can name `fruit` anything you like.

**Output**
```
apple
banana
cherry
```

**Notes**
- Use this when you only care about each value, not the position.  
- Works on arrays and strings.  
- It is simpler than a traditional for loop for most collection-based tasks.

---

## 3. While Loop

A **while loop** keeps running *as long as* a condition is true.  
You use it when you do not know how many times the loop should repeat.

### Example
```js
let count = 1;

while (count <= 3) {
  console.log(count);
  count++;
}
```

**Explanation**
- Start with `count = 1`.  
- Check the condition `count <= 3`.  
- If true, run the code inside `{ }`.  
- Increase `count` by 1, then check again.  
- When `count` becomes 4, the condition is false, and the loop stops.

**Output**
```
1
2
3
```

**Notes**
- The condition is checked before each repetition.  
- If you forget to change the variable (like `count++`), the loop will never stop (infinite loop).  
- Ideal for cases like “keep asking the user for input until they type quit.”

---

## 4. Comparison Table

| Type | When to Use | Key Feature | Example |
|------|--------------|--------------|----------|
| for | You know exactly how many times to loop | Uses a counter (i) | Counting numbers or accessing array indexes |
| for...of | You want each value from a list or string | No counter needed | Printing items from an array or letters in a string |
| while | You keep looping until something changes | Runs while condition is true | Waiting for input or a specific event |

---

## 5. Common Patterns

**Summing numbers with for**
```js
const numbers = [3, 6, 9];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // 18
```
**Notes**
- The variable `sum` keeps a running total.
- Each loop adds the next number.
- When the loop finishes, `sum` holds the total.

---

**Summing numbers with for...of**
```js
let total = 0;

for (const n of numbers) {
  total += n;
}

console.log(total); // 18
```
**Notes**
- `n` represents each number in the array.
- The logic is the same as before, but the syntax is simpler.

---

**Summing numbers with while**
```js
let index = 0;
let totalSum = 0;

while (index < numbers.length) {
  totalSum += numbers[index];
  index++;
}

console.log(totalSum); // 18
```
**Notes**
- `index` manually controls which array element you access.
- You decide when the loop stops by updating the condition.

---

## 6. Key Points

- Curly braces `{ }` define the code that repeats each loop.
- Loops stop running when their condition is false.
- `for` → controlled counting.  
- `for...of` → simple item iteration.  
- `while` → conditional repetition.

Practice writing all three until the pattern becomes automatic.
