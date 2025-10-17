
# 🧩 HTML Forms — Complete Notes

## 1. What an HTML Form Is
An **HTML form** is used to collect data from users — such as names, emails, or messages — and send it to a server for processing.

Forms are everywhere: login pages, search bars, checkout forms, and contact pages.  
They act as a **bridge between users and websites**, turning input into data the server can use.

---

## 2. The `<form>` Element

Example:
```html
<form action="/submit" method="post" autocomplete="on">
</form>
```

### Key Attributes
- **`action`** — The URL where the form data goes when submitted.
- **`method`** — How data is sent:
  - `GET`: shows data in the URL (useful for searches).
  - `POST`: hides data in the body (used for logins or forms with sensitive info).
- **`autocomplete`** — Lets browsers fill fields automatically.

---

## 3. Inside the `<form>`
A basic form includes these parts:
1. **Form** → the container for everything.
2. **Label** → tells the user what each field is for.
3. **Input** → where the user types.
4. **Submit button** → sends the data to the server.

Example:
```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>
```

---

## 4. The `<label>` Element
The `<label>` gives context to inputs — it tells the user (and screen readers) what each input does.

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name">
```

- `for="name"` matches the input’s `id="name"`.  
- Clicking the label focuses the input box — improving usability and accessibility.

---

## 5. The `<input>` Tag
The `<input>` tag defines the field where users type or select data.

```html
<input type="text" id="name" name="name" required>
```

### Common Input Types
| Type | Description |
|------|--------------|
| `text` | One-line text field |
| `password` | Hides characters |
| `email` | Requires a valid email format |
| `radio` | Choose one option from a group |
| `checkbox` | Multiple selections allowed |
| `number` | Only numbers |
| `file` | Upload files |
| `color` | Color picker |
| `hidden` | Invisible field used by backend |

---

## 6. Important Attributes
| Attribute | Purpose |
|------------|----------|
| `name` | Identifies the data when sent to the server |
| `required` | Forces the user to fill the field |
| `placeholder` | Shows example text inside the field |
| `value` | Sets a default value |
| `readonly` | User can see but not change it |
| `disabled` | Field is visible but unusable |
| `min` / `max` | Limits numeric or date values |
| `maxlength` | Limits text length |

---

## 7. `mailto:` Action Example
```html
<form action="mailto:someone@email.com" method="post">
```
- Opens the user’s email client (like Outlook or Gmail) with the recipient pre-filled.
- Useful for small projects, not recommended for production (less secure).

---

## 8. Text Areas
For multi-line input like comments or messages, use `<textarea>` instead of `<input>`.

```html
<label for="message">Your Message:</label>
<textarea id="message" name="message" rows="5" cols="30" placeholder="Type here..." required></textarea>
```

---

## 9. Radio Buttons — “Subject” Example
Use radio buttons when you want users to pick only **one** option.

```html
<label>Subject:</label><br>
<input type="radio" id="sales" name="subject" value="Sales">
<label for="sales">Sales</label><br>
<input type="radio" id="support" name="subject" value="Support">
<label for="support">Support</label><br>
<input type="radio" id="other" name="subject" value="Other">
<label for="other">Other</label><br>
```

### Explanation
- All buttons share the same `name` → only one can be chosen.
- The `id` and `for` link each label to its button.

---

## 10. CSS Styling for Forms

### Link your stylesheet
```html
<link rel="stylesheet" href="form.css">
```

### Example CSS
```css
input {
  width: 40%;
}

label {
  font-family: Tahoma, sans-serif;
}
```

---

## 11. Attribute Selectors
You can style inputs based on their `type` attribute:

```css
[type=text], [type=email] {
  padding: 2px 2px;
  margin: 8px 0;
  border: none;
  border-bottom: 2px solid purple;
}
```
This affects only text and email fields, not others.

---

## 12. The Next-Sibling Combinator (`+`)
Selects elements directly **after** another element.

```css
[type=radio] + label {
  color: purple;
}
```
- Styles only labels placed immediately after each radio button.
- If the label isn’t right next to the input, it won’t be styled.

---

## 13. Styling the Text Area and Submit Button
```css
textarea {
  border: 2px solid purple;
}

[type=submit] {
  background-color: purple;
  color: white;
  width: 30%;
}
```
- Styles the message box and submit button.
- You can also add hover effects:

```css
[type=submit]:hover {
  background-color: #a64ca6;
  cursor: pointer;
}
```

---

## 14. Putting It All Together

```html
<form action="/submit" method="post">
  <label for="name">Your Name:</label><br>
  <input type="text" id="name" name="name" placeholder="Type your name here..." required><br><br>

  <label for="email">Your Email:</label><br>
  <input type="email" id="email" name="email" placeholder="Type your email here..." required><br><br>

  <label>Subject:</label><br>
  <input type="radio" id="sales" name="subject" value="Sales">
  <label for="sales">Sales</label><br>
  <input type="radio" id="support" name="subject" value="Support">
  <label for="support">Support</label><br>
  <input type="radio" id="other" name="subject" value="Other">
  <label for="other">Other</label><br><br>

  <label for="message">Your Message:</label><br>
  <textarea id="message" name="message" rows="5" cols="30" placeholder="Type your message here..." required></textarea><br><br>

  <input type="submit" value="Submit">
</form>
```

---

✅ **In summary:**
- Forms collect user input and send it to servers.  
- Use labels to describe inputs and connect them with `for` + `id`.  
- Attribute selectors (`[type=...]`) and sibling combinators (`+`) help style specific inputs.  
- Textareas handle multi-line text.  
- CSS can make forms both functional and beautiful.

---

**Memory anchor:**  
> “Forms are how users *speak* to websites.”
