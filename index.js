let JSONUtil = {};

const isStringEvaluatedAsFunction = (str) => {
  let isFunction = false;
  try {
    isFunction = typeof eval(`(${str})`) === "function";
  } catch (error) {
    // In case of syntax errors or other exceptions, isFunction remains false
  }
  return isFunction;
};

(function () {
  JSONUtil.stringify = (obj) =>
    JSON.stringify(obj, (_, value) =>
      typeof value === "function" ? value.toString() : value
    );

  JSONUtil.parse = (str) =>
    JSON.parse(str, (_, value) =>
      typeof value !== "string"
        ? value
        : isStringEvaluatedAsFunction(value)
        ? eval(`(${value})`)
        : value
    );
})();

exports.JSONUtil = JSONUtil;
