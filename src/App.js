import "./App.css";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import data from "./data.json";
import user from "./user.json";
function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics data={data} />
    </div>
  );
}

export default App;
