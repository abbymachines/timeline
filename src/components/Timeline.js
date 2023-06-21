import ".Timeline.css";
import TimelineEvent from "./TimelineEvent";
import timelineData from "/App.js";

const Timeline = (timelineData) => {
  return (
    <section>
      for (const "status" in timelineData["events"]){" "}
      {console.log(`${"events"}: ${timelineData["person"]}`)}
    </section>
  );
};

export default Timeline;
