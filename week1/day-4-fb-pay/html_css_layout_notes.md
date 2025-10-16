# HTML and CSS Layout Fundamentals

## 1. Linking HTML and CSS
To connect your HTML file to a CSS file, use the <link> element inside the <head> tag:

```html
<link rel="stylesheet" href="fbpay.css">
```

This tells the browser to load the external stylesheet and apply the styles.

---

## 2. Font-Family Rules
Define the page font inside the body selector:

```css
body {
  font-family: "Tahoma", "Verdana", "Segoe UI", sans-serif;
}
```

- Quotes are only needed if the font name contains spaces.
- Multiple font names create fallback options if the first font is unavailable.
- The last value (like sans-serif) is a generic fallback type.

---

## 3. Layout History Overview
**Early layouts:**
- HTML Tables: used in the late 1990s to early 2000s.
- CSS Floats: used from mid-2000s to early 2010s.

**Modern layouts:**
- Flexbox (introduced 2009, supported 2014) — one-dimensional, for rows or columns.
- Grid (introduced 2011, supported 2017) — two-dimensional, for rows and columns together.

---

## 4. Semantic HTML
Semantic elements describe the meaning of the content to both browsers and developers.

**Examples:**
```html
<header>Header content</header>
<nav>Navigation links</nav>
<main>Main page content</main>
<section>Section content</section>
<article>Standalone article</article>
<aside>Sidebar or extra info</aside>
<footer>Footer or copyright</footer>
```

**Non-semantic elements:** <div>, <span> (generic containers).

Semantic HTML improves accessibility, SEO, and code readability.

---

## 5. Flexbox Basics
Flexbox arranges elements in one direction—either a row or column.

```css
.container {
  display: flex;
  flex-direction: row; /* row or column */
  justify-content: center; /* main axis alignment */
  align-items: center; /* cross axis alignment */
  gap: 10px;
}
```

### Key Flexbox Terms
- **Flex Container:** the parent with display: flex.
- **Flex Items:** the children inside the container.

### Flex Direction
- `row` = items go left to right.
- `column` = items go top to bottom.

### Alignment
- `justify-content` controls alignment along the **main axis**.
- `align-items` controls alignment along the **cross axis**.

### Common justify-content values
| Value | Description |
|--------|-------------|
| flex-start | Items align at the start |
| flex-end | Items align at the end |
| center | Items center along main axis |
| space-between | Equal space between items |
| space-around | Equal space around items |
| space-evenly | Equal space everywhere |

### Common align-items values
| Value | Description |
|--------|-------------|
| flex-start | Aligns items to top or left |
| flex-end | Aligns items to bottom or right |
| center | Centers items |
| stretch | Items fill container height |
| baseline | Aligns based on text baselines |

---

## 6. Main Axis vs Cross Axis
The **main axis** follows the `flex-direction`:
- In `row`, main axis = horizontal.
- In `column`, main axis = vertical.

The **cross axis** is perpendicular to the main axis.
- In `row`, cross axis = vertical.
- In `column`, cross axis = horizontal.

```css
justify-content: center; /* aligns along main axis */
align-items: center; /* aligns along cross axis */
```

---

## 7. The Four Flexbox Powers
1. **Alignment** — position items with justify-content and align-items.
2. **Direction** — control the axis with flex-direction.
3. **Order** — rearrange without changing HTML:
   ```css
   .item1 { order: 2; }
   .item2 { order: 1; }
   ```
4. **Size** — control how items grow and shrink:
   ```css
   .item { flex: 1 1 200px; }
   ```

Mnemonic: **ADOS = Alignment, Direction, Order, Size.**

---

## 8. CSS Grid Basics
Grid is two-dimensional (rows and columns).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 10px;
}
.item:nth-child(1) {
  grid-column: 1 / 3; /* span across two columns */
}
```

- Use **fr** units for flexible column sizing.
- Combine Grid with media queries for responsive layouts.

**When to use:**
- Flexbox → simple row/column layouts.
- Grid → full-page or complex, two-dimensional layouts.

---

## 9. CSS Units
Common units for element height and width:

| Unit | Description |
|------|-------------|
| px | Fixed size in pixels |
| % | Relative to parent container |
| em | Relative to the font-size of the parent element |
| rem | Based on root font size (usually 16px) |
| vh | 1% of the viewport height |
| vw | 1% of the viewport width |

### Usage Tips
- Use `rem` for typography — consistent scaling.
- Use `%` or `vh/vw` for flexible layouts.
- Avoid excessive `px` usage unless precise control is needed.

Example:
```css
#left {
  width: 45%;
  background-color: orange;
}
#right {
  width: 55%;
  background-color: greenyellow;
  text-align: center;
}
```
45% + 55% = 100% → perfect two-column responsive split.

---

## 10. Navigation Menus
To create a navigation bar, you can use the `<ul>` and `<li>` list system inside a `<nav>` element.

Example:
```html
<header>
  <nav>
    <ul>
      <li class="btn nav-link">Home</li>
      <li class="btn nav-link">Email Me</li>
      <li class="btn nav-link">About Facebook Pay</li>
      <li class="btn nav-link">Sign in</li>
    </ul>
  </nav>
</header>
```

Each `<li>` can be styled with CSS to look like a button or link. You can use Flexbox on the `<ul>` to arrange the list items horizontally:

```css
nav ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
}
```

---

## 11. The Box Model: Padding, Border, Margin
Each HTML element is a box with four layers:

- **Content:** the actual text or image.
- **Padding:** space *inside* the element, between the content and border.
- **Border:** the outline around the padding.
- **Margin:** space *outside* the border that separates elements.

```css
.box {
  margin: 20px;
  border: 2px solid black;
  padding: 10px;
}
```
If the content is 100px wide, the total width becomes 164px (adding padding, border, and margin).

---

## 12. Shorthand for Padding and Margin
CSS shorthand lets you set multiple sides in one line.

### Four values (top, right, bottom, left)
```css
padding: 10px 20px 30px 40px;
```

### Two values (vertical | horizontal)
```css
padding: 50px 100px;
```

### One value (all sides equal)
```css
padding: 50px;
```

The same rules apply for `margin`. Think clockwise — **top → right → bottom → left**.

---

## 13. Centering with Flexbox
Center any element both vertically and horizontally:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

---

## Summary
- **Flexbox** = one-dimensional layouts (row or column).
- **Grid** = two-dimensional layouts (rows and columns).
- **Semantic HTML** = structure with meaning.
- **justify-content** = main axis alignment.
- **align-items** = cross axis alignment.
- **Percent units** make layouts responsive.
- **Padding/Margin shorthand** saves time.
- **Box Model** defines how elements take up space.
- **Flexbox** for alignment; **Grid** for structure.
