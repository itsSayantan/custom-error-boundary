/**
 * This file is just to demonstrate the usage of this library
 */

import React from 'react';
import './App.css';
import CEB from '../CEB/CEB';

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
