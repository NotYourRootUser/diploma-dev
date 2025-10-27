# JavaScript Notes: Strings

## Defining Strings

Three ways to create strings:
Single quotes ' '
Double quotes " "
Backticks `  ` (template literals)

Template literals allow variable embedding and multi-line text
Example: `Hello, ${name}`

## Escape Characters

\n new line
\t tab
\\ backslash

Example: "Name:\tJohn"

## String Concatenation

Before ES6:
"Hello " + name + "!"
Needs manual spaces

Template literals:
`Hello ${name}`

## Length and Indexing

.length returns number of characters
Indexing starts at 0

First character:
myString[0]

Last character:
myString[myString.length - 1]
or
myString.at(-1)

## Common Operations Practiced

Concatenated multiple strings and printed the result
Used template literals for cleaner output
Calculated and printed string lengths
Accessed characters by index
