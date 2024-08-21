const { JSONUtil } = require("json-stringify-util");

const obj1 = {
  prop1: "value",
  prop2: () => {
    console.log("This is a function");
  },
};

// Stringifies the object
const jsonString = JSONUtil.stringify(obj1);

// Outputs: {"prop1":"value","prop2":"() => {\n    console.log(\"This is a function\");\n  }"}
console.log(jsonString);

// Parses the JSON string
const obj2 = JSONUtil.parse(jsonString);

// Invokes the function
// Outputs: "This is a function"
obj2.prop2();
