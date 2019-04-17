# Attractor's schemas

The schemas contained within this package are used all across the Attractor ecosystem to validate config files, requests to APIs and more. It ensures users always send just the right data.

## Usage

To get started require the schema you want to use.

```js
const { signUp } = require('@attractor/schemas')
```

And to run the validation just do:

```js
    if (!await signUp.isValid(data)) {
        /* do some error stuff */
    }
```

Usage in formik based forms is even more straightforward, just pass it as a schema.
