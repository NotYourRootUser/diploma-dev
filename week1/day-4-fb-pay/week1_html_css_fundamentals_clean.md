# Week 1 --- HTML & CSS Fundamentals

## 1. Layout Basics: Padding, Margin, Border

**Concept:**\
- *Padding* = space inside the element (between content and border).\
- *Border* = the outline surrounding the element.\
- *Margin* = space outside the element (between elements).

**Anchor:** Content → Padding → Border → Margin --- like layers of an
onion.

------------------------------------------------------------------------

## 2. Moving Icons Below a Button

**Goal:** Place icons under a button text.

### HTML Hack (not ideal)

``` html
<button>Let's Chat<br /><i class="fa fa-linkedin"></i></button>
```

-   Uses `<br />` for a manual line break.
-   Works but mixes layout and content.

### CSS Way (best practice)

``` css
.chat-btn {
  display: block; /* separates elements vertically */
  border: none;
  width: 200px;
  padding: 14px 25px;
  margin: 20px 0px;
  font-weight: 700;
}
```

**Why better:**\
- Keeps layout in CSS (presentation layer).\
- More flexible for responsive design.\
- Accessible and maintainable.

**Anchor:** HTML adds meaning; CSS defines flow.

------------------------------------------------------------------------

## 3. Adding Images

Two main approaches:

### (1) Image via HTML

``` html
<section id="right">
  <img id="image" src="https://..." alt="phones" />
</section>

#image {
  width: 90%;
}
```

-   Use when image is part of the content.\
-   `alt` text provides accessibility.

------------------------------------------------------------------------

### (2) Image via CSS (Background)

``` css
#right {
  width: 55%;
  height: 600px;
  background-image: url("https://...");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}
```

-   Use when image is decorative or layout-based.\
-   Doesn't need `alt` text.\
-   Allows more positioning control.

**Rule of Thumb:**\
If it has meaning → use `<img>`.\
If it decorates → use `background-image`.

**Anchor:** HTML shows meaning, CSS paints style.

------------------------------------------------------------------------

## 4. `<span>` Tag

**Definition:**\
`<span>` is an inline container for styling a specific piece of text
inside a block.

``` html
<h1>Facebook <span>Pay</span></h1>
```

``` css
span {
  color: #396ee1;
}
```

-   No special meaning --- purely structural.\
-   Perfect for coloring or styling words inline.\
-   Inline means it doesn't break line flow.

**Anchor:** Use `<div>` for blocks, `<span>` for words.

**Example Uses:** - Highlighting part of a title or button text. -
Coloring dynamic values in dashboards.

------------------------------------------------------------------------

## 5. Best Practice Summary

  ---------------------------------------------------------------------------
  Concept              HTML Role             CSS Role            Notes
  -------------------- --------------------- ------------------- ------------
  `<br />`             Line break for text   Not for layout      Only use in
                                                                 paragraphs
                                                                 or addresses

  `display: block`     --                    Controls layout     Preferred
                                             flow                for spacing
                                                                 and
                                                                 structure

  `<img>`              Meaningful image      Semantic            Use with
                                                                 `alt` text

  `background-image`   Decorative            Style only          Use for
                                                                 banners or
                                                                 patterns

  `<span>`             Inline container      Small text styling  Use within
                                                                 headings or
                                                                 paragraphs
  ---------------------------------------------------------------------------

------------------------------------------------------------------------

## Core Anchors

-   HTML = structure and meaning.\
-   CSS = layout and style.\
-   Div = block. Span = inline.\
-   HTML shows meaning, CSS paints style.\
-   Use CSS for layout, not `<br />` tricks.

------------------------------------------------------------------------

End of Week 1 Notes --- HTML/CSS Layout Foundations
