import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";
import timelineData from "/App.js";

const Timeline = () => {

  for (var i=0; timelineData["events"].length; i++) {
    const theEvent = timelineData["events"][i];

    <TimelineEvent person={theEvent["person"]} theStatus={theEvent["status"]} timestamp={theEvent["timestamp"]} />;
  }
};

export default Timeline;
