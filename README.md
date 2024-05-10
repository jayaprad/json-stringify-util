## JSON Stringify Utility

A Node.js module for serializing and deserializing JavaScript objects containing functions.

### Installation

You can install this module via npm:

```
npm install --save json-stringify-util
```

## Usage

**Importing the Module**

```javascript
const { JSONUtil } = require("json-function-utility");
```

**Example Usage**

Stringify an Object with Functions

```javascript
const obj1 = {
  prop1: "value",
  prop2: () => {
    console.log("This is a function");
  },
};

const jsonString = JSONUtil.stringify(obj1);
console.log(jsonString);
```

Parse a JSON String with Functions

```javascript
const obj2 = JSONUtil.parse(jsonString);
obj2.prop2(); // Outputs: "This is a function"
```

## API

**JSONUtil.stringify(obj)**

- Serializes an object with functions to JSON format.
- Returns a JSON string representing the object.

**JSONUtil.parse(jsonString)**

- Parses a JSON string containing functions back into an object.
- Returns the parsed object with functions intact.
