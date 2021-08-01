# Calculator-React-Native
Calculator app built using React Native. It performs basic arithmetic operations such as addition, subtraction, multiplication and division.

## Build Instructions

This app was initialized using expo. To run it, use:
1. `npm install`
2. `npm start` or `npm run web/android/ios`

## Demo

![Demo](/git-assets/Calculator.gif)


## Architecture

![Architecture](/git-assets/CalculatorArchitecture.png)

## TLDR of How it works?

- The Equation is stored as a string.
- The input is controlled using a fixed set of buttons displayed on the keypad
- Each button press appends the number/operator to the Input display.
- When the Equal button is pressed, it runs a regex test to validate and sanitize the input. This gets rid of any malicious injections and then passed on the equation as a string to an anonymous function which executes and returns the value of the equation by treating it as a regular arithmetic operation. Any errors thrown are detected using a try catch block which also checks for NaN values. Refer to the code below:

Code:<br>
https://github.com/YatharthVyas/Calculator-React-Native/blob/main/src/components/Button/EqualButton.js#L7-L30

```jsx
const {equation, setEquation} = useContext(EquationContext);
const onNumberClickHander = () =>{
  try{
    // Check if the equation is valid. Refer: https://regexr.com/62tsp
    if (!/^([+\-]{0,1}([0-9\.]|(Infinity))+((e\^)[+\-]{0,1}){0,1}[0-9\.]*[+\-/*]{0,1})+$/g.test(equation)){
      throw Error;
    }

    /* The below method executes an anonymous function whose body contains the equation.
    *  This method is safer as compared to eval because of `use strict`
    */
    const result = Function(`'use strict'; return (${equation})`)();
    if (isNaN(result)){
      throw Error;
    }
    else{
      setEquation(result);
    }
  }
  catch(error){
    // display toast
    setEquation('Invalid Equation')
  }
}
```

## Edge Cases

- <b>Really Huge Nummbers:</b> They are expresed in their exponential form
- <b>Divide by Zero:</b> Displays Infinity. This can be used in futher equations too like <i>Infinity * Infinity = Infinity</i>
- <b>Equations that do not have a solution:</b> Display an Invalid Expression Message. The next point explains how this works
- <b>Wrong Syntax of Input:</b> There is a two level filter/sanitization done:

  - The first level is a `regex` test: https://regexr.com/62tsp <br> This test is custom tailored to work only for the basic calculator. It takes into considerations some of the limitations and covers all possible cases accordingly
  - Second Level is a `try-catch` block to detect if the equation passed to an anonymous function throws any sort of error. This covers any case that might have passed the regex test but would fail to give a valid equation answer. For example: <i>Infinity * 0</i>

## Resources

- Parsing String Equation: https://stackoverflow.com/questions/2276021/evaluating-a-string-as-a-mathematical-expression-in-javascript

- Flex Layout: https://reactnative.dev/docs/flexbox

- Components: https://reactnative.dev/docs/components-and-apis#basic-components

- Folder Structure: https://reboot.studio/blog/folder-structures-to-organize-react-project/

- Never Use JS Eval: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
