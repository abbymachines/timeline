import ".Timeline.css";
// import TimelineEvent from "./TimelineEvent";
import timelineData from "/App.js";

const Timeline = () => {

  for (var i=0; timelineData["events"].length; i++) {
    theEvent = timelineData["events"][i];

    <TimelineEvent person={theEvent["person"]} theStatus={theEvent["status"]} timestamp={theEvent["timestamp"]} />;
  }

  return (
    // for object in the timeLinedata,
    // render a TimelineEvent component
    // & pass the appropriate data to it

    // for event in timelineData["events"]:
    //    render <TimelineEvent person=timelineData["person"] status=timelineData["status"] timestamp =timelineData["timestamp"]
    console.log("replace me with a return value")
  );
};

export default Timeline;
