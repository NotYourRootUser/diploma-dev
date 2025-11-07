### JavaScript Array Methods & String Conversion Notes

1. **String.split()**
   - Splits a string into an array based on a given pattern.  
     Example: `const result = "vanilla chocolate matcha".split(" "); // ["vanilla","chocolate","matcha"]`
   - Optional second argument limits the number of elements returned.
   - Analogy: Like slicing a sentence into words wherever there’s a space.

2. **Array.join()**
   - Joins array elements into a single string separated by a chosen character.  
     Example: `["vanilla","chocolate","matcha"].join(" "); // "vanilla chocolate matcha"`
   - Reverse of `split()` — glues an array back into a string.

3. **Array.slice()**
   - Returns a copy of a portion of an array (from start index to end index, end not included).  
     Example: `["A","B","C","D","E","F"].slice(1,3); // ['B','C']`
   - Does **not** modify the original array.

4. **Array.splice()**
   - Adds, removes, or replaces items **in place**, modifying the original array.  
     Example:  
     `const arr = ["A","B","C","D","E","F"]; arr.splice(1,1,"pen"); // ['A','pen','C','D','E','F']`
   - Syntax: `splice(startIndex, deleteCount, item1, item2, ...)`

5. **Array.forEach()**
   - Runs a provided function once per array element. Returns `undefined`.  
     Example:  
     `["vanilla","chocolate","blueberry"].forEach((flavour,i)=>console.log(i+1,flavour));`
   - Useful for side effects (logging, DOM updates).  
   - Anonymous function = unnamed inline function passed directly.

   Exercise:  
   Double each element and push into a new array:  
const nums=[3,8,12,17,22];
const doubled=[];
nums.forEach(n=>doubled.push(n*2));
console.log(doubled); // [6,16,24,34,44]

6. **Array.map()**
- Similar to `forEach()`, but returns a **new array** instead of modifying existing data.  
  Example:  
  `["vanilla","chocolate","blueberry"].map((flavour,i)=>"Flavour "+i+": "+flavour);`
  → `['Flavour 0: vanilla','Flavour 1: chocolate','Flavour 2: blueberry']`

- Difference summary:  
  - `forEach()` → executes a function, **no return**  
  - `map()` → creates **new transformed array**

Exercise:  
const arr=[1,2,3,4,5];
const doubled=arr.map(n=>n*2);
console.log(doubled); // [2,4,6,8,10]

**Key Insight:**  
- `.forEach()` → good for doing.  
- `.map()` → good for transforming.  
Use `.forEach()` when you just need an action, `.map()` when you want new data.
