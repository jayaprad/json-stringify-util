const { JSONUtil } = require("./index.js");

const obj1 = {
  prop1: "value",
  prop2: () => {
    console.log("This is a function");
  },
};

const jsonString = JSONUtil.stringify(obj1);
console.log(jsonString);

const obj2 = JSONUtil.parse(jsonString);
obj2.prop2(); // Outputs: "This is a function"
