// Import the required Babel types
const { types: t } = require("@babel/core");

module.exports = function () {
  return {
    visitor: {
      AssignmentExpression(path) {
        // Check if the assignment is to `exports` and has the form `exports.<name> = <value>`
        if (
          t.isMemberExpression(path.node.left) &&
          t.isIdentifier(path.node.left.object, { name: "exports" })
        ) {
          const property = path.node.left.property;
          const value = path.node.right;

          // Create the new `module.exports` assignment
          path.replaceWith(
            t.assignmentExpression(
              "=",
              t.memberExpression(
                t.identifier("module"),
                t.identifier("exports")
              ),
              t.objectExpression([t.objectProperty(property, value)])
            )
          );
        }
      },
    },
  };
};
