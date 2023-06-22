import ".TimelineEvent.css";
import TimeStamp from "./TimeStamp";
import timelineData from "/App.js";

const TimelineEvent = (props) => {
  <section>
    {props.person}
    {props.theStatus}
    {props.timestamp}
  </section>
};

export default TimelineEvent;
