import logo from './logo.svg';
import './App.css';
import { googleFormsToJson } from 'react-google-forms-hooks'
import {useEffect} from "react";

function App() {

  // react-google-forms-hooks
  const result = googleFormsToJson(
    'https://forms.gle/M7YGFAMM4q7Sa8gf7'
  )

  console.info({result})

  // Google form api
  useEffect(() => {
    fetch('https://forms.googleapis.com/v1beta/forms/1FAIpQLSfxR6j2ro5P-z5zbb7SaTV5pnYVbn22rgn2ZWgpxyW0-KkjTA')
      .then(res => res.json())
      .then((data) => {
        console.log({data})
      })
      .catch(console.log)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
