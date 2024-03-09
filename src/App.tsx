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

//function
function Welcome() {
  return (
    <div>
      <h1>Welcome!</h1>
      <br />
      <h2>Find information about college basketball teams!</h2>
    </div>
  );
}

// This might be a component
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

// comment
function TeamList() {
  return (
    <div>
      {CollegeBasketballTeams.teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
