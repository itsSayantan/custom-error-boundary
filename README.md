# custom-error-boundary

Custom error boundary component for react.js applications.

# Installation

```$ npm install --save custom-error-boundary```

# Usage
Consider you have a component called ```App``` component which looks like this:

```js
import React from 'react';
import './App.css';

function App() {
  return (
      <Divider dividend={6} divisor={0} />
  );
}

function Divider(props) {
  const result = props.dividend / props.divisor
  
  if (isNaN(result)) {
    throw new Error('Result should be a number: ' + errorSuffixString)
  } else if (result === Infinity) {
    throw new Error('Result cannot be Infinity: ' + errorSuffixString)
  }

  return (
    <p>The result after divion is: {result}</p>
  )
}

export default App;
```

If the error is thrown due to faulty props, the page will break. Now we will try to implement the ```custom-error-boundary``` library. For that, we need to do the following steps:

- Install the library using the installation command already provided.
- Import the library like so: ```import CEB from 'custom-error-boundary'```
- Wrap the returned JSX in the ```<CEB></CEB>``` JSX, like: ```<CEB><Divider dividend={6} divisor={0} /></CEB>```
- Send appropriate props to the ```CEB``` JSX, currently the following [list of props](#props-supported) are supported.

Now, the above ```App``` looks like this:

```js
import React from 'react';
import './App.css';
import CEB from 'custom-error-boundary';

function App() {
  return (
    <CEB fallbackUI={CustomFallbackUI}>
      <Divider dividend={6} divisor={0} />
    </CEB>
  );
}

function Divider(props) {
  const result = props.dividend / props.divisor
  const errorSuffixString = 'Please check your inputs, both the props: dividend and divisor should be sent and make sure the divisor is not 0.'
  
  if (isNaN(result)) {
    throw new Error('Result should be a number: ' + errorSuffixString)
  } else if (result === Infinity) {
    throw new Error('Result cannot be Infinity: ' + errorSuffixString)
  }

  return (
    <p>The result after divion is: {result}</p>
  )
}

function CustomFallbackUI() {
  return <p>Custom fallback UI</p>
}

export default App;
```

Notice that a ```CustomFallbackUI``` component has been added. This is because we are passing the ```fallbackUI``` prop which requries a 'functional component' to be passed to it. Yes, this is a [render prop](https://reactjs.org/docs/render-props.html). This component will be the fallback UI for the erroneous component that the ```CEB``` error boundary component is wrapping.

# Props Supported
- **fallbackUI**: Takes a functional component and renders it when any error is encountered in the wrapped JSX.
- **theme**: Takes a string. Not required when ```fallbackUI``` prop is provided as it has higher precedence if both the props are sent. List of available themes are provided in the [Supported Themes](#supported-themes) section.

# Supported Themes
- Basic

# Contributing
Fork the project, make changes and send me a pull request.

For adding a theme, follow these steps:
- Clone this repository.
- Add your component under ```./src/fallback/components```. You can take the example of the ```Basic``` component in the same folder.
- Import and export your component in the ```./src/fallback/index.js``` file.
- In order to test the compoent, follow these steps:
  - Run ```npm run build``` inside this (custom-error-boundary) project,
  - Create another project (example: Test) and implement a simple component like the ```App``` component shown above in the [Usage](#usage) section.
  - Copy the ```lib``` folder from the ```custom-error-boundary``` project and replace the ```lib``` folder inside the ```./node_modules/custom-error-boundary``` folder.
  - Send necessary props in your ```CEB``` to test your results.
  - Created fallback compoent should be functional.
  - The created components do not support props as of now.
