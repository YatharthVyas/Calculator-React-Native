# Calculator-React-Native
Calculator app built using React Native. It performs basic arithmetic operations such as addition, subtraction, multiplication and division.

## Demo

![Demo](/git-assets/Calculator.gif)


## Architecture

![Architecture](/git-assets/CalculatorArchitecture.png)


## Edge Cases

- <b>Really Huge Nummbers:</b> They are expresed in their exponential form
- <b>Divide by Zero:</b> Displays Infinity. This can be used in futher equations too like <i>Infinity * Infinity = Infinity</i>
- <b>Wrong Syntax of Input:</b> There is a two level filter/sanitization done:

  - The first level is a `regex` test: https://regexr.com/62tsp <br> This test is custom tailored to work only for the basic calculator. It takes into considerations some of the limitations and covers all possible cases accordingly
  - Second Level is a `try-catch` block to detect if the equation passed to an anonymous function throws any sort of error. This covers any case that might have passed the regex test but would fail to give a valid equation answer. For example: <i>Infinity * 0</i>

## Resources

- Parsing String Equation: https://stackoverflow.com/questions/2276021/evaluating-a-string-as-a-mathematical-expression-in-javascript

- Flex Layout: https://reactnative.dev/docs/flexbox

- Components: https://reactnative.dev/docs/components-and-apis#basic-components

- Folder Structure: https://reboot.studio/blog/folder-structures-to-organize-react-project/

- Never Use JS Eval: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
