import React from 'react';
import logo from './logo.svg';
import './App.css';
import CollegeBasketballTeams from './CollegeBasketballTeams.json';

interface CollegeTeams {
  school: string;
  name: string;
  pop: number;
  city: string;
  state: string;
}

// This is a COMPONENT
class Team extends React.Component<CollegeTeams> {
  render() {
    const oneTeam = this.props;

    return (
      <div
        style={{
          border: '3px solid black',
          borderRadius: '10px',
          width: '300px',
          textAlign: 'center',
          margin: '0 auto',
          marginBottom: '10px',
        }}
      >
        <br />
        <h2>{oneTeam.school}</h2>
        <h3>Mascot Name: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
        <br />
      </div>
    );
  }
}

function TeamList() {
  return <div></div>;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
