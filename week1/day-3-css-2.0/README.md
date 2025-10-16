# Class Recap — CSS Selectors & Specificity (Oct 15)
_.CSS Selectors and Specificity order._
### 1. Class vs ID Selectors
- A **class** (`.classname`) is used to **group** multiple elements together so you can style them all at once.  
- An **ID** (`#idname`) is used for **unique** elements that only appear once on a page.  
- You can have many elements with the same class, but each ID must be unique.  
- **ID has higher specificity** than class, so if both target the same element, the ID style will win.

Example:
```html
<p class="note" id="main-note">Example text</p>
```
```css
.note { color: blue; }
#main-note { color: red; }  /* red wins */
```

---

### 2. Grouping Selectors
- You can target **multiple selectors** with the same rule by separating them with commas.  
  ```css
  h1, h2, p {
    color: white;
  }
  ```
- That line means “apply white color to all `<h1>`, `<h2>`, and `<p>` tags.”

---

### 3. Descendant vs Child Selectors
- **Descendant selector** (space): targets *any element* inside another, no matter how deep.  
  ```css
  div p { color: green; }  /* all <p> inside a <div> */
  ```
- **Child selector** (`>`): targets only *direct children* of the parent.  
  ```css
  div > p { color: blue; }  /* only first-level <p> */
  ```
- Example structure:
  ```html
  <div>
    <section><p>descendant</p></section>
    <p>child</p>
  </div>
  ```
  → `div p` affects both paragraphs, `div > p` affects only the second one.

---

### 4. Pseudo-Classes
- Pseudo-classes add styles when an element is in a certain **state**.  
  Example: `:hover`, `:active`, `:focus`
  ```css
  button:hover {
    background-color: orange;
  }
  ```
- You can apply them to any selector (class, ID, tag).

---

### 5. Specificity Hierarchy
Inline CSS  >  ID  >  Class / Attribute / Pseudo-class  >  Element  
- Inline styles always win unless you use `!important` (not recommended in real projects).

---

### 6. HTML Structure Reminders
- `<div>` creates a **box/container** to group content.  
- `<p>` defines a paragraph of text.  
- `<ul>` and `<ol>` are list containers; `<li>` are list items.  
- You can nest elements, but be aware of **hierarchy** when using selectors (child vs descendant).

---

### 7. Quick Mental Model
Think of HTML as the **skeleton** and CSS as the **clothing**:
- Classes = uniforms for teams of elements.  
- IDs = name tags for one person.  
- Selectors = the rules that decide who wears what.  
