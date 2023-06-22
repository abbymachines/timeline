import ".Timeline.css";
import TimelineEvent from "./TimelineEvent";
import timelineData from "/App.js";

const Timeline = () => {
  return (
    <Timeline data={timelineData} />
  );
};

export default Timeline;
