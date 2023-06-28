import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome test react app build with jenkins-ec2</p>

        <p>env is {process.env.REACT_APP_ENV}</p>
        <p>value : {process.env.REACT_APP_KEY1}</p>
      </header>
    </div>
  );
}

export default App;
