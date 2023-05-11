import './components/style/App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello universe</h1>
        <img is='gif' src='./200w.gif' alt='ufo'/>
        <h2>I'm in the milky way</h2>
        <h3>Third rock from the sun</h3>
        <div className='terra'>
          <h3>Earth</h3>
          <ul>
            <li>Age: 45 billion years</li>
            <li>Radius: 3,988 miles</li>
            <li>Mass: 597x10^2k4g</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
