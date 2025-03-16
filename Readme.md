# WobblyEyes

WobblyEyes is a JavaScript library that creates a pair of animated eyes that follow the mouse cursor and blink periodically.

## Installation

To use WobblyEyes, simply install it from npm:

```sh
npm install wobblyeyes
```

## Usage

1. Add a container element with the ID `wobblyeyes` to your HTML:

```html
<div id="wobblyEyes"></div>
```

2. Initialize the `WobblyEyes` class in your JavaScript:

```js
import { WobblyEyes } from "wobblyeyes";

const container = document.querySelector("#wobblyEyes");

const wobblyEyes = new WobblyEyes(container, {
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

## Cleaning up

Make sure to call `wobblyEyes.destroy()` if you want to remove the wobbly eyes. If not,
the DOM might get flooded with intervals and event handlers over time.
