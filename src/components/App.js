import React  from 'react';


const App = () => {

  fetch('lawyers.csv')
  .then(response => response.text())
  .then(data => console.log(data))

  return (
    <h1>Test</h1>
  )
}

export default App;
