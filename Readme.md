# WobblyEyes

WobblyEyes is a JavaScript library that creates a pair of animated eyes that follow the mouse cursor and blink periodically.

## Installation

To use WobblyEyes, simply include the `src/initWobblyEyes.js` script in your HTML file:

```html
<script src="src/initWobblyEyes.js" async type="module"></script>
```

## Usage

1. Add a container element with the ID `wobblyEyes` to your HTML:

```html
<div id="wobblyEyes"></div>
```

2. Initialize the `WobblyEyes` class in your JavaScript:

```js
import { WobblyEyes } from "./src/index.js";

const container = document.querySelector("#wobblyEyes");

new WobblyEyes(container, {
  eyeColor: "white",
  pupilColor: "black",
  eyelidColor: "#ffccaa",
  lashColor: "black",
  width: 100,
  height: 200,
});
```

## Options

The `WobblyEyes` class accepts an options object to customize the appearance of the eyes:

- `eyeColor`: The color of the eye (default: `"white"`).
- `pupilColor`: The color of the pupil (default: `"black"`).
- `eyelidColor`: The color of the eyelids (default: `"#ffccaa"`).
- `lashColor`: The color of the eyelashes (default: `"black"`).
- `width`: The width of each eye (default: `50`).
- `height`: The height of each eye (default: `100`).

## Example

Here is a complete example of how to use WobblyEyes:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wobbly Eyes</title>
    <script src="src/initWobblyEyes.js" async type="module"></script>
  </head>
  <body>
    <div id="wobblyEyes"></div>
  </body>
</html>
```

```js
import { WobblyEyes } from "./src/index.js";

const container = document.querySelector("#wobblyEyes");

new WobblyEyes(container, {
  eyeColor: "white",
  pupilColor: "black",
  eyelidColor: "#ffccaa",
  lashColor: "black",
  width: 100,
  height: 200,
});
```
