import "./App.css";
import timelineData from "./data/timeline.json";
import Timeline from "./components/Timeline.js";

function App() {
  console.log("The value of timelineData is", timelineData);
  console.log("We should use the timelineData in our project somehow...");

  // <Timeline data=timelineData />;
  <Timeline />
  return <div></div>;
}

export default App;
