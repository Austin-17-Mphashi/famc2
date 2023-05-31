import React, { useRef, useState } from "react";
import { projectFirestore, auth} from "../firebase";

import { v4 } from "uuid";

function CreateEvent() {
  
  const route = `events`
  const eventsRef = projectFirestore.collection(route);

  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [time, setTime] = useState("");
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("");
  const dummy = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;

    const newEvent = {
        date: date,
        duration: duration,
        time: time,
        topic:topic,
        id:v4(),
        uid:uid,
        audience:audience,
      };
  
      await eventsRef.add(newEvent);


    // Reset the form
    setDate("");
    setDuration("");
    setTime("");
    setTopic("");
    setAudience("");
  };

  
  return (
    <div>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Duration:</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Topic:</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Target Audience:</label>
          <input
            type="text"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateEvent;
