import './components/style/App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello universe</h1>
        <img is='gif' src='./200w.gif' alt='ufo'/>

        <div className='racing-ufo'>
          <img src='./ufle.png'/>
        </div>
        <h2>I'm in the milky way</h2>
        <h3>Third rock from the sun</h3>

        <div className='button-banner'>
          <button className='button-prime'>Hello</button>
          <button>click here to be sent directly to the mothership</button>
        </div>


        
        <div className='terra'>
          <h3>Earth</h3>
          <ul>
            <li>Age: 45 billion years</li>
            <li>Radius: 3,988 miles</li>
            <li>Mass: 597x10^2k4g</li>
          </ul>
        </div>
      </header>

      <footer>
        <img className='alien-guy' src='/alien.jpg' alt='alien spining'/>
      </footer>
    </div>
  );
}

export default App;
