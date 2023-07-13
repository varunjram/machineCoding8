import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import EventCard from "../components/EventCard";
import Navigation from "../components/Navigation";
import { Dropdown } from "primereact/dropdown";

export default function Home() {
  const { meetups } = useAppContext();

  const typeOptions = ["Online", "Offline"];

  const [type, setType] = useState(null);

  const meetupsToShow = meetups?.filter((meetup) => (!type ? true : meetup?.eventType === type));

  return (
    <div>
      <Navigation />
      <main>
        <div className="flex justify-content-between align-items-center ">
          <h1>Meetup Events</h1>
          <Dropdown
            value={type}
            onChange={(e) => setType(e.value)}
            options={typeOptions}
            // optionLabel="name"
            editable
            placeholder="Select a type"
            className="w-full md:w-14rem"
          />
        </div>
        <div className="flex flex-wrap">
          {meetupsToShow.map((ele, i) => {
            return <EventCard data={ele} />;
          })}
        </div>
      </main>
    </div>
  );
}
